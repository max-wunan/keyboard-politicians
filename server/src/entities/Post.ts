import { Field, ObjectType } from "type-graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@ObjectType()
@Entity()
export class Post {
    @Field()
    @PrimaryGeneratedColumn()
    postId!: number

    @Field()
    @Column()
    Creator!: User

    @Field()
    @Column("text")
    content!: string

    @Field()
    @Column("text")
    postDate!: Date
}