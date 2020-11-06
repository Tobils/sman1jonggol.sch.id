import Home from '@/views/Home'
import Details from '@/views/Details.vue'

const routes = [
    {
        path: '/', component: Home
    },
    {
        path: '/details/:tipe/:id', 
        props: true,
        component: Details
    }
];

export default routes;