import { Database } from "@vuex-orm/core";
import AuthorModel from "../models/Author/author.model";
import CommentModel from "../models/Comment/comment.model";
import PostModel from "../models/Post/post.model";

// create new Vuex ORM database instance
const database = new Database();
// register Models with database instance
database.register(CommentModel);
database.register(PostModel);
database.register(AuthorModel);
export default database;
