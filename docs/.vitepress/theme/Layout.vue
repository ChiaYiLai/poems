<script setup lang="ts">
import { useData } from 'vitepress'

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData()

</script>

<template>
  <div class="home" v-if="frontmatter.home">
    <h1>{{ site.title }}</h1>
    <h2>{{ site.description }}</h2>
    <PostList />
  </div>
  <div class="single" v-else>
    <h1 class="title-post">{{ frontmatter.title }}</h1>
    <div class="content"><Content /></div>
    <a href="/poems" class="back">catalog</a>
  </div>
</template>
