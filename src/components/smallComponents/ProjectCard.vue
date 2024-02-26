<template>
<div class="product-card">
  <div class="product-card__wrapper" :style="{ 'background-image': 'url(' + project.imgUrl + ')' }">
      <div class="product-card__header">
        <h4 class="product-card__title">{{ project.title }}</h4>
      </div>
      <div class="product-card__main">
        <p class="product-card__text">{{ $t('texts.loremFirst') }}</p>
      </div>
      <div class="product-card__footer">
        <button class="button button--secondary">{{ $t('buttons.learnMore') }}</button>
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.product-card {
  &__wrapper {
    border-radius: 20px;
    overflow: hidden;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    position: relative;
    padding: 80px 48px 48px 48px;

    min-height: 100%;

    display: flex;
    flex-direction: column;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;

      width: 100%;
      height: 100%;

      background-color: rgba(0, 0, 0, 0.55);
    }

    @media (max-width: 768px) {
      padding: 40px 24px 24px 24px;
    }
  }

  &__header {
    margin-bottom: 16px;

    position: relative;
    z-index: 2;
  }

  &__title {
    font-weight: 700;
    font-size: 28px;
    line-height: 1.5;
    color: #FFFFFF;
  }

  &__main {
    margin-bottom: 64px;

    flex-grow: 1;

    position: relative;
    z-index: 2;
  }
  &__text {
    color: #FFFFFF;
  }
}
</style>