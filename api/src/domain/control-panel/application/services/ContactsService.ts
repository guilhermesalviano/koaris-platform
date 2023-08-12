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

    async create({ name, email, phone, source, organization_id }: IContact): Promise<IContact> {
        if (!organization_id || !name)
            throw new Error(`Alguns campos faltando.`);

        if (email)
            email = Email.emailNormalizer(email);

        const newContact = {
            name,
            email,
            phone,
            source,
            organization_id
        }

        if (email && await this.checkIfEmailAlreadyExistsInDB(newContact))
            throw new Error("Email já cadastrado.");

        const contact = this.genericRepository.create(newContact);

        await this.genericRepository.save(contact);

        return contact;
    }

    async update({ id, name, email, phone, source, organization_id }: IContact): Promise<IContact> {
        if (!id || !organization_id)
            throw new Error(`Alguns campos faltando.`);

        const contact = {
            id,
            name,
            email,
            phone,
            source,
            organization_id
        }

        if (!await this.checkIfEmailAlreadyExistsInDB(contact))
            throw new Error("Contato não encontrado.");

        await this.genericRepository.update(id, contact);

        return contact;
    }
}

export { ContactsService }