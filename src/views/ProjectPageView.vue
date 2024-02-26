<template>
  <main-master-page>
    <project-page :project="{
       mainTitle: $t(`projects.projectsItems.${project.title}`),
       mainText: project.mainText,
       imgSrc: project.projectPageImg,
       subText: project.subText,
    }"/>
    <project-features/>
    <projects-block>
      <h5 class="section__subtitle">{{ $t('pages.project.subtitle') }}</h5>
    </projects-block>
  </main-master-page>
</template>

<script>
import {mapState} from "pinia";
import {useGeneralStore} from "@/store";
import MainMasterPage from "@/masterPages/MainMasterPage";
import ProjectPage from "@/components/projectPageComponents/ProjectPage";
import ProjectFeatures from "@/components/projectPageComponents/ProjectFeatures";
import ProjectsBlock from "@/components/generals/ProjectsBlock";

export default {
  name: "ProjectPageView",
  components: { ProjectsBlock, ProjectFeatures, ProjectPage, MainMasterPage},
  data() {
    return {
      project: {}
    }
  },
  computed: {
    ...mapState(useGeneralStore, ['getProjectById']),

    getProjectId() {
      return this.$route.params.projectId
    }
  },
  methods: {
    loadProjectById(newProjectId) {
      this.project = this.getProjectById(newProjectId)
    }
  },
  watch: {
    getProjectId(newProjectId) {
      this.loadProjectById(newProjectId)
    }
  },
  created() {
    this.loadProjectById(this.getProjectId)
  }
}
</script>

<style scoped>

</style>