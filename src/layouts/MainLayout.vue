<template>
  <q-layout view="lHh Lpr lFf">
    <q-header v-if="!isSmallScreen" elevated class="bg-white flex row no-wrap items-center justify-center"
      :style="{ height: headerHeight, transition: 'height 0.5s ease' }">
      <directory />
      {{ userStore.getUser }}
      <!-- <useraccount style="position: absolute; right: 30px; top: 20px;" user-name=""
        :user-email="userStore.getUser?.email ?? ''" avatar-url="" :show-theme-toggle="true" @profile="goToProfile"
        @account-settings="goToAccountSettings" @toggle-theme="toggleTheme" @logout="logout" /> -->
    </q-header>

    <q-page-container>
      <InfoComp v-if="isSmallScreen" />
      <router-view />
    </q-page-container>
    <Footer_comp v-if="!isSmallScreen" />
    <moblieFooter v-else @profile="goToProfile" @account-settings="goToAccountSettings" @toggle-theme="toggleTheme"
      @logout="logout" />
  </q-layout>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import directory from 'src/components/directory.vue';
// import useraccount from 'src/components/userAccount.vue';
import Footer_comp from 'src/components/footer.vue';
import { useQuasar } from 'quasar'
import { useUserStore } from 'src/stores/user-store';
import moblieFooter from 'src/components/mobileFooter.vue';
import InfoComp from 'src/components/infoComp.vue'

const isSmallScreen = computed(() => $q.screen.lt.md);
const isScrolled = ref(false);
const headerHeight = ref(isScrolled.value ? '80px' : '80px');

const userStore = useUserStore()
const $q = useQuasar()

function goToProfile() {
  console.log('Go to profile page');
}

function goToAccountSettings() {
  console.log('Go to account settings page');
}

function toggleTheme() {
  $q.dark.toggle()
}

function logout() {
  // your logout logic (API call, store reset, etc.)
}
</script>
