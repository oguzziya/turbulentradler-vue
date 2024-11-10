<script setup>
const props = defineProps(["prefix", "header", "information"])
</script>

<template>
  <div className="detail">
    <p className="detail-header">{{ props.prefix }}&ensp;<strong>{{ props.header }}</strong></p>
    <p className="detail-info">&emsp;{{ props.information }}</p>
  </div>
</template>

<style scoped>
.detail {
  text-align: left;
  margin-left: var(--default-margin);
  margin-right: var(--default-margin);
  font-size: var(--text-size);
}

.detail-header {
  font-family: var(--font-sans-serif);
}

.detail-info {
  color: darkgray;
  font-size: var(--text-size-small);
  font-family: var(--font-serif);
}

</style>