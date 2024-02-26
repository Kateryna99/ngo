<template>
<div class="our-work section">
  <div class="section__wrapper section__wrapper--yellow">
    <div class="section__container">
      <div class="section__content">
        <div class="our-work__header">
          <h2 class="section__title">{{ $t('pages.whatWeDo.titles.whatWeDoSpecialNeeds') }}</h2>
        </div>
        <div class="our-work__main">
          <feature-card v-for="item in getFeaturesList" :key="item.id" :feature="{
            iconTitle: item.iconTitle,
            title: $t(`pages.whatWeDo.smallTitles.${item.title}`),
            text: $t(`texts.${item.text}`)
          }"/>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {mapState} from "pinia";
import {useGeneralStore} from "@/store";
import FeatureCard from "@/components/smallComponents/FeatureCard";
export default {
  name: "WhatWeDoSpecialNeeds",
  components: {FeatureCard},
  computed:{
    ...mapState(useGeneralStore,['getFeaturesList'])
  }
}
</script>

<style lang="scss" scoped>
.our-work {
  &__header {
  }

  &__main {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(270px, 360px));
    column-gap: 55px;
    row-gap: 48px;
  }
}

</style>