import { ContactsRespository } from "../repositories/ContactsRespository";
import { Contact } from "../../enterprise/entities/contact";
import { Email } from "../../enterprise/entities/value-objects/email";
import { ServiceGeneric } from "../../../../core/services/service.generic";

interface IContact {
    id?: string;
    name: string;
    email?: string;
    phone?: string;
    source?: string;
    organization_id: string;
}

class ContactsService extends ServiceGeneric<Contact> {
    constructor() {
        super(ContactsRespository)
    }
    
    public async checkIfEmailAlreadyExistsInDB({ email, organization_id }: IContact): Promise<IContact> {
        if (!Email.emailValidator(email))
            throw new Error('E-mail inválido.');

        email = Email.emailNormalizer(email);

        const contactExists = await this.genericRepository.findOne({ 
            where: {
                email,
                organization_id
            }
        });

        return contactExists;
    }

    public async checkIfConctactAlreadyExistsInDB({ id }: IContact): Promise<IContact> {
        if (!id)
            throw new Error('O campo Id é requerido.');

        const contactExists = await this.genericRepository.findOne({ 
            where: {
                id
            }
        });

        if (!contactExists)
            throw new Error('Contato não encontrado.');

        return contactExists;
    }

    async index(): Promise<IContact[]> {
        const services = await this.genericRepository.find();
        return services;
    }

    async create(contact: IContact): Promise<IContact> {
        if (!contact.organization_id || !contact.name)
            throw new Error(`Alguns campos faltando.`);

        contact.email = Email.emailNormalizer(contact.email);

        if (contact.email && await this.checkIfEmailAlreadyExistsInDB(contact))
            throw new Error("Email já cadastrado.");

        const contactCreated = this.genericRepository.create(contact);

        await this.genericRepository.save(contactCreated);

        return contactCreated;
    }

    async update(contact: IContact): Promise<IContact> {
        if (!contact.id || !contact.organization_id)
            throw new Error(`Alguns campos faltando.`);

        if (!await this.checkIfEmailAlreadyExistsInDB(contact))
            throw new Error("Contato não encontrado.");

        await this.genericRepository.update(contact.id, contact);

        return contact;
    }

    async delete(contact: IContact): Promise<Boolean> {
        if (!contact.id)
            throw new Error(`O campo Id está faltando.`);

        const result = await this.genericRepository.delete(contact.id);
        return (result.affected === 0)? false : true;
    }
}

export { ContactsService }