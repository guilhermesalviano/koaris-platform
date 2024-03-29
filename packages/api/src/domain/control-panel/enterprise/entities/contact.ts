import { Entity, PrimaryColumn, Column, UpdateDateColumn, CreateDateColumn, JoinColumn, ManyToOne } from "typeorm";
import { EntityGeneric } from "../../../../core/entities/entity.generic";
import { Organization } from "./organization";

@Entity("contacts")
class Contact extends EntityGeneric {
    constructor() {
        super();
    }
    @PrimaryColumn()
    id: string;
    @Column()
    name: string;
    @Column()
    email?: string;
    @Column()
    phone?: string;
    @Column()
    source?: string;
    @Column()
    organization_id: string;
    @UpdateDateColumn()
    updated_at: Date;
    @CreateDateColumn()
    created_at: Date;

    @JoinColumn({ name: "organization_id" })
    @ManyToOne(() => Organization)
    organization: Organization;
}

export { Contact }