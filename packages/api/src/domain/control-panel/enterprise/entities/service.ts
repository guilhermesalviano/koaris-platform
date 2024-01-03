import { Entity, PrimaryColumn, Column, UpdateDateColumn } from "typeorm";
import { EntityGeneric } from "../../../../core/entities/entity.generic";

@Entity("services")
class Service extends EntityGeneric {
    constructor() {
        super();
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
    price?: string;
    @UpdateDateColumn()
    updated_at: Date;
}

export { Service }