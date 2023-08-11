import { EntityManager, Repository } from "typeorm";
import { User } from "../../enterprise/entities/user";

import datasource from "../../../../infra/database/datasource";

// export type UsersRepositoryType = Repository<User> & {
    // findByEmail(email: string): Promise<User | null>;
    // isEmailAlreadyInUser(email: string): Promise<boolean>;
// };

// A custom repository - with my functionalities
const UsersRepository: Repository<User> = datasource.getRepository(User).extend({

});

// Helper function, so clients are shielded of typeoRM access.
export function getUserRepository(manager: EntityManager): Repository<User> {
    return manager.withRepository(UsersRepository);
}