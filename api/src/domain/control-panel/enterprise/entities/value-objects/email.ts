
/**
 * a value object class to check if email is valid
 */
export class Email {

    /**
     * check if email is valid
     * @param email
     */
    static emailValidator(email: string): boolean {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    }
}