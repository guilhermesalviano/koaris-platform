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

    public async checkIfServiceAlreadyExistsInDB({ id }: IService): Promise<IService> {
        if (!id)
            throw new Error('O campo Id é requerido.');

        const serviceExists = await this.genericRepository.findOne({ 
            where: {
                id
            }
        });

        if (!serviceExists)
            throw new Error('Serviço não encontrado.');

        return serviceExists;
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

    async update(service: IService): Promise<IService> {
        if (!service.id || !service.name || !service.description || !service.logo)
            throw new Error(`Alguns campos faltando.`);

        if (!await this.checkIfServiceAlreadyExistsInDB(service))
            throw new Error("Contato não encontrado.");

        await this.genericRepository.update(service.id, service);

        return service;
    }

    async delete(contact: IService): Promise<Boolean> {
        if (!contact.id)
            throw new Error(`O campo Id está faltando.`);

        const result = await this.genericRepository.delete(contact.id);

        return (result.affected === 0)? false : true;
    }
}

export { ServicesService }