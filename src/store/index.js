import {defineStore} from 'pinia'
import {projectsList, eventsList, awardsList, teamList, featuresList, mediaNewsList,projectFeaturesList} from "@/store/helpers/data";

export const useGeneralStore = defineStore('general', {
    state: () => ({
        projectsList: projectsList,
        eventsList: eventsList,
        awardsList: awardsList,
        teamList: teamList,
        featuresList: featuresList,
        mediaNewsList: mediaNewsList,
        projectFeaturesList: projectFeaturesList
    }),
    getters: {
        getProjectsList: (state) => state.projectsList,
        getEventsList: (state) => state.eventsList,
        getAwardsList: (state) => state.awardsList,
        getTeamList: (state) => state.teamList,
        getFeaturesList: (state) => state.featuresList,
        getMediaNewsList: (state) => state.mediaNewsList,
        getProjectFeaturesList: (state) => state.projectFeaturesList,

        getProjectById: (state) => (id) => state.projectsList.find(item => item.id == id),
        getEventById: (state) => (id) => state.eventsList.find(item => item.id == id),
        getOtherEvents: (state) => (id) => state.eventsList.filter(item => item.id != id),

    }
    ,
    actions: {}
})