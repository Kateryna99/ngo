<template>
<div class="other-events section">
  <div class="section__wrapper">
    <div class="section__container section__container--small">
      <div class="other-events__content">
        <div class="other-events__header">
          <div class="other-events__item">
            <h2 class="section__title">{{ $t('pages.event.otherEvent') }}</h2>
          </div>
          <div class="other-events__line"></div>
        </div>
        <div class="other-events__main">
          <event-card v-for="item in eventList" :key="item.id" :event="{
          date: item.date,
           month: $t(`events.months.${item.month}`),
             title: $t(`events.eventTitles.${item.title}`),
           subtitle: $t(`events.subTitle`),
        }" @click="sendToEventPage(item.id)"/>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import EventCard from "@/components/smallComponents/EventCard";
export default {
  name: "OtherEvents",
  components: {EventCard},
  props: {
    eventList:{
      type: Array
    }
  },
  methods:{
    sendToEventPage(id){
      this.$router.push({
        name: 'event',
        params: {
          eventId: id
        }
      })
      console.log(id)
      //window.location.reload()
    },
  }
}
</script>

<style lang="scss" scoped>
.other-events {
  &__content{
    display: flex;
    flex-direction: column;
    gap: 48px;
  }
  &__header {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  &__item {
    flex-shrink: 0;
  }

  &__line {
    height: 1px;
    width: 100%;

    background-color: rgb(229, 229, 229);
  }

  &__main {
  }
}

</style>