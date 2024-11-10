<script setup>
import { allKeywords } from '@/keywords';
import Keyword from './Keyword.vue';

import { reactive } from 'vue';

</script>

<template>
  <div class="hashtags">
    <Keyword v-for="keyword in Object.keys(allKeywords).sort()"
             :word="keyword"/>
  </div>
</template>

<style scoped>
.hashtags {
  height: auto;
  background: white;

  display: flex;
  gap: var(--small-margin);
  justify-content: center;
  align-items: center;
  
  margin-bottom: var(--default-margin);
  margin-left: var(--default-margin);
  margin-right: var(--default-margin);

  flex-wrap: wrap;
  flex-direction: row;
}

@media only screen and (max-width: 600px) {
.hashtags {
  justify-content: left;
}
}
</style>