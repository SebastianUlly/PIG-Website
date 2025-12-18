<template>
  <q-footer class="bg-secondary" elevated>
    <q-toolbar class="q-px-lg">
      <div class="flex" style="width: 100%; justify-content: space-between">
        <div class="flex flex-row justify-center items-center">
          <div>
            <q-btn @click="router.push('/impressum')" flat label="Impressum" class="text-primary" />
          </div>
          <div>
            © Piglmayer {{ new Date().getFullYear() }}
          </div>
        </div>
      </div>
    </q-toolbar>
  </q-footer>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

defineComponent({
  name: 'Footer_comp',
});
</script>
