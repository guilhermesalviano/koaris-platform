import { Entity, PrimaryColumn, Column, UpdateDateColumn, CreateDateColumn, JoinColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { Organization } from "./Organization";

@Entity("contacts")
class Contact {
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
    email: string;
    @Column()
    phone: string;
    @Column()
    source: string;
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