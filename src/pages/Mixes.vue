<script setup>
import Header from '@/components/Header.vue';
import FullPageLayout from '@/layouts/FullPageLayout.vue';
</script>

<template>
  <FullPageLayout>
    <Header headerText="mixes."/>
    <div className='mixes'>
      <iframe width="100%" height="166" src="https://www.youtube.com/embed/gh9t3mADxHw?si=du45EC2YFEiskRbN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1665019278&color=%23180406&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>

      <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1632465012&color=%23180406&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>

      <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1630048041&color=%23350505&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>

      <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1603853736&color=%23350505&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
      </div>
  </FullPageLayout>
</template>

<style scoped>
.mixes {
  text-align: center;

  margin-left: var(--default-margin);
  margin-right: var(--default-margin);
} 
</style>