import {createRouter, createWebHistory} from "vue-router";
import Main from "@/pages/Main.vue";
import PagePost from "@/pages/PagePost.vue";
import PageAbout from "@/pages/PageAbout.vue";
import PagePublication from "@/pages/PagePublication.vue";
import PageOnePost from "@/pages/PageOnePost.vue";


const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/post',
        component: PagePost
    },
    {
        path: '/about',
        component:PageAbout
    },
    {
        path: '/publication',
        component: PagePublication
    },
    {
        path: '/post/:id',
        component: PageOnePost
    }
]

const  router = createRouter(
    {
        routes,
        history:createWebHistory(),

    }
)


export default  router;