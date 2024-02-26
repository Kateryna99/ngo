<template>
<form class="contacts-form section">
  <div class="section__wrapper">
    <div class="contacts-form__container">
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
  </div>
</form>
</template>

<script>
export default {
  name: "ContactsForm"
}
</script>

<style lang="scss" scoped>
</style>