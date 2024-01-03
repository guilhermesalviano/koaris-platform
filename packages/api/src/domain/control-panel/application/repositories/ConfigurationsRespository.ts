import { RepositoryGeneric } from "../../../../core/repositories/repository.generic";
import { Configuration } from "../../enterprise/entities/configuration";

export class ConfigurationsRespository extends RepositoryGeneric<Configuration> {
    constructor() {
        super(Configuration);
    }
}