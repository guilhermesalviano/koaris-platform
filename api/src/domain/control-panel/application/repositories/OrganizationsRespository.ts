import { RepositoryGeneric } from "../../../../core/repositories/repository.generic";
import { Organization } from "../../enterprise/entities/organization";

export class OrganizationsRespository extends RepositoryGeneric<Organization> {
    constructor() {
        super(Organization);
    }
}