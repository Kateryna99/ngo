<template>
<info-block class="section__wrapper--top section__wrapper--yellow">
  <template #main>
    <div class="section__block">
      <div class="section__item">
        <div class="section__header">
          <h5 class="section__subtitle">{{ $t('pages.donation.subtitle') }}</h5>
          <h2 class="section__title">{{ $t('pages.donation.titles.mainTitle') }}</h2>
        </div>
        <div class="section__main">
          <p class="section__text">{{ $t('pages.donation.mainText') }}</p>
        </div>
        <div class="section__footer">
          <router-link to="/">
            <button class="button">{{ $t('buttons.donate') }}</button>
          </router-link>
        </div>
      </div>
      <div class="section__img section__img--small">
        <img src="@/assets/img/donation/donation_banner.jpg">
      </div>
    </div>
  </template>
</info-block>
</template>

<script>
import InfoBlock from "@/components/generals/InfoBlock";
export default {
  name: "DonationComponent",
  components: {InfoBlock}
}
</script>

<style scoped>

</style>