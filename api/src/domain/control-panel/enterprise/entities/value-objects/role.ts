
export class Role {

    static checkRole(role: string): string {
        const roleName = role.toLowerCase().trim();
        if ("administrator" === roleName || "operator" === roleName) {
            return roleName;
        } else {
            throw new Error("Invalid role");
        }
    }

}