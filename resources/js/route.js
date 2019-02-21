import page from './page'

const routes = [
        {
            path: '/',
            name: 'home',
            component: page.Home,
        },
        {
            path: '/hello',
            name: 'hello',
            component: page.Hello,
        },
    ]

export default {
    routes,
};
