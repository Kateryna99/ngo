<template>
    <div class="events section">
      <div class="section__wrapper">
        <div class="section__container">
          <div class="section__content">
            <div class="events__header">
              <div class="section__header">
                <h2 class="events__title section__title section__title--white">{{ $t('contributions.youCanContributeTitle') }}</h2>
              </div>
              <div class="section__main section__main--row">
                <div class="section__item">
                  <button class="button" @click="popUpAction">{{ $t('buttons.joinAsVolunteer') }}</button>
                </div>
                <div class="section__item">
                  <router-link to="/donation">
                    <button class="button button--secondary">{{ $t('buttons.donate') }}</button>
                  </router-link>
                </div>
              </div>
            </div>
            <div class="events__main">
              <div class="events__block">
                <div class="events__item">
                  <h2 class="section__title">{{ $t('events.mainTitle') }}</h2>
                </div>
                <div class="events__line"></div>
              </div>
              <div class="events__block events__block--column">
                  <event-card v-for="item in getEventsList" :key="item.id" :event="{
                    date: item.date,
                    month: item.month,
                    subtitle: $t(`events.${item.subtitle}`),
                    title: $t(`events.eventTitles.${item.title}`),
                  }" @click="sendToEventPage(item.id)"/>
              </div>
            </div>
          </div>
        </div>
        <teleport to="body">
          <pop-up v-show="showPopup" :form="{
            title: $t('buttons.joinAsVolunteer'),
            text: $t('texts.loremFirst')
          }" @closePopup="closePopup" />
        </teleport>
      </div>
    </div>
</template>

<script>
import {mapState} from "pinia";
import {useGeneralStore} from "@/store";
import EventCard from "@/components/smallComponents/EventCard";
import PopUp from "@/components/generals/Pop-up";

export default {
  name: "EventContributionBlock",
  components: {PopUp, EventCard},
  data(){
    return {
       showPopup: false,
    }
  },
  computed:{
    ...mapState(useGeneralStore,['getEventsList'])
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
    },
    popUpAction(){
      this.showPopup = true
    },
    closePopup(){
      this.showPopup = false
    }
  },

}
</script>

<style lang="scss" scoped>
.events {
  &__header {
    border-radius: 20px;
    overflow: hidden;

    background-image: url("@/assets/img/home/contribution_banner.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    min-height: 60vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;

    position: relative;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;

      width: 100%;
      height: 100%;

      background-color: rgba(0, 0, 0, 0.55);
    }

  }

  &__main {
    display: flex;
    flex-direction: column;
    gap: 48px;
  }
  &__title{
    max-width: 805px;
    width: 100%;

    text-align: center;
  }

  &__block {
    display: flex;
    align-items: center;
    gap: 24px;

    &--column {
      @media (max-width: 991px) {
        flex-direction: column;
      }
    }
  }
  &__item {
    flex-shrink: 0;
  }

  &__line {
    height: 1px;
    background-color: rgb(229, 229, 229);
    width: 100%;
  }
}
</style>