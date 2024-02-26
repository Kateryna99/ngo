<template>
  <main-master-page>
    <about-banner/>
    <mission-and-vision/>
    <journey-component/>
    <our-team/>
    <event-contribution-block/>
  </main-master-page>
</template>

<script>
import MainMasterPage from "@/masterPages/MainMasterPage";
import AboutBanner from "@/components/aboutComponents/AboutBanner";
import MissionAndVision from "@/components/aboutComponents/MissionAndVision";
import JourneyComponent from "@/components/aboutComponents/JourneyComponent";
import OurTeam from "@/components/aboutComponents/OurTeam";
import EventContributionBlock from "@/components/generals/EventContributionBlock";

export default {
  name: "AboutUsView",
  components: {EventContributionBlock, OurTeam, JourneyComponent, MissionAndVision, AboutBanner, MainMasterPage}
}
</script>

<style scoped>

</style>