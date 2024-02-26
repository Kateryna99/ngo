<template>
  <div class="projects section">
    <div class="section__wrapper">
      <div class="projects__container">
        <div class="projects__content">
          <div class="section__block">
            <slot>
            <div class="section__header">
              <h5 class="section__subtitle">{{ $t('projects.subtitle') }}</h5>
              <h2 class="projects__title section__title">{{ $t('projects.mainTitle') }}</h2>
            </div>
            </slot>
          </div>
          <div class="projects__block">
            <project-card v-for="item in getProjectsList" :key="item.id" :project="{
               title: $t(`projects.projectsItems.${item.title}`),
               imgUrl: item.imgUrl,
             }" @click="openProjectPage(item.id)"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "pinia";
import {useGeneralStore} from "@/store";
import ProjectCard from "@/components/smallComponents/ProjectCard";

export default {
  name: "ProjectsBlock",
  components: {ProjectCard},
  computed: {
    ...mapState(useGeneralStore, ['getProjectsList']),

  },
  methods: {
    openProjectPage(id) {
      this.$router.push({
        name: 'project',
        params: {
          projectId: id
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.projects {
  &__container {
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 65px;
  }

  &__title {
    max-width: 640px;
  }

  &__block {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-auto-rows: auto;
    gap: 24px;

    @media (max-width: 991px) {
      grid-template-columns: minmax(0,1fr);
    }
  }
}
</style>