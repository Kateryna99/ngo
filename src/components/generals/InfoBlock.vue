<template>
  <div class="section section__wrapper">
    <div class="section__container">
      <div class="section__content">
        <slot name="main">
          <div class="section__block">
            <div class="section__item">
              <div class="section__header">
                <h5 class="section__subtitle">{{ $t('pages.home.subtitles.knowAboutUs') }}</h5>
                <h2 class="section__title">{{ $t('pages.home.titles.specialNeedsTitle') }}</h2>
              </div>
              <div class="section__main">
                <p class="section__text">{{ $t('texts.loremFirst') }}</p>
                <p class="section__text">{{ $t('texts.loremSecond') }}</p>
              </div>
              <div class="section__footer">
                <router-link to="/about">
                  <button class="button">{{ $t('buttons.learnMore') }}</button>
                </router-link>
              </div>
            </div>
            <div class="section__img">
              <img src="@/assets/img/home/children_together.jpg">
            </div>
          </div>
        </slot>
        <slot name="footer"></slot>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "InfoBlock"
}
</script>

<style scoped>

</style>