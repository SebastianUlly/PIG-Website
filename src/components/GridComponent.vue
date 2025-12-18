<template>
  <div class="grid-container q-mt-xl">
    <template v-if="relatedFiles.length > 0">
      <div class="row q-col-gutter-md q-mb-xl test">
        <div v-for="(file, index) in relatedFiles" :key="index" class="grid-item col-6 col-md-3">
          <ProductCard v-if="isSmallScreen" :id="file.id" :title="file.title" :image="file.image"
            @click="() => router.push(`/${file.id}`)" />
          <ProductCard2 v-else :id="file.id" :title="file.title" :image="file.image"
            @click="() => router.push(`/${file.id}`)" />
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import ProductCard from './ProductCard.vue';
import ProductCard2 from './ProdCard2.vue';
import { useQuasar } from 'quasar';

const router = useRouter();
const isSmallScreen = computed(() => $q.screen.lt.md);
const $q = useQuasar();
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
.grid-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;

  @media (max-width: 599px) {
    width: 100%;
    height: 250px;
    /* remove these (they fight Quasar's row/cols) */
    display: block;
  }
}

.grid-item {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  // margin: 0 auto;
  // width: 300px;
  /* keep desktop exactly like you had */
}

/* Hover only for mouse */
@media (pointer: fine) {

  .grid-item:hover,
  .grid-item:focus-within {
    transform: translateY(-4px);
  }
}

/* Mobile: 2-up, equal size */
@media (max-width: 599px) {
  .grid-container {
    padding: 0 8px;
  }

  .grid-item {
    width: 50%;
    /* fill its col-6 */
    margin: 0;
    /* don’t center, let grid align */
    max-width: 50%;
    /* don’t constrain */
  }
}
</style>
