import {Column, Entity, Index, PrimaryGeneratedColumn} from "typeorm";

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

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @Column({unique: true, default: null})
    cardId: string;

    @Column({default: 0})
    points: number;

    @Column({default: null})
    refreshToken: string
}