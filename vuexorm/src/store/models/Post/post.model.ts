import { Model } from "@vuex-orm/core";
import AuthorModel from "../Author/author.model";
import CommentModel from "../Comment/comment.model";

export default class PostModel extends Model {
    // Veux store module name
    static entity = "posts";
    // model schema
    static fields() {
        return {
            id: this.uid(),
            title: this.string("default title"),
            body: this.string("default body"),
            // 'this.hasMany' creates one-to-many relationship
            // first arg is related Model, second arg is foreign key of related model
            comments: this.hasMany(CommentModel, "post_id"),

            local_author_id: this.attr(1),
            author: this.hasOne(AuthorModel, "id", "local_author_id"),
        };
    }

    declare id: number;
    declare title: string;
    declare body: string;
    declare comments: CommentModel[];
    declare local_author_id: number;
    declare author: AuthorModel;
}
