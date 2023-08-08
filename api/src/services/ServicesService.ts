import { EntityManager } from "typeorm";
import { getServiceRepository } from "../repositories/ServicesRespository"
import datasource from "../database/datasource";

class ServicesService {
    async create({ name, description, logo, price }) {

        const serviceManager = new EntityManager(datasource);

        const servicesRepository = getServiceRepository(serviceManager);

        const serviceExists = await servicesRepository.findOne({ 
            where: {
                name
            }
        });

        if (serviceExists) {
            return serviceExists;
        }

        const service = servicesRepository.create({
            name,
            description,
            logo,
            price
        });

        await servicesRepository.save(service);

        return service;
    }
}

export { ServicesService }