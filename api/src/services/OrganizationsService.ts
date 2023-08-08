import { EntityManager } from "typeorm";
import { getOrganizationRepository } from "../repositories/OrganizationsRespository"
import datasource from "../database/datasource";

class OrganizationsService {
    async create({ identification, name, description, logo, user_id }) {

        const organizationManager = new EntityManager(datasource);

        const organizationsRepository = getOrganizationRepository(organizationManager);
        
        const organizationExists = await organizationsRepository.findOne({ 
            where: { 
                identification
            }
        });

        if (organizationExists) {
            return organizationExists;
        }

        const organization = organizationsRepository.create({
            identification,
            name,
            description,
            logo,
            user_id
        });

        await organizationsRepository.save(organization);

        return organization;
    }
}

export { OrganizationsService }