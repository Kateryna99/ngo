<template>
<info-block class="contacts section__wrapper--yellow section__wrapper--top">
  <template #main>
    <div class="section__block">
      <div class="section__item">
        <div class="section__header">
          <h5 class="section__subtitle">{{ $t('pages.contacts.subtitle') }}</h5>
          <h2 class="section__title">{{ $t('pages.contacts.mainTitle') }}</h2>
        </div>
        <div class="section__main">
          <p class="section__text section__text--width">{{ $t('pages.contacts.text') }}</p>
        </div>
      </div>
      <div class="contacts__content">
        <div class="contacts__block">
          <div class="contacts__item">
            <p class="section__title section__title--small">{{ $t('pages.contacts.smallTitles.letsTalk') }}</p>
          </div>
          <div class="contacts__item">
            <a href="tel:+234 09012346514" class="contacts__link">+234 09012346514</a>
            <a href="mailto:hello@largerthani.com" class="contacts__link">hello@largerthani.com</a>
          </div>
        </div>
        <div class="contacts__block">
          <div class="contacts__item">
            <p class="section__subtext">{{ $t('pages.contacts.smallTitles.headOffice') }}</p>
          </div>
          <div class="contacts__item">
            <a href="https://www.google.com/maps/search/8+Brewery+Drive,+Lagos,++Nigeria./@6.5575895,3.0563506,10z/data=!3m1!4b1?entry=ttu" class="section__text">{{ $t('pages.contacts.addresses.headOffice.title') }}</a>
          </div>
        </div>
        <div class="contacts__block">
          <div class="contacts__item">
            <p class="section__subtext">{{ $t('pages.contacts.smallTitles.branchOffice') }}</p>
          </div>
          <div class="contacts__item">
            <a href="https://www.google.com/maps/place/Abuja,+Federal+Capital+Territory,+Nigeria/@9.0244773,7.1544747,11z/data=!3m1!4b1!4m9!1m2!2m1!1s8+Brewery+Drive,+Lagos,++Nigeria.!3m5!1s0x104e745f4cd62fd9:0x53bd17b4a20ea12b!8m2!3d9.0562646!4d7.4985259!16zL20vMGZueHc?entry=ttu" class="section__text">{{ $t('pages.contacts.addresses.branchOffice.title') }}</a>
          </div>
        </div>
        <div class="socials">
          <div class="socials__wrapper socials__wrapper--start">
            <div class="socials__item">
              <span class="socials__icon icon icon-facebook"></span>
            </div>
            <div class="socials__item">
              <span class="socials__icon icon icon-twitter"></span>
            </div>
            <div class="socials__item">
              <span class="socials__icon icon icon-linkedin"></span>
            </div>
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
  name: "ContactsBanner",
  components: {InfoBlock}
}
</script>

<style lang="scss" scoped>
.contacts {
  &__content {
    display: flex;
    flex-direction: column;
    gap: 48px;
  }

  &__block {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__item {
    display: flex;
    gap: 20px;
  }
  &__link {
    @media (max-width: 480px) {
      font-size: 14px;

    }
  }
}


</style>