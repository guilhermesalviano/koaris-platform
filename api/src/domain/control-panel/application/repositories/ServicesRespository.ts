import { RepositoryGeneric } from "../../../../core/repositories/repository.generic";
import { Service } from "../../enterprise/entities/service";

export class ServicesRespository extends RepositoryGeneric<Service> {
    constructor() {
        super(Service);
    }
}