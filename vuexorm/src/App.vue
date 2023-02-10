<script setup lang="ts">
import { computed, ref } from "vue";
import Post from "./components/post.vue";
import AuthorModel from "./store/models/Author/author.model";
import CommentModel from "./store/models/Comment/comment.model";
import PostModel from "./store/models/Post/post.model";

AuthorModel.create({
    data: [
        {
            id: 1,
            name: "Author 1",
        },
        {
            id: 2,
            name: "Author 2",
        },
        {
            id: 3,
            name: "Author 3",
        },
    ],
});

PostModel.create({
    data: [
        {
            id: 1,
            title: "Mijn eerste post",
            body: "Dit is mijn aller eerste post met vuex ORM",
            local_author_id: 1,
        },
    ],
});

CommentModel.create({
    data: [
        { id: 1, post_id: 1, local_author_id: 1, body: "comment 1" },
        { id: 2, post_id: 1, local_author_id: 2, body: "comment 2" },
        { id: 3, post_id: 1, local_author_id: 1, body: "comment 3" },
    ],
});

const posts = computed(() =>
    PostModel.query().with(["author", "comments"]).get()
);

const postTitleInput = ref<string>();
const postBodyInput = ref<string>();
function addPost() {
    PostModel.insert({
        data: {
            title: postTitleInput.value,
            body: postBodyInput.value,
            local_author_id: 3,
        },
    });
    postTitleInput.value = undefined;
    postBodyInput.value = undefined;
}
</script>

<template>
    <h1>posts:</h1>
    <ul class="posts">
        <Post
            v-for="post in posts"
            :key="post.$id || post.id"
            :post="post"
        ></Post>
    </ul>
    <div class="comment-action-bar">
        <div class="input-field">
            <label for="comment">post toevoegen:</label>
            <input v-model="postTitleInput" type="text" placeholder="title" />
            <input v-model="postBodyInput" type="text" placeholder="body" />
        </div>
        <button class="btn-submit" @click="addPost()">toevoegen</button>
    </div>
</template>

<style scoped>
.posts {
    list-style-type: none;
}

.comment-action-bar {
    display: flex;
    margin-top: 1rem;
}

.input-field {
    display: flex;
    flex-flow: column;
    max-width: 300px;
}
</style>
