import Vue from 'vue'
import Router from 'vue-router'

import Register from '@/components/register' // 注册
import Login from '@/components/login' // 手机号登录

import Home from '@/components/home' // 发现路由
import Reco from '@/components/homes/reco' // 个性推荐
import Anchor from '@/components/homes/anchor' // 主播电台

import Videos from '@/components/videos' // 视频路由

import Mine from '@/components/mine' // 我的路由

import Friend from '@/components/friend' // 朋友路由

import Account from '@/components/account' // 账号路由
import Member from '@/components/accounts/member' // 会员中心


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/member'
        }, {
            path: '/register',
            name: 'Register',
            component: Register
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
        },
        {
            path: '/videos',
            name: 'Videos',
            component: Videos,
        },
        {
            path: '/mine',
            name: 'Mine',
            component: Mine,
        },
        {
            path: '/friend',
            name: 'Friend',
            component: Friend,
        },
        {
            path: '/account',
            name: 'Account',
            component: Account
        },
        {
            path: '/member',
            name: 'Member',
            component: Member
        }
    ]
})