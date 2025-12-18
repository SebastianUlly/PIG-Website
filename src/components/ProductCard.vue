<template>
  <q-card class="cursor-pointer image-card shadow-4">
    <q-img class="image shadow-4" :src="image" spinner-color="primary" spinner-size="82px" fit="cover">
    </q-img>
    <div class="box">
      <div class="title text-subtitle1 text-center">
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
  flex-direction: row;
  justify-content: center;
  position: relative;
  height: 206px;
  border: none;
  border-radius: 0;
}

/* Responsive image */
.image {
  width: 80%;
  border-radius: 8px;
  // position: absolute;
  left: 0;
  height: 206px;
}

/* Mobile: allow full width */
@media (max-width: 600px) {
  .image-card {
    width: 100%;
    // max-height: 150px;
    /* let content define height */
    flex-direction: column;
  }

  .image {
    width: 100%;
    /* full width on mobile */
    max-height: 110px;
    /* keep aspect ratio */
    // max-width: 100%;
    border-radius: 0;
    /* optional */
  }
}

.box {
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  // position: absolute;

  @media (max-width: 600px) {
    width: 100%;
    height: 100px;
    /* let content define height */
    // padding: 8px 0;
    border: none;
    border-radius: 0;
  }
}

/* Title area padding adjustments */
.title {
  // position: absolute;
  // margin: -90px auto 0;
  z-index: 2;
  font-size: 1.4rem;
  font-weight: bold;
  color: black;
  background: rgba(211, 211, 211, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  /* vertical */
  justify-content: center;


  @media (max-width: 599px) {
    padding: 6px;
    font-size: 1rem;
    line-height: 1.3rem;
    font-weight: bold;
    color: black;
    background: rgba(211, 211, 211, 0.5);
    width: 100%;
    height: 100%;
  }
}
</style>
