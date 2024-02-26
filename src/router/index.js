import {createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/about",
        name: "about",
        component: () => import("../views/AboutUsView.vue"),
    },
    {
        path: "/what-we-do",
        name: "whatWeDo",
        component: () => import("../views/WhatWeDoView.vue"),
    },
    {
        path: "/media",
        name: "media",
        component: () => import("../views/MediaView.vue"),
    },
    {
        path: "/contacts",
        name: "contacts",
        component: () => import("../views/ContactView.vue"),
    },
    {
        path: "/donation",
        name: "donation",
        component: () => import("../views/DonationView.vue"),
    },
    {
        path: "/project/:projectId",
        name: "project",
        component: () => import("../views/ProjectPageView.vue"),
    },
    {
        path: "/event/:eventId",
        name: "event",
        component: () => import("../views/EventView.vue"),
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach(()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
})

export default router;
