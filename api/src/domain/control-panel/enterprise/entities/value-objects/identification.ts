
interface IIdentification {
    isValid: boolean;
    type: string;
}
/**
 * a value object class to validate cnpj and cpf
 */
export class Identification {

    static cpfValidator (cpf: string): boolean {
        const cpfRegex = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/;
        return cpfRegex.test(cpf);
    }

    static cnpjValidator (cnpj: string): boolean {
        const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
        return cnpjRegex.test(cnpj);
    }

    static identificationNormalizer (identification: string): string {
        return identification
            .trim()
            .replace(/[^./-\w\s]/gi, '');
    }

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