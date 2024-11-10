<script setup>
import Keyword from './Keyword.vue';

const props = defineProps(['content', 'htmlcontent', 'date', 'keywords'])
</script>

<template>
  <div class="timelinePost">
    <slot></slot>
    <div class="post-date" v-if="props.date">{{ props.date }}</div>
    <div class="post-content" v-if="props.content">{{ props.content }}</div>
    <div class="post-html-content" v-if="props.htmlcontent" v-html="props.htmlcontent"></div>
    <div class="post-keywords" v-if="props.keywords" v-for="keyword in props.keywords">
      <Keyword :word="keyword"></Keyword>
    </div>
  </div>
</template>

<style scoped>
.timelinePost
{
  background: 	#FAF9F6;
  padding: var(--small-margin);
  margin-bottom: var(--default-margin);
  border-radius: 0.5rem;
}

.post-content > *
{
  font-family: var(--font-serif);
  font-size: var(--text-size);
  color: black;
}

.post-html-content > *
{
  font-family: var(--font-serif);
  font-size: var(--text-size);
  color: black;
}

.post-date {
  font-family: var(--font-sans-serif);
  color: darkgray;
  font-size: calc(0.75 * var(--text-size));
  text-align: left;
}

.post-keywords {
  display: flex;
  gap: var(--small-margin);
  justify-content: right;

  font-family: var(--font-sans-serif);
}
</style>