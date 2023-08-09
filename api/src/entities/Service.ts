import { Entity, PrimaryColumn, Column, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("services")
class Service {
    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
    @PrimaryColumn()
    id: string;
    @Column()
    name: string;
    @Column()
    description: string;
    @Column()
    logo: string;
    @Column()
    price: string;
    @UpdateDateColumn({onUpdate: "now()"})
    updated_at: Date;
}

export { Service }