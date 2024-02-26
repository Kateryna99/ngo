<template>
<div class="about-us-banner section">
  <div class="about-us-banner__wrapper section__wrapper section__wrapper--top">
    <div class="section__container">
      <div class="section__content">
        <div class="section__block section__block--gap">
          <div class="section__item">
            <h5 class="section__subtitle">{{ $t('pages.aboutUs.subtitles.knowAboutUs') }}</h5>
            <h2 class="section__title">{{ $t('pages.aboutUs.titles.mainTitle') }}</h2>
          </div>
          <div class="section__item">
            <p class="section__subtext">{{ $t('texts.loremFirst') }}</p>
            <p class="section__text section__text--width">{{ $t('texts.loremSecond') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "AboutBanner",
  components: {}
}
</script>

<style lang="scss" scoped>
.about-us-banner {
  &__wrapper {
    min-height: 87vh;
  }
}
</style>