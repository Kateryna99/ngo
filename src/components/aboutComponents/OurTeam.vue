<template>
<div class="out-team section">
  <div class="section__wrapper section__wrapper--none">
    <div class="section__container">
      <div class="out-team__content">
        <div class="out-team__header">
          <h2 class="section__title">{{ $t('pages.aboutUs.titles.ourTeam') }}</h2>
          <p class="section__text section__text--width">{{ $t('texts.loremFirst') }}</p>
        </div>
        <div class="out-team__main">
          <worker-card v-for="item in getTeamList" :key="item.id" :worker="{
            imgUrl: item.imgUrl,
            name: $t(`pages.aboutUs.ourTeam.${item.name}`),
            position: $t(`pages.aboutUs.ourTeam.${item.position}`)
          }" />
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {mapState} from "pinia";
import {useGeneralStore} from "@/store";
import WorkerCard from "@/components/smallComponents/WorkerCard";
export default {
  name: "OurTeam",
  components: {WorkerCard},
  computed: {
    ...mapState(useGeneralStore, ['getTeamList'])
  }
}
</script>

<style lang="scss" scoped>
.out-team {

  &__content {
    display: flex;
    flex-direction: column;
    gap: 48px;
  }

  &__header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;

    text-align: center;
  }

  &__main {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 290px));
    justify-content: center;
    align-items: center;
    column-gap: 30px;
    row-gap: 48px;
  }
}
</style>