<template>
<div class="pop-up section">
  <div class="pop-up__wrapper">
    <div class="pop-up__container">
      <form class="pop-up__content">
        <div class="pop-up__header">
          <span class="pop-up__icon" @click="closePopup"></span>
           <h2 class="section__title">{{form.title}}</h2>
          <p class="section__text section__text--small">{{form.text}}</p>
        </div>
        <div class="pop-up__main contacts-form">
          <div class="contacts-form__content">
            <div class="contacts-form__main">
              <div class="contacts-form__block">
                <div class="contacts-form__item">
                  <label for="" class="contacts-form__label">{{ $t('inputs.firstName') }}</label>
                </div>
                <div class="contacts-form__item">
                  <input type="text" :placeholder="$t('placeholder.yourName')" class="contacts-form__input">
                </div>
              </div>
              <div class="contacts-form__block">
                <div class="contacts-form__item">
                  <label for="" class="contacts-form__label">{{ $t('inputs.lastName') }}</label>
                </div>
                <div class="contacts-form__item">
                  <input type="text" :placeholder="$t('placeholder.yourLastName')" class="contacts-form__input">
                </div>
              </div>
              <div class="contacts-form__block">
                <div class="contacts-form__item">
                  <label for="" class="contacts-form__label">{{ $t('inputs.email') }}</label>
                </div>
                <div class="contacts-form__item">
                  <input type="email" :placeholder="$t('placeholder.yourEmail')" class="contacts-form__input">
                </div>
              </div>
              <div class="contacts-form__block">
                <div class="contacts-form__item">
                  <label for="" class="contacts-form__label">{{ $t('inputs.subject') }}</label>
                </div>
                <div class="contacts-form__item">
                  <input type="text" :placeholder="$t('placeholder.subject')" class="contacts-form__input">
                </div>
              </div>
              <div class="contacts-form__block contacts-form__block--width">
                <div class="contacts-form__item">
                  <label for="" class="contacts-form__label">{{ $t('inputs.message') }}</label>
                </div>
                <div class="contacts-form__item">
                  <textarea class="contacts-form__textarea" autocomplete="on" autocapitalize="on" :placeholder="$t('inputs.yourMessage')" name="" id="contacts-message" cols="30" rows="10"></textarea>
                </div>
              </div>
            </div>
            <div class="contacts-form__footer">
              <button class="button">{{ $t('buttons.sendMessage') }}</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Pop-up",
  components: {},
  props: {
    form:{
      type: Object
    }
  },
  methods:{
    closePopup(){
      this.$emit('closePopup')
    }
  }
}
</script>

<style lang="scss" scoped>
.pop-up {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 60;

  width: 100%;
  min-height: 100vh;

  &__wrapper {
    background-color: rgba(0, 0, 0, 0.55);

    display: flex;
    justify-content: center;
    align-items: center;

    min-height: 100vh;
  }

  &__container {
    max-width: 630px;

    max-height: 100vh;

    overflow-y: auto;
  }

  &__content {
    padding: 48px;

    background-color: #FFFFFF;
    border-radius: 8px;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    gap: 30px;

    position: relative;

    @media (max-width: 480px) {
      padding: 20px;
    }
  }

  &__icon{
    &::before {
      content: '\e904';
      font-family: 'icomoon';

      position: absolute;
      top: 20px;
      right: 20px;

      display: block;
      font-size: 22px;
      color: rgba(0, 0, 0, 0.99);

      cursor: pointer;
    }
  }

  &__header {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__main {
  }
}
</style>