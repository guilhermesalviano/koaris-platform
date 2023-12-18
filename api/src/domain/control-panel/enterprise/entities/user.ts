import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from "typeorm";
import { EntityGeneric } from "../../../../core/entities/entity.generic";

@Entity("users")
class User extends EntityGeneric {
    constructor() {
        super();
    }
    @PrimaryColumn()
    id: string;
    @Column()
    name: string;
    @Column()
    role: string;
    @Column()
    email: string;
    @Column()
    password: string;
    @UpdateDateColumn()
    updated_at: Date;
    @CreateDateColumn()
    created_at: Date;
}

export { User }