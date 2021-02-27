import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import NewPost from '../views/notes/Create.vue'
import Table from '../views/notes/Table.vue'
import Show from '../views/notes/Show.vue'
import Edit from '../views/notes/Edit.vue'


const routes = [
      {
          path:'/',
          name:'home',
          component: Home
      },
      {
          path:'/about',
          name:'pages.about',
          component: About
      },
      {
          path:'/contact',
          name:'pages.contact',
          component: Contact
      },
      {
          path:'/notes/create',
          name:'notes.create',
          component: NewPost
      },
      {
          path:'/notes/table',
          name:'notes.table',
          component: Table
      },
      {
          path:'/notes/:noteSlug',
          name:'notes.show',
          component: Show
      },
      {
          path:'/notes/:noteSlug/edit',
          name:'notes.edit',
          component: Edit
      },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
