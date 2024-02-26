<template>
    <div class="donation-banner section">
      <div class="donation-banner__wrapper section__wrapper">
        <div class="donation-banner__container">
          <div class="donation-banner__content">
            <div class="donation-banner__left">
              <div class="donation-banner__block">
                <h2 class="section__title section__title--white">{{ $t('pages.home.titles.howWeSpendDonationsTitle') }}</h2>
              </div>
              <div class="donation-banner__block">
                <p class="section__text">{{ $t('pages.home.texts.donationText') }}</p>
              </div>
              <div class="donation-banner__grid">
                <div class="donation-banner__item" style="--background-color:rgb(190, 243, 192)">
                  <p class="donation-banner__text">{{ $t('pages.home.texts.donationProgram.childCareHome') }}</p>
                </div>
                <div class="donation-banner__item" style="--background-color:rgb(172, 148, 241)">
                  <p class="donation-banner__text">{{ $t('pages.home.texts.donationProgram.cleanlinessProgram') }}</p>
                </div>
                <div class="donation-banner__item" style="--background-color:rgb(255, 240, 202)">
                  <p class="donation-banner__text">{{ $t('pages.home.texts.donationProgram.helpingPeople') }}</p>
                </div>
                <div class="donation-banner__item" style="--background-color:rgb(249, 207, 100)">
                  <p class="donation-banner__text">{{ $t('pages.home.texts.donationProgram.excursions') }}</p>
                </div>
                <div class="donation-banner__item" style="--background-color:rgb(243, 143, 191)">
                  <p class="donation-banner__text">{{ $t('pages.home.texts.donationProgram.feedingPoor') }}</p>
                </div>
              </div>
            </div>
            <div class="donation-banner__img">
              <img src="@/assets/img/home/statistic_circle.svg">
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "DonationsBanner"
}
</script>

<style lang="scss" scoped>
.donation-banner {
  &__wrapper {
    background-color: #000000;
  }

  &__container {
  }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;


    @media (max-width: 768px) {
      flex-direction: column;
      gap: 20px;
    }
  }

  &__left {
    max-width: 630px;
    width: 100%;


    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &__block {
  }

  &__text {
    color: #FFFFFF;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(240px,1fr));
    row-gap: 16px;
    column-gap: 15px;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 5px;

    &:before {
      content: '';
      width: 16px;
      height: 16px;

      border-radius: 4px;
      overflow: hidden;

      background-color: var(--background-color);

      flex-shrink: 0;
    }
  }

  &__img {
  }
}
</style>