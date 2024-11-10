<script setup>
import Navbar from './Navbar.vue';

const props = defineProps(['headerText'])
</script>

<template>
  <div className="headerRegion">
    <Navbar />
    <div className="header">
      <h1>{{ props.headerText }}</h1>
    </div>
  </div>
</template>

<style scoped>
.headerRegion {
  display: grid;
  grid-template-rows: auto auto;

  position: sticky;
  top: 0;
  z-index: 100;
  background: white;
}

.header {
  height: auto;
  text-align: center;
}

.header h1 {
  font-size: calc(3 * var(--text-size));
  font-family: var(--font-serif);
  font-weight: normal;
}

@media only screen and (max-width: 600px) {
  
  .headerRegion {
    grid-template-rows: auto;
    grid-template-columns: min-content auto;
    align-items: center;

    margin-left: var(--default-margin);
    margin-right: var(--default-margin);

  }

  .header {
    text-align: right;
  }
}
</style>