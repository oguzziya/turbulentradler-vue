<template>
  <div className="fullpage">
    <main>
      <slot/>
    </main>
  </div>
</template>

<style scoped>
.fullpage {
  max-width: 500px;
  margin: auto;
  background: white;
}

</style>