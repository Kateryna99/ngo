<template>
<div class="award-card">
  <div class="award-card__wrapper">
    <div class="award-card__header">
      <span class="award-card__leaf award-card__leaf--left"></span>
      <span class="award-card__icon" :class="award.mainAward"></span>
      <span class="award-card__leaf award-card__leaf--right"></span>
    </div>
    <div class="award-card__main">
      <div class="award-card__item">
        <p class="award-card__date">{{award.date}}</p>
      </div>
      <div class="award-card__item">
        <p class="award-card__title">{{award.title}}</p>
      </div>
      <div class="award-card__item">
        <p class="award-card__text">{{award.city}}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "AwardCard",
  props: {
    award: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.award-card {
  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__header {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
  }

  &__icon {
    color: rgb(242, 201, 76);
    font-size: 35px;
  }
  &__leaf{

    color: rgb(28, 29, 40);
    font-size: 70px;

    &:before{
      font-family: icomoon;
    }

    &--left{
      &:before{
        content: "\e902";
      }
    }
    &--right{
      &:before{
        content: "\e903";
      }
    }
  }

  &__main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;

    line-height: 1.6;
  }

  &__item {
  }

  &__date {
    font-weight: 700;
    font-size: 24px;
    color: rgb(29, 33, 48);
  }

  &__title {
    font-weight: 700;

    color: rgb(29, 33, 48);
  }

  &__text {
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
  }
}
</style>