import { Entity, PrimaryColumn, Column, UpdateDateColumn, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";

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
    @UpdateDateColumn({onUpdate: "now()"})
    updated_at: Date;
    @CreateDateColumn()
    created_at: Date;

    @JoinColumn({ name: "user_id" })
    @ManyToOne(() => User)
    user: User;
}

export { Organization }