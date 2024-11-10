<script setup>
import { activeKeywords, allKeywords } from '@/keywords';

const props = defineProps(['word'])

const keywordClick = () => {
  const index = activeKeywords.indexOf(props.word)

  allKeywords[props.word] = !allKeywords[props.word];

  if (index > -1) {
    activeKeywords.splice(index, 1)
  }
  else {
    activeKeywords.push(props.word)
  }
}

</script>

<template>
  <div :class="allKeywords[props.word] ? 'activeKeyword' : 'inactiveKeyword'"
       @click="keywordClick">
      #{{props.word}}
  </div>
</template>

<style scoped>
.activeKeyword {
  padding: 0.2rem;
  border-radius: 0.2rem;
  cursor: pointer;

  border-style: solid;
  border-width: thin;

  font-size: calc(0.75 * var(--text-size));
  font-family: var(--font-sans-serif);

  color: white;
  background: darkgray;
}

.inactiveKeyword {
  padding: 0.2rem;
  border-radius: 0.2rem;
  cursor: pointer;

  border-style: solid;
  border-width: thin;

  font-size: calc(0.75 * var(--text-size));
  font-family: var(--font-sans-serif);

  color: white;
  background: lightgray;
}
</style>