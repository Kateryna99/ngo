<template>
  <main-master-page>
    <donation-component/>
    <donation-block/>
    <event-contribution-block/>
  </main-master-page>
</template>

<script>
import MainMasterPage from "@/masterPages/MainMasterPage";
import DonationComponent from "@/components/donationComponents/DonationComponent";
import DonationBlock from "@/components/donationComponents/DonationBlock";
import EventContributionBlock from "@/components/generals/EventContributionBlock";

export default {
  name: "DonationView",
  components: {EventContributionBlock, DonationBlock, DonationComponent, MainMasterPage}
}
</script>

<style scoped>

</style>