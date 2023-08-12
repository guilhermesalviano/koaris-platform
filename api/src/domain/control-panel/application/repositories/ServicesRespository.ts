import { GenericRepository } from "../../../../core/repositories/generic-repository";
import { Service } from "../../enterprise/entities/service";

export class OrganizationsRespository extends GenericRepository<Service> {
    constructor() {
        super(Service);
    }
}