import { GenericRepository } from "../../../../core/repositories/generic-repository";
import { Contact } from "../../enterprise/entities/contact";

export class ContactsRespository extends GenericRepository<Contact> {
    constructor() {
        super(Contact);
    }
}