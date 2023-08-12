import { OrganizationsRespository } from "../repositories/OrganizationsRespository"
import { Organization } from "../../enterprise/entities/organization";
import { Identification } from "../../enterprise/entities/value-objects/identification";
import { ServiceGeneric } from "../../../../core/services/service.generic";

interface IOrganization {
    id?: string;
    name: string;
    description: string;
    logo?: string;
    identification: string;
    user_id: string;
}

class OrganizationsService extends ServiceGeneric<Organization> {
    constructor() {
        super(OrganizationsRespository)
    }

    async create({ identification, name, description, logo, user_id }: IOrganization): Promise<IOrganization> {

        const identificationNormalized = Identification.identificationNormalizer(identification);
        const validatorResult = Identification.identificationValidator(identificationNormalized);

        if (!validatorResult.isValid) {
            throw new Error(`Adicione um ${validatorResult.type} válido.`);
        }

        const organizationExists = await this.genericRepository.findOne({ 
            where: {
                identification,
                user_id
            }
        });

        if (organizationExists) {
            return organizationExists;
        }

        const organization = this.genericRepository.create({
            identification,
            name,
            description,
            logo,
            user_id
        });

        await this.genericRepository.save(organization);

        return organization;
    }

    async index(): Promise<IOrganization[]> {
        const organizations = await this.genericRepository.find();
        return organizations;
    }
}

export { OrganizationsService }