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

    async create(organization: IOrganization): Promise<IOrganization> {

        const identificationNormalized = Identification.identificationNormalizer(organization.identification);
        const validatorResult = Identification.identificationValidator(identificationNormalized);

        if (!validatorResult.isValid)
            throw new Error(`Adicione um ${validatorResult.type} válido.`);

        const organizationExists = await this.genericRepository.findOne({ 
            where: {
                identification: organization.identification,
                user_id: organization.user_id
            }
        });

        if (organizationExists)
            return organizationExists;

        const organizationCreated = this.genericRepository.create(organization);

        await this.genericRepository.save(organizationCreated);

        return organizationCreated;
    }

    async index(): Promise<IOrganization[]> {
        const organizations = await this.genericRepository.find();
        return organizations;
    }
}

export { OrganizationsService }