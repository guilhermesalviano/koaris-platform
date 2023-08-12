import { EntityManager, Repository } from "typeorm";
import { getServiceRepository } from "../repositories/ServicesRespository"
import datasource from "../../../../infra/database/datasource";
import { Service } from "../../enterprise/entities/service";

interface IService {
    name: string;
    description: string;
    logo: string;
    price?: string;
}

class ServicesService {
    private serviceManager: EntityManager;
    private servicesRepository: Repository<Service>;

    constructor() {
        this.serviceManager = new EntityManager(datasource);
        this.servicesRepository = getServiceRepository(this.serviceManager);
    }

    async create({ name, description, logo, price }: IService): Promise<IService> {

        const serviceExists = await this.servicesRepository.findOne({ 
            where: {
                name
            }
        });

        if (serviceExists) {
            return serviceExists;
        }

        const service = this.servicesRepository.create({
            name,
            description,
            logo,
            price
        });

        await this.servicesRepository.save(service);

        return service;
    }

    async index(): Promise<IService[]> {
        const services = await this.servicesRepository.find();
        return services;
    }
}

export { ServicesService }