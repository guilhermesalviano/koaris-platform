
/**
 * a value object class to check if email is valid
 */
export class Email {

    /**
     * method to nomalizer cpf's and cnpj's keep just points, slash and hyphen
     * @param email string
     * @returns string
     */
    static emailNormalizer(email: string): string {
        return email
            .trim()
            .toLowerCase();
    }

    /**
     * check if email is valid
     * @param email
     * @returns true if email is valid
     */
    static emailValidator(email: string): boolean {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    }
}