<script setup>
import FancyLink from './FancyLink.vue';

const props = defineProps(['link', 'linkText', 'description'])
</script>

<template>
  <div className="suggestion">
    <FancyLink>
      <a v-bind:href="link">{{linkText}}</a>
    </FancyLink>
    <p>&emsp;{{description}}</p>
  </div>
</template>

<style scoped>
p
{
  font-family: var(--font-serif);
  font-size: var(--text-size)
}

a {
  font-family: var(--font-sans-serif);
  font-size: var(--text-size);
  font-weight: bold;
}
</style>