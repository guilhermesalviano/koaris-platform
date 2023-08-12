
/**
 * a value object class to check if role is allowed
 */
export class Role {

    /**
     * check if role is allowed
     * @param role string
     * @returns role (if is allowed) - string
     */
    static checkRole(role: string): string {
        const roleName = role.toLowerCase().trim();
        if ("administrator" === roleName || "operator" === roleName) {
            return roleName;
        } else {
            throw new Error("Invalid role");
        }
    }

}