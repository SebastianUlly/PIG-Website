import type { RouteRecordRaw } from 'vue-router';
import LoginLayout from 'layouts/LoginLayout.vue';
import LoginPage from 'pages/LoginPage.vue';
import RegisterPage from 'pages/RegisterPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
    meta: {
      title: 'Pilgmayer',
    },
  },
  {
    path: '/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/_id.vue') }],
    meta: {
      title: 'Pilgmayer',
    },
  },
  {
    path: '/biographie',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/BiographyPage.vue') }],
    meta: {
      title: 'Pilgmayer',
    },
  },
  {
    path: '/bilder/aquarelle',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/AquarellePage.vue') }],
    meta: {
      title: 'Pilgmayer',
    },
  },
  {
    path: '/bilder/werbegrafiken',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/WerbegrafikenPage.vue') }],
    meta: {
      title: 'Pilgmayer',
    },
  },
  {
    path: '/bilder/karikaturen',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/KarikaturenPage.vue') }],
    meta: {
      title: 'Pilgmayer',
    },
  },
  {
    path: '/bilder/federzeichnungen',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/FederzeichnungenPage.vue') }],
    meta: {
      title: 'Pilgmayer',
    },
  },
  {
    path: '/bilder/franz-piglmayer',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/FranzPiglmayerPage.vue') }],
    meta: {
      title: 'Pilgmayer',
    },
  },
  {
    path: '/impressum',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/ImpressumPage.vue') }],
    meta: {
      title: 'Pilgmayer',
    },
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
    meta: {
      title: 'Pilgmayer',
    },
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
    meta: {
      title: 'Pilgmayer',
    },
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
    meta: {
      title: 'Pilgmayer',
    },
  },
];

export default routes;
