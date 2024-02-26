<template>
  <div class="event section">
    <div class="section__wrapper section__wrapper--top section__wrapper--yellow">
      <div class="section__container section__container--small">
        <div class="section__header">
          <h2 class="section__title">{{ event.mainTitle }}</h2>
        </div>
        <div class="section__main section__main--row">
          <p class="event__text event__text--location">{{ event.place }}</p>
          <p class="event__text event__text--data">{{ event.month }} {{ event.date }}, {{ event.time }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="event section">
    <div class="section__wrapper">
      <div class="section__container section__container--small">
        <div class="event__content">
          <div class="event__header">
            <h2 class="section__title">{{ $t('pages.event.aboutTitle') }}</h2>
          </div>
          <div class="event__main">
            <div class="event__block">
              <p v-for="(item,index) in event.mainText" :key="index" class="section__text">{{ $t(`texts.${item}`) }}</p>
            </div>
            <div class="event__img">
              <img :src="event.imgSrc" alt="">
            </div>
            <div class="event__block">
              <p v-for="(item,index) in event.subText" :key="index" class="section__text">{{ $t(`texts.${item}`) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventPage",
  props: {
    event: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.event {
  &__text {
    font-weight: 500;
    color: rgb(29, 33, 48);

    display: flex;
    align-items: center;
    gap: 8px;

    &:before {
      font-family: icomoon;
      font-size: 20px;
    }

    &--location {
      &:before {
        content: '\e91a';
      }
    }

    &--data {
      &:before {
        content: '\e91b';
      }
    }
    
    @media (max-width: 480px) {
      font-size: 14px;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  &__header {
  }

  &__main {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  &__block {
  }

  &__img {
    border-radius: 20px;
    overflow: hidden;

    height: 45vh;
    max-width: 100vw;
    width: 100%;

    img{
      width: 100%;
      height: 100%;

      object-fit: cover;
      object-position: center;
    }
  }
}

</style>