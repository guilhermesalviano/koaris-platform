import { EntityManager, Repository } from "typeorm";
import { Contact } from "../entities/Contact";

import datasource from "../database/datasource";

const ContactsRepository: Repository<Contact> = datasource.getRepository(Contact).extend({});

export function getContactRepository(manager: EntityManager): Repository<Contact> {
    return manager.withRepository(ContactsRepository);
}