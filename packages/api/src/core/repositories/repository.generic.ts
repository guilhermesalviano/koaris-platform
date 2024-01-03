import { EntityManager, EntityTarget, Repository } from "typeorm";
import datasource from "../../infra/database/datasource";

export class RepositoryGeneric<T> {
    private entity: EntityTarget<T>;

    constructor(entity: EntityTarget<T>) {
        this.entity = entity;
    }

    getRepository(manager: EntityManager): Repository<T> {
        const repository: Repository<T> = datasource.getRepository(this.entity);
        return manager.withRepository(repository);
    }
}