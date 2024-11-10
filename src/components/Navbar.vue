<script setup>
import FancyLink from './FancyLink.vue';
</script>

<template>
  <nav className="navbar">
    <button className="menuButton">
      <img src="./icons/menu.svg" className="linkIcon"/>
    </button>
    <div className="navbarContent">
      <FancyLink><router-link to="/"          >home</router-link></FancyLink>
      <FancyLink><router-link to="/mixes"     >mixes</router-link></FancyLink>
      <FancyLink><router-link to="/goodstuff" >good stuff</router-link></FancyLink>
      <FancyLink><router-link to="/blog"      >bulshitting</router-link></FancyLink>
    </div>
  </nav>
</template>

<style scoped>
.navbarContent {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--default-margin);
  
  background: white;

  font-family: var(--font-serif);
}

.menu-item {
  font-family: var(--font-serif);
}

.menuButton
{
  display: none;
}


@media only screen and (max-width: 600px) {
  .menuButton {
    display: inline-block;
    background: none;
    border: none;

    transition: transform 0.3s ease-in-out;
    -webkit-transition: transform 0.3s ease-in-out;
  }

  .menuButton:hover {
    transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg); 
  }

  .navbarContent {
    display: none;
    position: absolute;

    gap: 0.5rem;
    
    z-index: 100;
  
    font-family: var(--font-serif);
  
    height: auto;

    border: solid;
    border-color: lightgray;
    border-radius: 0.4rem;
    border-width: thin;

    align-items: start;
    justify-content: left;
    flex-direction: column;

    padding: 0.5em;

    transition: transform 0.3s ease-in-out;
    -webkit-transition: transform 0.3s ease-in-out;
  }

  .navbar:hover .navbarContent {
    display: flex;
    z-index: 100;
  }

  .navbar:hover .menuButton {
    transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
  }
}
</style>