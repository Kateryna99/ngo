<template>
<div class="banner section">
  <div class="banner__wrapper section__wrapper section__wrapper--top">
    <div class="banner__container">
      <div class="banner__content">
        <div class="banner__block">
          <div class="banner__item">
            <h1 class="banner__title">{{ $t('pages.home.titles.mainTitle') }}</h1>
          </div>
          <router-link to="/what-we-do" class="banner__item">
            <button class="button button--secondary">{{ $t('buttons.whatWeDo') }}</button>
          </router-link>
        </div>
        <div class="banner__block banner__block--row">
          <div class="banner__item">
            <p class="banner__text">{{ $t('pages.home.texts.childrenUnderCare') }}</p>
          </div>
          <div class="banner__line"></div>
          <div class="banner__item">
            <p class="banner__text">{{ $t('pages.home.texts.donationsCollected') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "HomeBanner"
}
</script>

<style lang="scss" scoped>
.banner {
  &__wrapper {

    min-height: 100vh;
    background-image: url("@/assets/img/home/home_banner.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

    position: relative;

    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;

      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.55);
    }
  }

  &__container {
  }

  &__content {
    display: flex;
    flex-direction: column;
  }

  &__block {
    display: flex;
    flex-direction: column;
    gap: 48px;
    &--row {
      position: absolute;
      left: 0;
      bottom: 30px;
      z-index: 2;

      max-width: 100%;
      width: 100%;

      padding: 0 20px;
      flex-direction: row;
      align-items: center;
      gap: 15px;
    }
  }

  &__item {
  }

  &__title {
    color: #FFFFFF;
    font-size: 64px;
    font-weight: 700;
    line-height: 1.2;

    max-width: 640px;
    width: 100%;

    position: relative;
    z-index: 2;

    @media (max-width: 991px) {
      font-size: 50px;
    }

    @media (max-width: 767px) {
      font-size: 40px;
    }
  }

  &__text {
    color: #FFFFFF;

    @media (max-width: 480px) {
      font-size: 14px;

    }
  }

  &__line {
    flex-grow: 1;
    height: 1px;
    background-color: rgb(229, 229, 229);
  }
}
</style>