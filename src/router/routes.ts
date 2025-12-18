import type { RouteRecordRaw } from 'vue-router';
import LoginLayout from 'layouts/LoginLayout.vue';
import LoginPage from 'pages/LoginPage.vue';
import RegisterPage from 'pages/RegisterPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/_id.vue') }],
  },
  {
    path: '/biographie',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/BiographyPage.vue') }],
  },
  {
    path: '/bilder/aquarelle',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/AquarellePage.vue') }],
  },
  {
    path: '/bilder/werbegrafiken',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/WerbegrafikenPage.vue') }],
  },
  {
    path: '/impressum',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/ImpressumPage.vue') }],
  },
  {
    path: '/login',
    component: LoginLayout,
    children: [
      {
        path: '',
        component: LoginPage,
      },
    ],
  },
  {
    path: '/register',
    component: LoginLayout,
    children: [
      {
        path: '',
        component: RegisterPage,
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
