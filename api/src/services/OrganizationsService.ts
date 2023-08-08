import { EntityManager, Repository } from "typeorm";
import { getOrganizationRepository } from "../repositories/OrganizationsRespository"
import datasource from "../database/datasource";
import { Organization } from "../entities/Organization";

class OrganizationsService {
    private organizationManager: EntityManager;
    private organizationsRepository: Repository<Organization>;

    constructor() {
        this.organizationManager = new EntityManager(datasource);
        this.organizationsRepository = getOrganizationRepository(this.organizationManager);
    }

    async create({ identification, name, description, logo, user_id }) {

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
}

export { OrganizationsService }