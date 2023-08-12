import { RepositoryGeneric } from "../../../../core/repositories/repository.generic";
import { User } from "../../enterprise/entities/user";

// export type UsersRepositoryType = Repository<User> & {
    // findByEmail(email: string): Promise<User | null>;
    // isEmailAlreadyInUser(email: string): Promise<boolean>;
// };
export class UsersRespository extends RepositoryGeneric<User> {
    constructor() {
        super(User);
    }
}