import { EntityManager } from "typeorm";
import { getContactRepository } from "../repositories/ContactsRespository"
import datasource from "../database/datasource";

class ContactsService {
    async create({ name, email, phone, source, organization_id }) {

        const contactManager = new EntityManager(datasource);

        const contactsRepository = getContactRepository(contactManager);

        const contactExists = await contactsRepository.findOne({ 
            where: {
                email,
                organization_id
            }
        });

        if (contactExists) {
            return contactExists;
        }

        const contact = contactsRepository.create({
            name,
            email,
            phone,
            source,
            organization_id
        });

        await contactsRepository.save(contact);

        return contact;
    }
}

export { ContactsService }