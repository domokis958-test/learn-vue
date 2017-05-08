// import User from './components/user/User.vue'
// import UserStart from './components/user/UserStart.vue'
// import UserDetail from './components/user/UserDetail.vue'
// import UserEdit from './components/user/UserEdit.vue'
import Home from './components/Home.vue'
import Header from './components/Header.vue'


const User = resolve => {
    require.ensure(['./components/User/User.vue'], () => {
        resolve(require('./components/User/User.vue'));
    })
}

const UserStart = resolve => {
    require.ensure(['./components/User/UserStart.vue'], () => {
        resolve(require('./components/User/UserStart.vue'));
    })
}
const UserEdit = resolve => {
    require.ensure(['./components/User/UserEdit.vue'], () => {
        resolve(require('./components/User/UserEdit.vue'));
    })
}
const UserDetail = resolve => {
    require.ensure(['./components/User/UserDetail.vue'], () => {
        resolve(require('./components/User/UserDetail.vue'));
    })
}

export const routes = [
    {
        path: '/user',
        components: {
            default: User,
            'header-bottom': Header
        },
        children: [
            {
                path: '/',
                component: UserStart
            },
            {
                path: ':id',
                component: UserDetail,
                beforeEnter: (to, from, next) => {
                    console.log("inside route setup");
                    next();
                }
            },
            {
                path: ':id/edit',
                component: UserEdit,
                name: 'userEdit'
            }
        ]
    },
    {
        path: '',
        components: {
            default: Home,
            'header-top': Header
        },
        name: 'home'
    },
    {
        path: '/redirect-me',
        redirect: '/user'
    },
    {
        path: '*',
        redirect: '/'
    }

];