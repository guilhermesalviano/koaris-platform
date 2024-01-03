import { EntityManager, Repository } from "typeorm";
import datasource from "../../infra/database/datasource";

export class ServiceGeneric<T> {
    protected contactManager: EntityManager;
    protected genericRepository: Repository<T>;

    constructor(Repository) {
        this.contactManager = new EntityManager(datasource);
        this.genericRepository = new Repository().getRepository(this.contactManager);
    }
}