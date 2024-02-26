<template>
<div class="our-journey section">
  <div class="section__wrapper">
    <div class="section__container">
      <div class="section__content">
        <div class="awards-and-recognitions">
          <div class="awards-and-recognitions__wrapper">
            <div class="awards-and-recognitions__container">
              <div class="awards-and-recognitions__content">
                <div class="awards-and-recognitions__header">
                  <h2 class="section__title section__title--center">{{ $t('pages.aboutUs.titles.awardsRecognition') }}</h2>
                </div>
                <div class="awards-and-recognitions__main">
                  <award-card v-for="item in getAwardsList" :key="item.id" :award="{
                    mainAward: item.iconTitle,
                    date: item.date,
                    title: $t(`pages.aboutUs.awards.${item.title}`),
                    city: $t(`pages.aboutUs.awards.${item.city}`)
                  }"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="our-journey__wrapper">
          <div class="our-journey__block">
            <div class="section__header">
              <h5 class="section__subtitle">{{ $t('pages.aboutUs.subtitles.ourJourney') }}</h5>
              <h2 class="section__title">{{ $t('pages.aboutUs.titles.weRaised') }}</h2>
            </div>
            <div class="section__main">
              <p class="section__text">{{ $t('texts.loremSecond') }}</p>
            </div>
            <div class="section__footer section__footer--row">
              <div class="our-journey__block">
                <div class="our-journey__item">
                  <p class="our-journey__number">34M+</p>
                </div>
                <div class="our-journey__item">
                  <div class="our-journey__text">{{ $t('pages.aboutUs.journey.firstStep') }}</div>
                </div>
              </div>
              <div class="our-journey__block">
                <div class="our-journey__item">
                  <p class="our-journey__number">400+</p>
                </div>
                <div class="our-journey__item">
                  <div class="our-journey__text">{{ $t('pages.aboutUs.journey.secondStep') }}</div>
                </div>
              </div>
              <div class="our-journey__block">
                <div class="our-journey__item">
                  <p class="our-journey__number">20+</p>
                </div>
                <div class="our-journey__item">
                  <div class="our-journey__text">{{ $t('pages.aboutUs.journey.thirdStep') }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="our-journey__block">
             <div class="our-journey__img">
               <img src="@/assets/img/aboutUs/our_team.jpg" alt="">
             </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {mapState} from "pinia";
import {useGeneralStore} from "@/store";
import AwardCard from "@/components/smallComponents/AwardCard";
export default {
  name: "JourneyComponent",
  components: {AwardCard},
  computed: {
    ...mapState(useGeneralStore, ['getAwardsList'])
  }
}
</script>

<style lang="scss" scoped>
.our-journey {
  &__wrapper {
    border-radius: 20px;
    overflow: hidden;

    background-color: rgb(242, 201, 76);
    padding: 64px 36px 64px 96px;

    display: flex;
    align-items: center;
    gap: 47px;

    @media (max-width: 991px) {
      padding: 34px 20px 34px 60px;
    }
    @media (max-width: 768px) {
      padding: 24px 10px 24px 30px;

      flex-direction: column;
      align-items: start;
    }
  }

  &__block {
  }

  &__main {
  }

  &__item {
  }

  &__number {
    font-size: 24px;
    font-weight: 500;
    color: rgb(0, 0, 0);
  }

  &__text {
    font-weight: 500;
    font-size: 12px;
  }

  &__img {
    border-radius: 25px;
    overflow: hidden;

    min-height: 60vh;
    min-width: 35vw;
    width: 100%;

    img{
      width: 100%;
      height: 100%;

      object-fit: cover;
      object-position: center;
    }

    @media (max-width: 768px) {
      min-height: 30vh;
    }
  }
}




</style>