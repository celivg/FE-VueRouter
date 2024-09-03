import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: HomeView
  },
  {
    path: '/productos',
    name: 'productos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/ProductosView.vue'),
    props: () => { return { nombre: 'Desayunos', descripcion: 'Variedad de desayunos para disfrutar en familia', precio: 2000, cantidad: 'Para 2 personas' } }
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import('../views/ContactoView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active', //class bs
  linkExactActiveClass: 'active-exact',
  routes
})

export default router
