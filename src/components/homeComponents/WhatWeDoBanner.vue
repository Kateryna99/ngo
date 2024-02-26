<template>
<info-block class="section__wrapper--yellow">
  <template #main>
    <div class="section__block">
      <div class="section__item">
        <div class="section__header">
          <h5 class="section__subtitle">{{ $t('pages.home.subtitles.whatWeDo') }}</h5>
          <h2 class="section__title">{{ $t('pages.home.titles.servicesTitle') }}</h2>
        </div>
        <div class="section__main">
          <p class="section__text">{{ $t('texts.loremFirst') }}</p>
        </div>
        <div class="section__footer features">
          <div class="features__wrapper">
             <div class="features__block">
               <div class="features__icon">
                 <span class="icon icon-compass"></span>
               </div>
               <div class="features__item">
                 <h3 class="features__title">{{ $t('pages.home.titles.familySupport') }}</h3>
                 <p class="features__text">{{ $t('texts.loremFirst') }}</p>
               </div>
             </div>
            <div class="features__block">
              <div class="features__icon">
                <span class="icon icon-location"></span>
              </div>
              <div class="features__item">
                <h3 class="features__title">{{ $t('pages.home.titles.healthBenefits') }}</h3>
                <p class="features__text">{{ $t('texts.loremFirst') }}</p>
              </div>
            </div>
            <div class="features__block">
              <div class="features__icon">
                <span class="icon icon-calendar"></span>
              </div>
              <div class="features__item">
                <h3 class="features__title">{{ $t('pages.home.titles.scholarship') }}</h3>
                <p class="features__text">{{ $t('texts.loremFirst') }}</p>
              </div>
            </div>
            <div class="features__block">
              <div class="features__icon">
                <span class="icon icon-medal"></span>
              </div>
              <div class="features__item">
                <h3 class="features__title">{{ $t('pages.home.titles.therapy') }}</h3>
                <p class="features__text">{{ $t('texts.loremFirst') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section__img">
        <img src="@/assets/img/home/child.jpg">
      </div>
    </div>
  </template>
</info-block>
</template>

<script>
import InfoBlock from "@/components/generals/InfoBlock";
export default {
  name: "WhatWeDoBanner",
  components: {InfoBlock}
}
</script>

<style lang="scss" scoped>
.features {
  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  &__block {
    display: flex;
    align-items: start;
    gap: 24px;
  }

  &__icon {
  }

  &__item {
  }

  &__title {
    color: rgb(29, 33, 48);
    font-weight: 700;
    font-size: 24px;
    line-height: 1.2;

    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }

  &__text {
  }
}
.icon{
  font-size: 25px;
  color: rgb(29, 33, 48);
}
</style>