import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login'
import Home from '@/components/home'
import Reco from '@/components/homes/reco'
import Anchor from '@/components/homes/anchor'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/home/reco'
        }, {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
            children: [{
                    path: '/home/reco',
                    name: 'Reco',
                    component: Reco
                },
                {
                    path: '/home/anchor',
                    name: 'Anchor',
                    component: Anchor
                }
            ]
        }
    ]
})