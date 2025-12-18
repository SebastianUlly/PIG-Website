<template>
  <q-page class="column items-center q-pa-md">
    <div v-if="result" class="page-container">
      <div class="top">
        <BigTile :id="result.index_page.id" :title="result.index_page.title" :image="result.index_page.image" />
        <Grid2 v-if="result" :relatedFiles="result.index_page.containers?.[0]?.items ?? []" />
      </div>


      <div class="h2_title-container">
        <h2 class="h2_title">
          {{ result.index_page.containers?.[1]?.title }}
        </h2>
        <Grid v-if="result" :relatedFiles="result.index_page.containers?.[1]?.items ?? []" />
      </div>

      <!-- <div class="h2_title-container">
        <h2 class="h2_title">
          {{ result.index_page.containers?.[2]?.title }}
        </h2>
        <Grid v-if="result" :relatedFiles="result.index_page.containers?.[2]?.items ?? []" />
      </div> -->
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { supabase } from 'src/supabase'
import Grid from 'src/components/GridComp.vue'
import Grid2 from 'src/components/Grid2Comp.vue'
import BigTile from 'src/components/BigTile.vue'

interface RelatedFile {
  id: string;
  title: string;
  image: string;
  text: string;
}

interface Startseite {
  index_page: {
    id: string
    title: string
    image: string
    text: string
    containers: Array<{
      id: string
      title: string
      image: string
      items: Array<RelatedFile>
    }>
  }
}

const loading = ref(false)
const result = ref<Startseite>(null as unknown as Startseite)
const error = ref<string | null>(null)

const callEdgeFunction = async () => {
  loading.value = true
  error.value = null
  try {
    const { data, error: fnError } = await supabase.functions.invoke('startseite', {
      body: { foo: 'bar' }
    })

    if (fnError) throw fnError

    result.value = data
  } catch (e: unknown) {
    console.error(e)
    if (e instanceof Error) {
      error.value = e.message
    } else {
      error.value = 'Unknown error'
    }
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  await callEdgeFunction()
})
</script>

<style scoped>
.page-container {
  padding: 40px 0;
  width: 100%;
  max-width: 1200px;
}

.top {
  display: flex;
  justify-content: space-between;
}

@media (max-width: 600px) {
  .top {
    flex-direction: column;
    text-align: center;
    gap: 16px;
  }
}

/* Desktop / default */
.title-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  text-align: left;
  gap: 40px;
}

.titleImage {
  max-width: 35%;
  height: auto;
  margin-top: 30px;
}

.h1_title {
  font-size: 4rem;
  color: #333;
}

.h2_title-container {
  text-align: center;
  margin: 80px auto 0;
}

.h2_title {
  font-size: 3rem;
  font-weight: 600;
  color: #333;
}

/* Mobile: Quasar xs is < 600px */
@media (max-width: 600px) {
  .title-container {
    flex-direction: column;
    text-align: center;
    gap: 16px;
  }

  .titleImage {
    max-width: 80%;
    margin: 16px auto 0;
  }

  .h1_title {
    font-size: 2.2rem;
    line-height: 1.2;
    padding: 0 12px;
  }

  .h2_title {
    font-size: 1.6rem;
    padding: 0 12px;
  }

  .h2_title-container {
    margin-top: 24px;
  }

  .page-container {
    padding: 0 8px;
  }
}
</style>
