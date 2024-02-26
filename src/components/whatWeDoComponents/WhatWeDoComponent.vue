<template>
<info-block class="section__wrapper--top">
   <template #main>
      <div class="section__block">
        <div class="section__item">
          <div class="section__header">
            <h5 class="section__subtitle">{{ $t('pages.home.subtitles.whatWeDo') }}</h5>
            <h2 class="section__title">{{ $t('pages.whatWeDo.titles.mainTitle') }}</h2>
          </div>
          <div class="section__main">
            <p class="section__text">{{ $t('texts.loremSecond') }}</p>
          </div>
        </div>
        <div class="section__img section__img--small">
          <img src="@/assets/img/home/banner.jpg">
        </div>
      </div>
   </template>
</info-block>
</template>

<script>
import InfoBlock from "@/components/generals/InfoBlock";
export default {
  name: "WhatWeDoComponent",
  components: {InfoBlock}
}
</script>

<style scoped>

</style>