<template>
<div class="feature-card section">
  <div class="feature-card__wrapper">
    <div class="feature-card__icon">
      <span class="icon" :class="feature.iconTitle"></span>
    </div>
    <div class="feature-card__block">
      <div class="feature-card__item">
        <h4 class="section__title section__title--small">{{feature.title}}</h4>
      </div>
      <div class="feature-card__item">
        <p class="section__text section__text--small">{{feature.text}}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "FeatureCard",
  props: {
    feature:{
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.feature-card {
  &__wrapper {
    display: flex;
    gap: 24px;
  }

  &__icon {
    padding-top: 7px;
  }

  &__block {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
}
.icon {
  font-size: 25px;
  color: rgb(29, 33, 48);
}

</style>