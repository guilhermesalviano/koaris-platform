
/**
 * a value object class to check if password is allowed
 */
export class Password {

    /**
     * check if password is allowed
     * @param password string
     * @returns boolean
     */
    static checkPassword(password: string): boolean {
        if (!password) throw new Error("Senha inválida.");
        const passwordRegex = /^(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    }

}