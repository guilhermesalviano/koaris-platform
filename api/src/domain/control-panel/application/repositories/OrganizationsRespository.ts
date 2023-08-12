import { GenericRepository } from "../../../../core/repositories/generic-repository";
import { Organization } from "../../enterprise/entities/organization";

export class OrganizationsRespository extends GenericRepository<Organization> {
    constructor() {
        super(Organization);
    }
}