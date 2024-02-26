<template>
  <main-master-page>
    <home-banner/>
    <about-us-banner/>
    <what-we-do-banner/>
    <projects-block/>
    <donations-banner/>
    <event-contribution-block/>
  </main-master-page>
</template>

<script>

import MainMasterPage from "@/masterPages/MainMasterPage";
import HomeBanner from "@/components/homeComponents/HomeBanner";
import AboutUsBanner from "@/components/homeComponents/AboutUsBanner";
import WhatWeDoBanner from "@/components/homeComponents/WhatWeDoBanner";
import ProjectsBlock from "@/components/generals/ProjectsBlock";
import DonationsBanner from "@/components/homeComponents/DonationsBanner";
import EventContributionBlock from "@/components/generals/EventContributionBlock";

export default {
  name: "HomeView",
  components: {
    EventContributionBlock,
    DonationsBanner,
    ProjectsBlock,
    WhatWeDoBanner,
    AboutUsBanner,
    HomeBanner,
    MainMasterPage
  },
};
</script>
