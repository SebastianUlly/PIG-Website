<template>
  <q-card class="cursor-pointer image-card no-shadow">
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
defineProps<{
  id: string;
  title: string;
  image: string;
}>();
</script>

<style lang="scss" scoped>
.image-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 0;
}

/* Responsive image */
.image {
  width: 100%;
  border-radius: 8px;
  height: 206px;
  border-radius: 0;
}

/* Mobile: allow full width */
@media (max-width: 600px) {
  .image {
    max-width: 100%;
    height: 30vw;
  }
}

/* Title area padding adjustments */
.title {
  margin: -50px auto 0;
  z-index: 2;
  padding: 20px 0;
  font-size: 1.2rem;
  font-weight: bold;
  color: black;
  background: rgba(211, 211, 211, 0.5);
  width: 80%;


  @media (max-width: 599px) {
    padding: 6px;
    font-size: 1rem;
  }
}

/* Title area padding adjustments */
.button {
  margin: 30px auto 0;
  padding: 10px 10px;
  font-size: 1rem;
  font-weight: bold;
  color: black;
  background: rgba(211, 211, 211, 0.3);
  border: none;
  width: 80%;
  border-radius: 8px;


  @media (max-width: 599px) {
    padding: 6px;
  }
}
</style>
