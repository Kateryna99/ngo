<template>
<div class="donation-info section">
   <div class="section__wrapper">
     <div class="section__container">
       <div class="donation-info__content">
         <div class="donation-info__grid">
           <div class="donation-info__item">
             <h2 class="section__title section__title--width">{{ $t('pages.donation.titles.howYouCanContribute') }}</h2>
             <p class="section__text">{{ $t('texts.loremSecond') }}</p>
           </div>
           <div class="donation-info__tabs donation-info-tabs">
              <div class="donation-info-tabs__wrapper">
                <div class="donation-info-tabs__header">
                  <button v-for="(item,index) in tabsList" :key="index" class="donation-info-tabs__button" :class="{'donation-info-tabs__button--active':item === activeTab}" @click="changeTab(item)">{{item}}</button>
                </div>
                <div class="donation-info-tabs__main">
                  <div v-if="activeTab===this.$t('pages.donation.smallTitles.overview')" class="donation-info-tabs__block">
                      <p class="section__text">{{ $t('texts.loremSecond') }}</p>
                  </div>
                  <div v-if="activeTab===this.$t('pages.donation.smallTitles.impact')" class="donation-info-tabs__block">
                      <p class="section__text">{{ $t('texts.loremFirst') }}</p>
                  </div>
                  <div v-if="activeTab===this.$t('pages.donation.smallTitles.whatYouGet')" class="donation-info-tabs__block">
                      <p class="section__text">{{ $t('texts.loremSecond') }}</p>
                      <p class="section__text">{{ $t('texts.loremFirst') }}</p>
                  </div>
                </div>
              </div>
           </div>
         </div>
         <div class="donation-info__block">
           <div class="section__item">
             <h2 class="section__title">{{ $t('pages.donation.titles.howWeSpendDonations') }}</h2>
           </div>
           <div class="section__item">
             <p class="section__text section__text--width">{{ $t('texts.loremSecond') }}</p>
           </div>
           <div class="section__item">
             <p class="section__text section__text--width">{{ $t('texts.loremFirst') }}</p>
           </div>
         </div>
       </div>
     </div>
   </div>
</div>
</template>

<script>
export default {
  name: "DonationBlock",
  data() {
    return {
      tabsList: [this.$t('pages.donation.smallTitles.overview'),this.$t('pages.donation.smallTitles.impact'),this.$t('pages.donation.smallTitles.whatYouGet')],
      activeTab: this.$t('pages.donation.smallTitles.overview')
    }
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab
    }
  }
}
</script>

<style lang="scss" scoped>
.donation-info {
  border-bottom: 1px solid rgb(229, 229, 229);
  &__content {
    min-height: 70vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 50px;
  }

  &__block {
    display: flex;
    gap: 65px;

    @media (max-width: 991px) {
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }
  }
  &__grid{
    display: grid;
    grid-template-columns: repeat(2, minmax(450px, 1fr));
    gap: 50px;

    @media (max-width: 991px) {
      grid-template-columns: minmax(0,1fr);
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__tabs {
  }
}
.donation-info-tabs {
  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 34px;
  }

  &__header {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  &__button {
    font-weight: 500;
    color: rgb(82, 85, 96);

    position: relative;

    &--active{
      color: rgb(29, 33, 48);

      &:before{
        content: '';
        position: absolute;
        left: 0;
        bottom: -10px;

        width: 100%;
        height: 2px;
        background-color: rgb(242, 201, 76);
      }
    }
  }

  &__main {
  }
  &__block {
    display: flex;
    flex-direction: column;
  }
}
</style>