<template>
  <q-card class="cursor-pointer image-card" clickable v-ripple @click="() => router.push(`/${id}`)">
    <q-img class="image" :src="image" :ratio="1" spinner-color="primary" spinner-size="82px" fit="cover">
    </q-img>
    <div class="title-container flex justify-center shadow-4">
      <div class="title text-subtitle1 text-center shadow-4">
        {{ title }}
      </div>
    </div>
  </q-card>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
defineProps<{
  id: string;
  title: string;
  image: string;
}>();
</script>

<style lang="scss" scoped>
.image-card {
  transition: transform .15s ease, box-shadow .15s ease;
}

.image-card:hover {
  transform: translateY(-2px);
}

.image-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 400px;
  width: 50%;
  position: relative;
  z-index: 1;

  border: none;
  border-radius: 0;

  @media (max-width: 599px) {
    width: 100%;
    height: 250px;
  }
}

/* Responsive image */
.image {
  width: 100%;
  // max-width: 260px; // good default in your grid, adjust if needed
  border-radius: 8px;
}

/* Mobile: allow full width */
@media (max-width: 600px) {
  .image {
    max-width: 100%;
  }
}

.title {
  bottom: -30px;
  z-index: 2;
  padding: 40px;
  position: absolute;
  font-size: 2rem;
  font-weight: bold;
  color: black;
  background: rgba(211, 211, 211, 0.7);
  width: 80%;

  @media (max-width: 599px) {
    padding: 6px;
    bottom: 0px;
    z-index: 2;
    position: absolute;
    font-size: 1rem;
    font-weight: bold;
    color: black;
    background: rgba(211, 211, 211, 0.7);
    width: 100%;
  }
}
</style>
