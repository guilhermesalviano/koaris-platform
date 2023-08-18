import { Entity, PrimaryColumn, Column, UpdateDateColumn, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { EntityGeneric } from "../../../../core/entities/entity.generic";
import { Service } from "./service";
import { Organization } from "./organization";

@Entity("configurations")
class Configuration extends EntityGeneric {
    constructor() {
        super();
    }
    @PrimaryColumn()
    id: string;
    @Column()
    organization_id: string;
    @Column()
    service_id: string;
    @Column()
    logoCustom?: string;
    @Column()
    phone: string;
    @Column()
    socialLinks?: string;
    @UpdateDateColumn()
    updated_at: Date;
    @CreateDateColumn()
    created_at: Date;

    @JoinColumn({ name: "organization_id" })
    @ManyToOne(() => Organization)
    organization: Organization;

    @JoinColumn({ name: "service_id" })
    @ManyToOne(() => Service)
    service: Service;
}

export { Configuration }