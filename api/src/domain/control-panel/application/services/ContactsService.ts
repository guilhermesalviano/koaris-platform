import { EntityManager, Repository } from "typeorm";
import { ContactsRespository } from "../repositories/ContactsRespository";
import datasource from "../../../../infra/database/datasource";
import { Contact } from "../../enterprise/entities/contact";
import { Email } from "../../enterprise/entities/value-objects/email";

interface IContact {
    id?: string;
    name: string;
    email?: string;
    phone?: string;
    source?: string;
    organization_id: string;
}

class ContactsService {
    private contactManager: EntityManager;
    private contactsRepository: Repository<Contact>;

    constructor() {
        this.contactManager = new EntityManager(datasource);
        this.contactsRepository = new ContactsRespository().getRepository(this.contactManager);
    }
    
    async create({ name, email, phone, source, organization_id }: IContact): Promise<IContact> {
        if (email && !Email.emailValidator(email)) {
            throw new Error('E-mail inválido.');
        }

        const contactExists = await this.contactsRepository.findOne({ 
            where: {
                email,
                organization_id
            }
        });

        if (contactExists) {
            return contactExists;
        }

        const contact = this.contactsRepository.create({
            name,
            email,
            phone,
            source,
            organization_id
        });

        await this.contactsRepository.save(contact);

        return contact;
    }

    async index(): Promise<IContact[]> {
        const services = await this.contactsRepository.find();
        return services;
    }
}

export { ContactsService }