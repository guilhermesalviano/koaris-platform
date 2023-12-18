import { Entity, PrimaryColumn, Column, UpdateDateColumn, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { EntityGeneric } from "../../../../core/entities/entity.generic";
import { User } from "./user";

@Entity("organizations")
class Organization extends EntityGeneric {
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
    logo?: string;
    @Column()
    identification: string;
    @Column()
    user_id: string;
    @UpdateDateColumn()
    updated_at: Date;
    @CreateDateColumn()
    created_at: Date;

    @JoinColumn({ name: "user_id" })
    @ManyToOne(() => User)
    user: User;
}

export { Organization }