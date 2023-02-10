import { Model } from "@vuex-orm/core";
import AuthorModel from "../Author/author.model";

export default class CommentModel extends Model {
    // Veux store module name
    static entity = "comments";

    // model schema
    static fields() {
        return {
            id: this.uid(),
            post_id: this.number(0),
            body: this.string("default comment"),
            local_author_id: this.attr(1),
            author: this.hasOne(AuthorModel, "id", "local_author_id"),
        };
    }

    //field values
    declare id: number;
    declare body: string;
    declare post_id: number;
    declare local_author_id: number;
    declare author: AuthorModel;
}
