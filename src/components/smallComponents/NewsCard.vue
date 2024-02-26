<template>
<div class="news-card section">
  <div class="news-card__wrapper">
    <div class="news-card__img">
      <img :src="news.imgUrl" alt="">
    </div>
    <div class="news-card__block">
      <div class="news-card__item">
        <p class="section__subtext">{{news.title}}</p>
      </div>
      <div class="news-card__item">
        <p class="section__text section__text--small">{{news.date}}</p>
      </div>
      <div class="news-card__item">
        <p class="section__text">{{news.text}}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "NewsCard",
  props: {
    news: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.news-card {
  &__wrapper {
    display: flex;
    align-items: center;
    gap: 24px;
    
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: start;
    }
    @media (max-width: 480px) {
      align-items: center;
      text-align: center;
    }
  }

  &__img {
    min-height: 25vh;
    min-width: 15vw;

    border-radius: 20px;
    overflow: hidden;

    img{
      width: 100%;
      height: 100%;

      object-fit: cover;
      object-position: center;
    }
  }

  &__block {
    display: flex;
    flex-direction: column;
    gap: 9px;
  }

  &__item {
  }
}
</style>