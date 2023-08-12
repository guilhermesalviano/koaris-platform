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
        if (email && organization_id) {
            if (!Email.emailValidator(email))
                throw new Error('E-mail inválido.');
    
            const contactExists = await this.genericRepository.findOne({ 
                where: {
                    email,
                    organization_id
                }
            });
    
            return contactExists;
        }
    }

    async create({ name, email, phone, source, organization_id }: IContact): Promise<IContact> {
        const contact = this.genericRepository.create({
            name,
            email,
            phone,
            source,
            organization_id
        });

        await this.genericRepository.save(contact);

        return contact;
    }

    async index(): Promise<IContact[]> {
        const services = await this.genericRepository.find();
        return services;
    }
}

export { ContactsService }