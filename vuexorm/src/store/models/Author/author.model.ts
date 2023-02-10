import { Model } from "@vuex-orm/core";
import CommentModel from "../Comment/comment.model";

export default class AuthorModel extends Model {
    // Veux store module name
    static entity = "authors";
    // model schema
    static fields() {
        return {
            id: this.uid(),
            name: this.string("test"),
        };
    }

    declare name: string;
}
