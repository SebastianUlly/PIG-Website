<template>
  <q-banner v-if="visible" class="bg-primary text-white q-pa-md" inline-actions>
    <div class="row items-center no-wrap full-width">
      <div class="col">
        Falls Sie Bilder von '$Piglmayer' haben und diese uns zusenden möchten dann scannen Sie diese bitte mit der <a
          href="https://play.google.com/store/apps/details?id=com.google.android.apps.photos.scanner&hl=de">Fotoscanner
          App von Google</a> ein.
      </div>

      <q-btn flat dense round icon="close" @click="close" aria-label="Close notification" />
    </div>
  </q-banner>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(true)

function close() {
  visible.value = false
}
</script>
