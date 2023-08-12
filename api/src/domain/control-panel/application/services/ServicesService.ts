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

    async index(): Promise<IService[]> {
        const services = await this.genericRepository.find();
        return services;
    }

    async create(service: IService): Promise<IService> {

        const serviceExists = await this.genericRepository.findOne({ 
            where: {
                name: service.name
            }
        });

        if (serviceExists)
            return serviceExists;

        const serviceCreated = this.genericRepository.create(service);

        await this.genericRepository.save(serviceCreated);

        return serviceCreated;
    }

}

export { ServicesService }