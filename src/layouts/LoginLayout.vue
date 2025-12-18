<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
      </q-toolbar>
    </q-header>

    <!--  <errorPopUp /> -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
//import errorPopUp from 'src/components/errorPopUp.vue'

defineOptions({
  name: 'LoginLayout',
})
</script>
