import { Column, Entity } from "typeorm";

@Entity()
export class Points {

    @Column()
    id: number;

    @Column()
    points: number;
}