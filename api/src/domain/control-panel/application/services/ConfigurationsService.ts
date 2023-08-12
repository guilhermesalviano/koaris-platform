import { ConfigurationsRespository } from "../repositories/ConfigurationsRespository";
import { ServiceGeneric } from "../../../../core/services/service.generic";
import { Configuration } from "../../enterprise/entities/configuration";

interface IConfiguration {
    id?: string;
    organization_id: string;
    service_id: string;
    logoCustom?: string;
    phone: string;
    socialLinks?: string;
}

class ConfigurationsService extends ServiceGeneric<Configuration> {
    constructor() {
        super(ConfigurationsRespository)
    }

    public async checkIfConfigurationAlreadyExistsInDB({ id }: IConfiguration): Promise<IConfiguration> {
        if (!id)
            throw new Error('O campo Id é requerido.');

        const configurationExists = await this.genericRepository.findOne({ 
            where: {
                id
            }
        });

        if (!configurationExists)
            throw new Error('Configuração não encontrada.');

        return configurationExists;
    }

    async index(): Promise<IConfiguration[]> {
        const configurations = await this.genericRepository.find();
        return configurations;
    }

    async create(configuration: IConfiguration): Promise<IConfiguration> {

        const configurationExists = await this.genericRepository.findOne({ 
            where: {
                organization_id: configuration.organization_id,
                service_id: configuration.service_id,
            }
        });

        if (configurationExists)
            throw new Error("Serviço já configurado.");

        const configurationCreated = this.genericRepository.create(configuration);

        await this.genericRepository.save(configurationCreated);

        return configurationCreated;
    }

    async update(configuration: IConfiguration): Promise<IConfiguration> {
        if (!configuration.id || !configuration.organization_id || !configuration.service_id || !configuration.phone)
            throw new Error(`Alguns campos faltando.`);

        if (!await this.checkIfConfigurationAlreadyExistsInDB(configuration))
            throw new Error("Configuração não encontrada.");

        await this.genericRepository.update(configuration.id, configuration);

        return configuration;
    }

    async delete(contact: IConfiguration): Promise<Boolean> {
        if (!contact.id)
            throw new Error(`O campo Id está faltando.`);

        const result = await this.genericRepository.delete(contact.id);

        return (result.affected === 0)? false : true;
    }
}

export { ConfigurationsService }