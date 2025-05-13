import defaultLayout from '@/layouts/default.vue'

const routes = [
  {
    path: '/',
    name : "default",
    component: defaultLayout,
    children: [
      {
        path: '',
        name : "home",
        component: () => import('@/views/HomeView.vue'),
      },
    ],
  },
]

export default routes;
