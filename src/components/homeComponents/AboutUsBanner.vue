<template>
<info-block>
  <template #footer>
    <div class="supporters">
      <div class="supporters__wrapper">
        <div class="supporters__block">
           <div class="supporters__item">
             <h5 class="section__subtitle">{{ $t('pages.home.subtitles.ourSupporters') }}</h5>
           </div>
          <div class="supporters__line"></div>
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
  </template>
</info-block>
</template>

<script>
import InfoBlock from "@/components/generals/InfoBlock";
export default {
  name: "AboutUsBanner",
  components: {InfoBlock}
}
</script>

<style scoped>

</style>