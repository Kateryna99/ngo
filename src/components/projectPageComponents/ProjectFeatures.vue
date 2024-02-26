<template>
<div class="project-features section">
  <div class="section__wrapper section__wrapper--yellow">
    <div class="project-features__container">
      <div class="project-features__content">
        <feature-card v-for="item in getProjectFeaturesList" :key="item.id" :feature="{
          iconTitle: item.iconTitle,
          title: $t(`pages.project.features.${item.title}`),
          text: $t(`texts.${item.text}`)
        }"/>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {mapState} from "pinia";
import {useGeneralStore} from "@/store";
import FeatureCard from "@/components/smallComponents/FeatureCard";
export default {
  name: "ProjectFeatures",
  components: {FeatureCard},
  computed: {
    ...mapState(useGeneralStore, ['getProjectFeaturesList']),
  }
}
</script>

<style lang="scss" scoped>
.project-features {
  &__container {
    max-width: 1090px;
  }
  &__content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    column-gap: 64px;
    row-gap: 48px;
  }
}
</style>