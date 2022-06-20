import { Field, ObjectType } from "type-graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class User {
    @Field()
    @PrimaryGeneratedColumn()
    id!: number

    @Field()
    @Column({
        length: 100
    })
    userName!: string

    @Field()
    @Column()
    password!: string

    @Field()
    @Column()
    introduction: string

    @Field()
    @Column()
    email: string
}