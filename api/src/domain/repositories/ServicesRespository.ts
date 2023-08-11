import { EntityManager, Repository } from "typeorm";
import { Service } from "../entities/Service";

import datasource from "../../infra/database/datasource";

const ServicesRepository: Repository<Service> = datasource.getRepository(Service).extend({});

export function getServiceRepository(manager: EntityManager): Repository<Service> {
    return manager.withRepository(ServicesRepository);
}