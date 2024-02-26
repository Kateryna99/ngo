<template>
  <div class="worker-card">
    <div class="worker-card__wrapper">
      <div class="worker-card__header" :style="{ 'background-image': 'url(' + worker.imgUrl + ')' }">
      </div>
      <div class="worker-card__main">
        <div class="worker-card__item">
          <p class="worker-card__name">{{ worker.name }}</p>
        </div>
        <div class="worker-card__item">
          <p class="worker-card__position">{{ worker.position }}</p>
        </div>
      </div>
      <div class="worker-card__footer socials">
        <div class="socials__wrapper">
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

<script>
export default {
  name: "WorkerCard",
  props: {
    worker: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.worker-card {
  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__header {
    min-height: 45vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    border-radius: 20px;
    overflow: hidden;
  }

  &__main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;

    text-align: center;
    font-weight: 500;
    line-height: 1.6;
  }

  &__item {
  }

  &__name {
    font-size: 20px;

    color: rgb(29, 33, 48);
  }

  &__position {
    font-size: 12px;
  }
}
</style>