import { v4 as uuid } from "uuid";

export class EntityGeneric {
    protected id: string;
    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}