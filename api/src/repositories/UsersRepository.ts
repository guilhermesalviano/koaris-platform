import { EntityManager, Repository } from "typeorm";
import { User } from "../entities/User";

import datasource from "../database/datasource";

export type UsersRepositoryType = Repository<User> & {
    // findByEmail(email: string): Promise<User | null>;
    // isEmailAlreadyInUser(email: string): Promise<boolean>;
}

// Repository.extend function to create a custom repository
const UsersRepository: UsersRepositoryType  = datasource.getRepository(User).extend({

});

// Helper function, so clients are shielded of typeoRM access.
export function getUserRepository(manager: EntityManager): UsersRepositoryType {
    return manager.withRepository(UsersRepository);
}