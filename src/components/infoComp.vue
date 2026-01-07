<template>
  <q-banner v-if="visible" class="bg-primary text-white q-pa-md" inline-actions>
    <div class="row items-center no-wrap full-width">
      <div class="col">
        Wenn Sie Fotos besitzen, die auf dieser Webseite gezeigt werden sollen, scannen Sie diese bitte <a href="#"
          @click.prevent="redirectToStore">hiermit</a> ein und kontaktieren Sie uns per E-Mail:
        <a href="mailto:kontakt@piglmayer.at">kontakt@piglmayer.at</a>.
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
  const ua = navigator.userAgent || navigator.vendor;
  console.log(ua);
  if (/android/i.test(ua)) {
    window.location.href =
      "https://play.google.com/store/apps/details?id=com.google.android.apps.photos.scanner";
  } else if (/iPad|iPhone|iPod/.test(ua)) {
    window.location.href =
      "https://apps.apple.com/at/app/fotoscanner-von-google-fotos/id1165525994";
  } else {
    // Optional fallback (desktop)
    window.location.href =
      "https://www.google.com/photos/scan/";
  }
}
</script>

<style lang="scss" scoped>
a {
  color: white;
  text-decoration: underline;
}
</style>
