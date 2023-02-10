<script lang="ts" setup>
import { computed } from "vue";
import CommentModel from "../store/models/Comment/comment.model";

const props = defineProps({
    initialComment: { type: CommentModel, default: {} },
});
const comment = computed(() =>
    CommentModel.query().with("author").find(props.initialComment.id)
);
</script>
<template>
    <li class="comment">
        <p>
            <strong>{{ comment?.author.name || "-" }}</strong>
        </p>
        <p>{{ comment?.body || "-" }}</p>
    </li>
</template>
<style scoped>
.comment {
    border-bottom: 1px solid white;
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin: 0.2rem 0;
}

.comment:last-child {
    border-bottom: 0px solid transparent;
}
</style>
