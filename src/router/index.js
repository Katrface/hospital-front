import {createRouter, createWebHistory} from 'vue-router';
import LoginForm from "@/views/LoginForm";
import RegistrationTable from "@/views/RegistrationTable";

import doctor from "@/router/doctor";
import registrar from "@/router/registrar"

const routes = [
    {
        path: '/',
        component: LoginForm
    },
    {
        path: '/table',
        component: RegistrationTable
    },
    ...registrar,
    ...doctor
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
