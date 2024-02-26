<template>
<info-block class="section__wrapper--top section__wrapper--yellow media">
  <template #main>
    <div class="section__block">
      <div class="section__item">
        <div class="section__header">
          <h5 class="section__subtitle">{{ $t('pages.media.subtitle') }}</h5>
          <h2 class="media__title section__title">{{ $t('pages.media.mainTitle') }}</h2>
        </div>
        <div class="section__main">
          <p class="section__text">{{ $t('texts.loremFirst') }}</p>
        </div>
        <div class="section__footer">
          <router-link to="/about">
            <button class="button">{{ $t('buttons.learnMore') }}</button>
          </router-link>
        </div>
      </div>
      <div class="media__block">
        <news-card v-for="item in getMediaNewsList" :key="item.id" :news="{
          imgUrl: item.imgUrl,
          title: $t(`pages.media.topics.${item.title}`),
          date: $t(`pages.media.topics.${item.date}`),
          text: $t(`texts.${item.text}`)
        }" />
      </div>
    </div>
  </template>
</info-block>
</template>

<script>
import {mapState} from "pinia";
import {useGeneralStore} from "@/store";
import InfoBlock from "@/components/generals/InfoBlock";
import NewsCard from "@/components/smallComponents/NewsCard";
export default {
  name: "MediaBanner",
  components: {NewsCard, InfoBlock},
  computed: {
    ...mapState(useGeneralStore,['getMediaNewsList'])
  }
}
</script>

<style lang="scss" scoped>

.media {
  &__title {
    max-width: 500px;
    width: 100%;

    @media (max-width: 991px) {
      max-width: 100%;
    }
  }

  &__block {
    border-radius: 20px;
    overflow: hidden;

    background-color: #FFFFFF;

    padding: 24px 56px 24px 24px;

    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (max-width: 768px) {
      padding: 24px;
    }
  }
}
</style>