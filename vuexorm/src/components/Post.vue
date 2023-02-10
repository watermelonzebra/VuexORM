<script lang="ts" setup>
import { ref } from "vue";
import CommentModel from "../store/models/Comment/comment.model";
import PostModel from "../store/models/Post/post.model";
import Comment from "./Comment.vue";

const props = defineProps({
    post: { type: PostModel, default: {} },
});

const commentInput = ref<string>();
function addComment() {
    CommentModel.insert({
        data: {
            body: commentInput.value,
            post_id: props.post.$id || props.post.id,
        },
    });
    commentInput.value = undefined;
}
</script>
<template>
    <li class="post">
        <h1>{{ post.title }} - {{ post.author.name }}</h1>
        <p>{{ post.body }}</p>
        <h3>comments:</h3>
        <ul class="comments">
            <Comment
                v-for="comment in post.comments"
                :key="comment.$id || comment.id"
                :initial-comment="comment"
            ></Comment>
        </ul>
        <div class="comment-action-bar">
            <div class="input-field">
                <label for="comment">Comment toevoegen:</label>
                <input v-model="commentInput" type="text" placeholder="body" />
            </div>
            <button class="btn-submit" @click="addComment()">toevoegen</button>
        </div>
    </li>
</template>
<style>
.post {
    background-color: gray;
    padding: 1rem;
    border-radius: 1rem;
    margin-bottom: 1rem;
}

.comments {
    list-style-type: none;
}
</style>
