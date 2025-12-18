<template>
  <q-card class="cursor-pointer image-card shadow-4 ratio-card">
    <!-- <q-img class="image" :src="image" fit="contain" spinner-color="primary" spinner-size="82px" /> -->
    <q-img :src="image" fit="cover" class="image" />
  </q-card>
</template>

<script setup lang="ts">
defineProps<{
  id: string;
  image: string;
}>();
</script>

<style lang="scss" scoped>
.image-card {
  display: flex;
  justify-content: center;
}

.ratio-card {
  aspect-ratio: 1 / 1; // square
  display: flex;
  justify-content: center;
  align-items: center;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: contain; // shows full image without cropping
  border-radius: 8px;
  background: #f5f5f5; // optional nice neutral background
}

/* Mobile: allow the image to be a bit wider */
@media (max-width: 600px) {
  .image {
    max-width: 100%; // fully responsive
  }
}
</style>
