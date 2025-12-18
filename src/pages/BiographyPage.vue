<template>
  <q-page class="column items-center q-pa-md">
    <div v-if="result" class="page-container">
      <div>
        <div class="title-container">
          <h1 class="h1_title">
            {{ result.biographies.title }}
          </h1>
        </div>
      </div>

      <div class="h2_title-container">
        <Grid2 v-if="result" :relatedFiles="result.biographies.items ?? []" />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { supabase } from 'src/supabase'
import Grid2 from 'src/components/GridComponent.vue'

interface RelatedFile {
  id: string;
  title: string;
  image: string;
  text: string;
}

interface Biography {
  biographies: {
    id: string
    title: string
    image: string
    text: string
    items: Array<RelatedFile>
  }
}

const loading = ref(false)
const result = ref<Biography>(null as unknown as Biography)
const error = ref<string | null>(null)

const callEdgeFunction = async () => {
  loading.value = true
  error.value = null
  try {
    const { data, error: fnError } = await supabase.functions.invoke('biographies', {
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
  width: 100%;
  max-width: 1200px;
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
  font-size: 3rem;
  font-weight: 600;
  color: black;
}

.h2_title-container {
  text-align: center;
  margin: 40px auto 0;
}

.h2_title {
  font-size: 2.5rem;
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
    font-size: 2rem;
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
