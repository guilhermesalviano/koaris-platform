import { EntityManager, Repository } from "typeorm";
import { getOrganizationRepository } from "../repositories/OrganizationsRespository"
import datasource from "../../../../infra/database/datasource";
import { Organization } from "../../enterprise/entities/organization";
import { Identification } from "../../enterprise/entities/value-objects/identification";

interface IOrganization {
    id: string;
    name: string;
    description: string;
    logo: string;
    identification: string;
    user_id: string;
}

class OrganizationsService {
    private organizationManager: EntityManager;
    private organizationsRepository: Repository<Organization>;

    constructor() {
        this.organizationManager = new EntityManager(datasource);
        this.organizationsRepository = getOrganizationRepository(this.organizationManager);
    }

    async create({ identification, name, description, logo, user_id }) {

        const identificationNormalized = Identification.identificationNormalizer(identification);
        const validatorResult = Identification.identificationValidator(identificationNormalized);

        if (!validatorResult.isValid) {
            throw new Error(`Adicione um ${validatorResult.type} válido.`);
        }

        const organizationExists = await this.organizationsRepository.findOne({ 
            where: {
                identification,
                user_id
            }
        });

        if (organizationExists) {
            return organizationExists;
        }

        const organization = this.organizationsRepository.create({
            identification,
            name,
            description,
            logo,
            user_id
        });

        await this.organizationsRepository.save(organization);

        return organization;
    }

    async index(): Promise<IOrganization[]> {
        const organizations = await this.organizationsRepository.find();
        return organizations;
    }
}

export { OrganizationsService }