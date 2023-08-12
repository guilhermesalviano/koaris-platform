import { RepositoryGeneric } from "../../../../core/repositories/repository.generic";
import { Contact } from "../../enterprise/entities/contact";

export class ContactsRespository extends RepositoryGeneric<Contact> {
    constructor() {
        super(Contact);
    }
}