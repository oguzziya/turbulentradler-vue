<template>
  <div className="fancy-link">
    <slot></slot>
  </div>
</template>

<style scoped>
.fancy-link > *
{
  width: fit-content;
  text-decoration: none;

  --c: black; /* the color */
  
  color: #0000;
  background: 
    linear-gradient(90deg,black 50%,var(--c) 0) calc(100% - var(--_p,0%))/200%,
    linear-gradient(var(--c) 0 0) 0% 100%/var(--_p,0%) no-repeat,
    var(--_c,#0000);
  -webkit-background-clip: text,padding-box,padding-box;
          background-clip: text,padding-box,padding-box;
  transition: 0.5s;

  border-radius: 0.2rem;
  padding: 0.2rem;
}

.fancy-link:hover > *
{
  color: #fff;
  --_p: 100%;
}

</style>
