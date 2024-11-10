<script setup>
import Header from '@/components/Header.vue';
import PersonalDetail from '@/components/PersonalDetail.vue';
import FullPageLayout from '@/layouts/FullPageLayout.vue';
import Links from '@/components/Links.vue';
</script>

<template>
  <FullPageLayout>
    <Header headerText="servus" />
    <PersonalDetail
      prefix="full time"
      header="c++ software engineer"  
      information="working on scientific computing, finite element analysis, and fluid-structure interaction"
    />
    <PersonalDetail
      prefix="part time"
      header="lifter"  
      information="with not so impressive numbers"
    />
    <PersonalDetail
      prefix="below average"
      header="cyclist"  
      information="on road and gravel"
    />
    <PersonalDetail
      prefix="occasional"
      header="dj"  
      information="vibing with techno, minimal tecno, house, and tech house"
    />
    <PersonalDetail
      prefix="ex-"
      header="basketball player"  
      information="with an ACL blessed knee"
    />
    <Links />
  </FullPageLayout>
</template>