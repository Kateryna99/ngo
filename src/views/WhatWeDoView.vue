<template>
<main-master-page>
<what-we-do-component/>
  <what-we-do-special-needs/>
  <projects-block/>
  <event-contribution-block/>
</main-master-page>
</template>

<script>
import MainMasterPage from "@/masterPages/MainMasterPage";
import WhatWeDoComponent from "@/components/whatWeDoComponents/WhatWeDoComponent";
import WhatWeDoSpecialNeeds from "@/components/whatWeDoComponents/WhatWeDoSpecialNeeds";
import ProjectsBlock from "@/components/generals/ProjectsBlock";
import EventContributionBlock from "@/components/generals/EventContributionBlock";
export default {
  name: "WhatWeDoView",
  components: {EventContributionBlock, ProjectsBlock, WhatWeDoSpecialNeeds, WhatWeDoComponent,MainMasterPage}
}
</script>

<style scoped>

</style>