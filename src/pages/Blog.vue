<script setup>
import Header from '@/components/Header.vue';
import Timeline from '@/components/Timeline.vue';
import TimelinePost from '@/components/TimelinePost.vue';
import FullPageLayout from '@/layouts/FullPageLayout.vue';
import Links from '@/components/Links.vue';

import { Converter } from 'showdown';
import { ref, computed } from 'vue';

import { activeKeywords, allKeywords } from '@/keywords';
import Hashtags from '@/components/Hashtags.vue';

const items = ref([])
const promises = []
const filenames = import.meta.glob("@/posts/*.mdx")
const converter = new Converter({metadata: true})

for (const file in filenames) {
  promises.push(fetch(file))
}

Promise.all(promises)
  .then(responses => {
    responses.forEach(response => response.text()
      .then(text => {
        const splitted = text.split("//#")[0]
        const html = converter.makeHtml(splitted)
        const metadata = converter.getMetadata()
        const keywords = metadata.keywords.split(",")

        items.value.push( {
          content: html,
          date: metadata.date,
          keywords: keywords
        })
        
        keywords.forEach(keyword => {
          allKeywords[keyword] = false;
        })
      }))
    })

const filteredItems = computed(() => items.value.filter(item => {
  if (activeKeywords.length === 0)
  {
    return true;
  }
  return item.keywords.some(keyword => activeKeywords.includes(keyword))
}))

const sortedItems = computed(() => filteredItems.value.sort((a, b) => {
  const dateA = a.date.split(".")
  const dateB = b.date.split(".")
  const result = (new Date(dateB[2], dateB[1]-1, dateB[0]) - new Date(dateA[2], dateA[1]-1, dateA[0]))

  return result
}))

</script>

<template>
  <FullPageLayout>
    <Header headerText="bulshitting."/>
    <Hashtags/>
    <Timeline>
        <TimelinePost v-for="item in sortedItems"
          :date="item.date"
          :htmlcontent="item.content"
          :keywords="item.keywords"/>
    </Timeline>
  </FullPageLayout>
</template>