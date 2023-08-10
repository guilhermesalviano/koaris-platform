import { Entity, PrimaryColumn, Column, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("services")
class Service {
    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
    @PrimaryColumn("uuid")
    id: string;
    @Column("text")
    name: string;
    @Column("text")
    description: string;
    @Column("text")
    logo: string;
    @Column("text")
    price: string;
    @UpdateDateColumn({onUpdate: "now()"})
    updated_at: Date;
}

export { Service }