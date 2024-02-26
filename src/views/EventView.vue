<template>
  <main-master-page>
    <event-page :event="{
  mainTitle: $t(`events.eventTitles.${event.title}`),
  place: $t(`pages.contacts.addresses.${event.place}`),
  month: $t(`events.months.${event.month}`),
  date: event.date,
  time: event.time,
  mainText: event.mainText,
  subText: event.subText,
  imgSrc: event.imgUrl,
}"/>
    <other-events :event-list="otherEventList"/>
  </main-master-page>
</template>

<script>
import {mapState} from "pinia";
import {useGeneralStore} from "@/store";
import EventPage from "@/components/eventComponents/EventPage";
import MainMasterPage from "@/masterPages/MainMasterPage";
import OtherEvents from "@/components/eventComponents/OtherEvents";

export default {
  name: "EventView",
  components: {OtherEvents, MainMasterPage, EventPage},
  data() {
    return {
      event: {},
      otherEventList: []
    }
  },
  computed: {
    ...mapState(useGeneralStore, ['getEventById', 'getOtherEvents']),

    getEventId() {
      return this.$route.params.eventId
    }
  },
  created() {
    this.event = this.getEventById(this.getEventId)
    this.otherEventList = this.getOtherEvents(this.getEventId)
  }
}
</script>

<style scoped>

</style>