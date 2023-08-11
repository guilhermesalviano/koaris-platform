import { EntityManager, Repository } from "typeorm";
import { Organization } from "../entities/Organization";

import datasource from "../../infra/database/datasource";

const OrganizationsRepository: Repository<Organization> = datasource.getRepository(Organization).extend({});

export function getOrganizationRepository(manager: EntityManager): Repository<Organization> {
    return manager.withRepository(OrganizationsRepository);
}