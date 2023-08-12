import { GenericRepository } from "../../../../core/repositories/generic-repository";
import { User } from "../../enterprise/entities/user";

// export type UsersRepositoryType = Repository<User> & {
    // findByEmail(email: string): Promise<User | null>;
    // isEmailAlreadyInUser(email: string): Promise<boolean>;
// };
export class OrganizationsRespository extends GenericRepository<User> {
    constructor() {
        super(User);
    }
}