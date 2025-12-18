<!-- <template>
  <div class="grid-container q-mt-xl">
    <template v-if="relatedFiles.length > 0">
      <div class="row q-col-gutter-md justify-center q-mb-xl">
        <div v-for="(file, index) in relatedFiles" :key="index" class="grid-item col-6 col-sm-4 col-md-3">
          <imagePreview :id="file.id" :title="file.headline" :image="file.image" />
        </div>
      </div>
    </template>
  </div>
</template> -->

<template>
  <div class="masonry">
    <q-card v-for="img in relatedFiles" :key="img.id" class="masonry-item" @click="() => router.push(`/${img.id}`)">
      <q-img :src="img.image" spinner-color="primary" class="shadow-4 cursor-pointer">
      </q-img>
    </q-card>
  </div>
</template>
<script setup lang="ts">
// import imagePreview from './imagePreview.vue';
import { useRouter } from 'vue-router';
const router = useRouter();

interface RelatedFile {
  id: string;
  title: string;
  image: string;
  text: string;
}

defineProps<{
  relatedFiles: RelatedFile[];
}>();
</script>

<style lang="scss" scoped>
// .grid-container {
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 0 16px;
// }

// .grid-item {
//   transition: transform 0.2s ease, box-shadow 0.2s ease;
//   margin: 0 auto;
// }

// @media (pointer: fine) {

//   .grid-item:hover,
//   .grid-item:focus-within {
//     transform: translateY(-4px);
//   }
// }


.masonry {
  column-gap: 16px;
  column-count: 2;
  /* mobile */
}

@media (min-width: 600px) {
  .masonry {
    column-count: 2;
  }
}

@media (min-width: 1024px) {
  .masonry {
    column-count: 5;
  }
}

@media (min-width: 1440px) {
  .masonry {
    column-count: 4;
  }
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 16px;
  border-radius: 0;
  transition: transform .15s ease, box-shadow .15s ease;
}

.masonry-item:hover {
  transform: translateY(-2px);
}
</style>
