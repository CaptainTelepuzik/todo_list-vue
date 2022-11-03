import {createRouter, createWebHashHistory} from 'vue-router'
import Home from "@/pages/home/Home";
import Login from "@/pages/login/Login";
import {AH} from "@/helpers/AuthHelpers";



const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/login', component: Login, name: 'login' },
    { path: '/:patchMatch(.*)*', redirect: '/' },
    { path: '/:patchMatch(.*)', redirect: '/' },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const publicPage = ['login'];
    const currentPage = String(to.name || to.path.replace('/', ''))
    const isAuth = AH.userIsAuth();
    const authRequired = !publicPage.includes(currentPage);

    if (authRequired && !isAuth) {
        return next('/login');
    }

    if (currentPage === 'login' && isAuth) {
        return next('/');
    }

    next();
});

export {router};