<template>
  <div class="row items-center no-wrap">
    <q-btn flat round dense color="primary" aria-label="User menu">
      <q-avatar size="32px">
        <img v-if="avatarUrl" :src="avatarUrl" :alt="userEmail" />
        <span v-else>{{ initials }}</span>
      </q-avatar>

      <!-- The dropdown menu -->
      <q-menu anchor="bottom right" self="top right" transition-show="jump-down" transition-hide="jump-up">
        <q-card style="min-width: 220px">
          {{ props }}
          <!-- User info header -->
          <q-item class="bg-grey-2">
            <q-item-section avatar>
              <q-avatar size="32px">
                <img v-if="avatarUrl" :src="avatarUrl" :alt="userName" />
                <span v-else>{{ initials }}</span>
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ userName }}</q-item-label>
              <q-item-label caption>{{ userEmail }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator />

          <!-- Menu items -->
          <q-list padding>
            <q-item clickable v-close-popup @click="$emit('profile')">
              <q-item-section avatar>
                <q-icon name="person" />
              </q-item-section>
              <q-item-section>Profil</q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="$emit('account-settings')">
              <q-item-section avatar>
                <q-icon name="settings" />
              </q-item-section>
              <q-item-section>Kontoeinstellungen</q-item-section>
            </q-item>

            <q-separator spaced />

            <q-item clickable v-close-popup class="text-negative" @click="$emit('logout')">
              <q-item-section avatar>
                <q-icon name="logout" />
              </q-item-section>
              <q-item-section>Abmelden</q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </q-menu>
    </q-btn>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  userName: string
  userEmail?: string
  avatarUrl?: string
}

const props = withDefaults(defineProps<Props>(), {
  userEmail: '',
  avatarUrl: '',
})

defineEmits<{
  (e: 'profile'): void
  (e: 'account-settings'): void
  (e: 'logout'): void
}>()

const initials = computed(() => {
  if (!props.userName) return '?'
  return props.userName
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part[0]?.toUpperCase())
    .join('')
})
</script>
