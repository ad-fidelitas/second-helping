import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";
import Signup from "./views/Signup.vue";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import map from "@/components/map.vue";



Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/login",
            name: "login",
            component: Login
        },
        {
            path: "/signup",
            name: "signup",
            component: Signup
        },
        {
            path: "*",
            component: Home
        },
        {
            path: "/about",
            name: "about",
            component: About
        },
        {
            path: "/map", 
            name: "map", 
            component: map
        }
    ]
});
