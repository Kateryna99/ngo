<template>
  <main-master-page>
    <media-banner/>
    <event-contribution-block/>
  </main-master-page>
</template>

<script>
import MainMasterPage from "@/masterPages/MainMasterPage";
import MediaBanner from "@/components/mediaComponents/MediaBanner";
import EventContributionBlock from "@/components/generals/EventContributionBlock";

export default {
  name: "MediaView",
  components: {EventContributionBlock, MediaBanner, MainMasterPage}
}
</script>

<style scoped>

</style>