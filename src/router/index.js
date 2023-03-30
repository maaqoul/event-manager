import Vue from 'vue'
import VueRouter from 'vue-router'
import EventList from '../views/EventList'
import EventShow from '../views/EventShow'
import EventCreate from '../views/EventCreate'
import NotFound from '../components/NotFound'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    component: NotFound,
  },
  {
    path: '/',
    name: 'event-list',
    component: EventList,
  },
  {
    path: '/event/:id',
    name: 'event-show',
    component: EventShow,
    props: true,
  },
  {
    path: '/create',
    name: 'event-create',
    component: EventCreate,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
