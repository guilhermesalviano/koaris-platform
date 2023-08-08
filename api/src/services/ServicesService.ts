import { EntityManager } from "typeorm";
import { getServiceRepository } from "../repositories/ServicesRespository"
import datasource from "../database/datasource";

interface IService {
    name: string;
    description: string;
    logo: string;
    price?: string;
}
class ServicesService {
    async create({ name, description, logo, price }: IService) {

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

    async index() {
        const serviceManager = new EntityManager(datasource);

        const servicesRepository = getServiceRepository(serviceManager);

        const services = await servicesRepository.find();

        return services;
    }
}

export { ServicesService }