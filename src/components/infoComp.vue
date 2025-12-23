<template>
  <q-banner v-if="visible" class="bg-primary text-white q-pa-md" inline-actions>
    <div class="row items-center no-wrap full-width">
      <div class="col">
        Falls Sie Bilder von '$Piglmayer' haben und diese uns zusenden möchten dann scannen Sie diese bitte mit der <a
          href="#" @click.prevent="redirectToStore">Fotoscanner
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


function redirectToStore() {
  // const ua = navigator.userAgent || navigator.vendor || window.opera;

  // if (/android/i.test(ua)) {
  window.location.href =
    "https://play.google.com/store/apps/details?id=com.google.android.apps.photos.scanner";
  // } else if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
  //   window.location.href =
  //     "https://apps.apple.com/at/app/fotoscanner-von-google-fotos/id1165525994";
  // } else {
  //   // Optional fallback (desktop)
  //   window.location.href =
  //     "https://www.google.com/photos/scan/";
  // }
}
</script>
