<script setup lang="ts">
import FullPageLayout from '@/layouts/FullPageLayout.vue';
import Header from '@/components/Header.vue';
import Suggestion from '@/components/Suggestion.vue';
import TimelinePost from '@/components/TimelinePost.vue';
import Timeline from "@/components/Timeline.vue"
</script>

<template>
  <FullPageLayout>
    <Header 
      header-text="good stuff."
    />
    <Timeline>
      <TimelinePost>
        <Suggestion class="item"
          description="Some sane information about inusilin and why you should not be scared of it."
          link="http://weightology.net/insulin-an-undeserved-bad-reputation/"
          linkText="Insulin… an Undeserved Bad Reputation"
        />
      </TimelinePost>

      <TimelinePost>
        <Suggestion class="item"
          description="I don't follow many bloggers. However, I really like the style of Lyle, which is quite a journey everytime, even for deep, personal stuff. This one is on my bookmarks for a while."
          link="https://www.lyle.blog/p/how-do-i-define-success"
          linkText="How Do I Define Success?"
        />
      </TimelinePost>

      <TimelinePost>
        <Suggestion class="item"
          description="I generally find myself on the more skeptical part of the AI related conversations, especially with the recent hypes. Not that I am scared of it, but rather I still see it as a parrot which is extremely capable at certain things. I find phrases like -PhD level intelligence- quite funny.
          
          I like this paper because it forces this parrot to do things he is not capable of."
          link="https://arxiv.org/pdf/2406.02061"
          linkText="AI Resoning"
        />
      </TimelinePost>
    </Timeline>
  </FullPageLayout>
</template>
