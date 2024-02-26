<template>
<div class="mission-and-vision section">
  <div class="section__wrapper section__wrapper--yellow">
    <div class="section__container">
      <div class="section__content">
        <div class="mission-and-vision__header">
          <img src="@/assets/img/aboutUs/banner.jpg" alt="" class="mission-and-vision__img">
        </div>
        <div class="mission-and-vision__main">
          <div class="mission-and-vision__block">
            <div class="mission-and-vision__item">
              <h5 class="section__subtitle">{{ $t('pages.aboutUs.subtitles.ourMission') }}</h5>
            </div>
            <div class="mission-and-vision__item">
              <h3 class="section__title section__title--small">{{ $t('pages.aboutUs.smallTitles.missionTitle') }}</h3>
            </div>
            <div class="mission-and-vision__item">
              <p class="section__text">{{ $t('texts.loremSecond') }}</p>
            </div>
          </div>
          <div class="mission-and-vision__block">
            <div class="mission-and-vision__item">
              <h5 class="section__subtitle">{{ $t('pages.aboutUs.subtitles.ourVision') }}</h5>
            </div>
            <div class="mission-and-vision__item">
              <h3 class="section__title section__title--small">{{ $t('pages.aboutUs.smallTitles.visionTitle') }}</h3>
            </div>
            <div class="mission-and-vision__item">
              <p class="section__text">{{ $t('texts.loremSecond') }}</p>
            </div>
          </div>
        </div>
        <div class="mission-and-vision__footer supporters">
          <div class="supporters__wrapper">
            <div class="supporters__block">
              <div class="supporters__item">
                <h5 class="section__subtitle">{{ $t('pages.home.subtitles.ourSupporters') }}</h5>
              </div>
            </div>
            <div class="supporters__block supporters__block--space">
              <div class="supporters__item">
                <img src="@/assets/img/home/supporter_1.svg" class="supporters__img">
              </div>
              <div class="supporters__item">
                <img src="@/assets/img/home/supporter_2.svg" class="supporters__img">
              </div>
              <div class="supporters__item">
                <img src="@/assets/img/home/supporter_3.svg" class="supporters__img">
              </div>
              <div class="supporters__item">
                <img src="@/assets/img/home/supporter_4.svg" class="supporters__img">
              </div>
              <div class="supporters__item">
                <img src="@/assets/img/home/supporter_5.svg" class="supporters__img">
              </div>
              <div class="supporters__item">
                <img src="@/assets/img/home/supporter_6.svg" class="supporters__img">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>
</template>

<script>
export default {
  name: "MissionAndVision"
}
</script>

<style lang="scss" scoped>
.mission-and-vision {
  &__header {
     border-radius: 20px;
    overflow: hidden;

    max-height: 50vh;
    height: 100%;

    position: relative;

    margin-top: -40vh;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;

      width: 100%;
      height: 100%;

      background-color: rgba(0, 0, 0, 0.55);
    }

    @media (max-width: 991px) {
      margin-top: -20vh;
    }
    @media (max-width: 480px) {
      min-height: 30vh;
    }
  }

  &__img {
    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: center;
  }

  &__main {
    display: flex;
    justify-content: space-between;
    gap: 90px;

    max-width: 1096px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 40px;
    }
  }

  &__block {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__item {
  }

  &__footer {
  }
}
</style>