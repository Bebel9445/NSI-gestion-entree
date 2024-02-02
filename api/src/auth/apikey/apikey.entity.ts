import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Apikey {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    value: string

}