<script setup lang="ts">
import { data as posts } from '../../posts.data'
</script>

<template>
    <ul class="list-posts">
        <li v-for="post in posts" :key="post.filename">
            <h3>
                <a :href="`/poems/posts/${post.fileName}`">{{ post.title }}</a>
            </h3>
        </li>
    </ul>
</template>