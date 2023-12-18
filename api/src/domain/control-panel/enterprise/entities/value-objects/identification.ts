interface IIdentification {
    isValid: boolean;
    type: string;
}

/**
 * a value object class to validate cnpj and cpf
 */
export class Identification {

    /**
     * method to validate cpf's
     * @param cpf string
     * @returns boolean
     */
    static cpfValidator (cpf: string): boolean {
        const cpfRegex = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/;
        return cpfRegex.test(cpf);
    }

    /**
     * method to validate cnpj's
     * @param cnpj string
     * @returns boolean
     */
    static cnpjValidator (cnpj: string): boolean {
        const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
        return cnpjRegex.test(cnpj);
    }

    /**
     * method to nomalizer cpf's and cnpj's keep just points, slash and hyphen
     * @param identification string
     * @returns string
     */
    static identificationNormalizer (identification: string): string {
        return identification
            .trim()
            .replace(/[^./-\w\s]/gi, '');
    }

    /**
     * recieve cpf or cnpj and apply the respective regex
     * @param identification string
     * @returns Idenfication object
     */
    static identificationValidator (identification: string): IIdentification {
        if (identification.length === 18) {
            const isValid = this.cnpjValidator(identification);
            return { isValid, type:"cnpj" };
        } else if (identification.length === 14) {
            const isValid = this.cpfValidator(identification);
            return { isValid, type:"cpf" };
        }
        return { isValid: false, type: "identificador" };
    }
}