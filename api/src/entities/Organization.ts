import { Entity, PrimaryColumn, Column, UpdateDateColumn, CreateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("organizations")
class Organization {
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
    identification: string;
    @Column()
    user_id: string;
    @UpdateDateColumn()
    updated_at: Date;
    @CreateDateColumn()
    created_at: Date;
}

export { Organization }