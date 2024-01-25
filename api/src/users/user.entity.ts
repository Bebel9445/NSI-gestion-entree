import { Column, Entity, Index, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Points } from "./points/points.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Index()
    @Column()
    lastName: string;

    @Index()
    @Column()
    firstName: string;

    @Column({type: "tinyint"})
    age: number;

    @Column()
    gender: string;

    @Index()
    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @Index()
    @Column({unique: true})
    cardId: number;

    @OneToOne(() => Points)
    @JoinColumn()
    points: number;
}