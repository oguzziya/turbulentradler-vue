<script setup>
</script>

<template>
    <div class="timeline">
      <slot></slot>
    </div>
</template>

<style scoped>
.timeline
{
  text-align: left;

  margin-left: var(--default-margin);
  margin-right: var(--default-margin);
}
</style>