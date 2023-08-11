import { EntityManager, Repository } from "typeorm";
import { getContactRepository } from "../repositories/ContactsRespository"
import datasource from "../../../../infra/database/datasource";
import { Contact } from "../../enterprise/entities/contact";

class ContactsService {
    private contactManager: EntityManager;
    private contactsRepository: Repository<Contact>;

    constructor() {
        this.contactManager = new EntityManager(datasource);
        this.contactsRepository = getContactRepository(this.contactManager);
    }
    
    async create({ name, email, phone, source, organization_id }) {
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
}

export { ContactsService }