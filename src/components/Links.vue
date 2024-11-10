<template>
  <div className="links">
    <a href="https://www.github.com/oguzziya" target="_blank" className="link">
      <img src="./icons/github-mark-black.png" className="linkIcon"/>
    </a>
    
    <a href="https://www.linkedin.com/in/oguzziya/" target="_blank" className="link">
      <img src="./icons/linkedin-mark-black.png" className="linkIcon"/>
    </a>
    
    <a href="https://www.instagram.com/turbulent.radler/" target="_blank" className="link">
      <img src="./icons/instagram-mark-black.png" className="linkIcon"/>
    </a>
    
    <a href="https://www.soundcloud.com/turbulentradler/" target="_blank" className="link">
      <img src="./icons/soundcloud-mark-black.png" className="linkIcon"/>
    </a>
  
  </div>
</template>

<style scoped>
.linkIcon
{
  width: 36px;
  height: auto;
}

.link
{
  margin: 10px;
}

.links
{
  text-align: center;
  margin-bottom: calc(var(--default-margin));
  margin-top: calc(3*var(--default-margin));
}

.links img{
  filter: saturate(500%) contrast(800%) brightness(500%) 
      invert(0%)
}
</style>