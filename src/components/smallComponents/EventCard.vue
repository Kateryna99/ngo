<template>
<div class="event-card section">
  <div class="event-card__wrapper">
    <div class="event-card__block">
      <div class="event-card__item">
        <p class="event-card__date">{{event.date}}</p>
      </div>
      <div class="event-card__item">
        <p class="section__subtitle">{{event.month}}</p>
      </div>
    </div>
    <div class="event-card__block event-card__block--padding">
      <div class="event-card__item">
        <h5 class="event-card__subtitle section__subtitle">{{event.subtitle}}</h5>
      </div>
      <div class="event-card__item">
        <h3 class="section__title section__title--small">{{event.title}}</h3>
      </div>
    </div>
    <div class="event-card__block">
      <div class="event-card__button" ></div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "EventCard",
  props: {
    event:{
      type: Object,
    }
  },

}
</script>

<style lang="scss" scoped>
.event-card {
  width: 100%;
  &__wrapper {
    border-radius: 20px;
    overflow: hidden;

    background-color: rgb(242, 201, 76);
    padding: 40px;

    display: flex;
    align-items: center;
    gap: 24px;


    @media (max-width: 480px) {
      flex-direction: column;
      padding: 20px;
    }
  }

  &__block {
    display: flex;
    flex-direction: column;
    gap: 5px;
    &--padding {
      gap: 8px;
      flex-grow: 1;
    }
  }

  &__item {
  }

  &__date {
    font-size: 48px;
    font-weight: 500;
    line-height: 1.2;
    color: rgb(29, 33, 48);
  }

  &__subtitle {

    display: flex;
    align-items: center;
    gap: 23px;

    &:after {
       content: '';

      max-width: 4vw;
      width: 100%;
      height: 2px;

      background-color: rgb(29, 33, 48);
    }
  }

  &__button {
    width: 56px;
    height: 56px;

    border-radius: 50%;
    background-color: #FFFFFF;

    overflow: hidden;

    display: flex;
    justify-content: center;
    align-content: center;

    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:before {
      content: '\e904';
      font-family: icomoon;

      align-self: center;
    }

    &:hover {
      transform: scale(1.3);
    }
  }
}
</style>