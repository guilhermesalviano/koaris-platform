import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from "typeorm";
import { EntityGeneric } from "../../../../core/entities/entity.generic";

@Entity("logins")
class Login extends EntityGeneric {
    constructor() {
        super();
    }
    @PrimaryColumn()
    id: string;
    @Column()
    user_id: string;
    @Column()
    email: string;
    @Column()
    password: string;
    @Column()
    ip_address: string;
    @UpdateDateColumn()
    updated_at: Date;
    @CreateDateColumn()
    created_at: Date;
}

export { Login }