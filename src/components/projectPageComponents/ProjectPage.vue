<template>
<div class="project-page section">
  <div class="section__wrapper section__wrapper--top">
    <div class="project-page__container">
      <div class="section__block section__block--column">
        <div class="project-page__content">
          <div class="project-page__header">
            <p class="section__subtitle">{{ $t('pages.project.subtitle') }}</p>
            <h2 class="section__title">{{project.mainTitle}}</h2>
          </div>
          <div class="project-page__main">
            <div class="project-page__block">
              <p v-for="(item,index) in project.mainText" :key="index" class="section__text section__text--justify">{{ $t(`texts.${item}`) }}</p>
            </div>
            <div class="project-page__img">
              <img :src="project.imgSrc">
            </div>
          </div>
          <div class="project-page__footer">
            <h3 class="project-page__title  section__title">{{ $t('pages.project.coolHeading') }}</h3>
            <div class="project-page__block">
              <p v-for="(item,index) in project.subText" :key="index" class="section__text section__text--justify">{{ $t(`texts.${item}`) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "ProjectPage",
  props: {
    project: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.project-page {
  &__container{
    max-width: 990px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  &__header {

  }

  &__main {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  &__block {
  }

  &__img {
    max-width: 100vw;
    width: 100%;

    height: 45vh;

    border-radius: 20px;
    overflow: hidden;

    position: relative;

    img{
      width: 100%;
      height: 100%;

      object-fit: cover;
      object-position: center;
    }

    &:before{
      content: '';
      position: absolute;
      left: 0;
      top: 0;

      width: 100%;
      height: 100%;

      background-color: rgba(0, 0, 0, 0.55);
    }
  }

  &__footer {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  &__title {
  }
}

</style>