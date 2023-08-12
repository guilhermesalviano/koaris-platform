import { ServicesRespository } from "../repositories/ServicesRespository"
import { Service } from "../../enterprise/entities/service";
import { ServiceGeneric } from "../../../../core/services/service.generic";

interface IService {
    id?: string;
    name: string;
    description: string;
    logo: string;
    price?: string;
}

class ServicesService extends ServiceGeneric<Service> {
    constructor() {
        super(ServicesRespository)
    }

    async create({ name, description, logo, price }: IService): Promise<IService> {

        const serviceExists = await this.genericRepository.findOne({ 
            where: {
                name
            }
        });

        if (serviceExists) {
            return serviceExists;
        }

        const service = this.genericRepository.create({
            name,
            description,
            logo,
            price
        });

        await this.genericRepository.save(service);

        return service;
    }

    async index(): Promise<IService[]> {
        const services = await this.genericRepository.find();
        return services;
    }
}

export { ServicesService }