import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import AddResturant from './components/AddResturant.vue'
import UpdateResturant from './components/UpdateResturant.vue'
import { createRouter, createWebHistory } from 'vue-router';
import Login from './components/Login.vue'

const routes = [
    {
        name: "Home",
        component: Home,
        path: "/"
    },
    {
        name: "SignUp",
        component: SignUp,
        path: "/signup",
    },
    {
        name: "Login",
        component: Login,
        path: "/login",
    },
    {
        name: "UpdateResturant",
        component: UpdateResturant,
        path: "/UpdateResturant",
    },
    {
        name: "AddResturant",
        component: AddResturant,
        path: "/AddResturant",
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;