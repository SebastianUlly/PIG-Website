<template>
  <!-- <q-header elevated class="bg-white flex column no-wrap items-center justify-center"
    :style="{ height: headerHeight, transition: 'height 0.5s ease' }"> -->
  <!-- <Transition name="fade"> -->

  <!-- <q-img v-else width="150px" src="/img/signature.webp" alt="Franz Piglmayer" /> -->
  <!-- </Transition> -->
  <!-- <div v-if="!isSmallScreen" class="flex flex-row items-center align-center">
      <q-btn v-for="menuItem in newMenuItems" :key="menuItem.id" flat class="text-secondary q-my-md custom-btn-text"
        :label="menuItem.name" @click="handleItemClick(menuItem)" />
    </div>
    <div v-else style="width: 100%" class="flex justify-between items-center">
      <div class="w-56"></div>
      <q-btn class="q-mr-sm q-my-md text-primary w-56" flat @click="drawer = !drawer" round dense icon="menu" />
    </div>
  </q-header> -->
  <!-- <Transition name="fade">
    <q-img v-if="isScrolled" class="logo_small cursor-pointer" src="/img/signature.webp" alt="Franz Piglmayer Signatur"
      @click="router.push('/')" />
    <q-img v-else width="150px" src="/img/signature.webp" alt="Franz Piglmayer" />
  </Transition> -->
  <q-img class="logo_small cursor-pointer" src="/img/signature.webp" alt="Franz Piglmayer" @click="router.push('/')" />
  <div class="flex flex-row items-center align-center">
    <q-btn v-for="menuItem in newMenuItems" :key="menuItem.id" flat class="text-primary q-my-md custom-btn-text"
      :label="menuItem.name" @click="handleItemClick(menuItem)">
      <q-menu>
        <div v-if="menuItem.children && menuItem.children.length > 0" class="row no-wrap q-pa-sm">
          <q-item v-for="child in menuItem.children" :key="child.id" clickable v-ripple class="text-primary">
            <q-item-section>
              <q-item-label @click="handleItemClick(child)">{{ child.name }}</q-item-label>
            </q-item-section>
          </q-item>
        </div>
      </q-menu>
    </q-btn>
  </div>
</template>
<script setup lang="ts">
import {
  ref,
  computed,
  defineComponent,
  onMounted,
  onUnmounted,
  watch,
} from 'vue';
import { useQuasar } from 'quasar';
import { useRouter, useRoute } from 'vue-router';
import { useDirectoryStore } from 'src/stores/directory-store';

defineComponent({
  name: 'NavigationBar',
});

const $q = useQuasar();
const router = useRouter();
const route = useRoute();
const isSmallScreen = computed(() => $q.screen.lt.md);
const isScrolled = ref(false);
const headerHeight = ref(isScrolled.value ? '70px' : '230px');
const directoryStore = useDirectoryStore();
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

type MenuItem = { id: string; position: number; name?: string; path?: string; children?: MenuItem[] };

function handleItemClick(item: MenuItem) {
  if (item.id && item.path) {
    void router.push(item.path);
  }
}

function handleScroll() {
  isScrolled.value = window.scrollY > 0;
  if (route.path !== '/' && isSmallScreen.value) {
    headerHeight.value = '70px';
  } else {
    headerHeight.value = scrollY > 0 ? '70px' : '230px';
  }
}

watch(
  () => route.path,
  (newPath) => {
    if (isSmallScreen.value) {
      if (newPath !== '/') {
        headerHeight.value = '70px';
      } else {
        headerHeight.value = '230px';
      }
    } else {
      headerHeight.value = '230px';
    }
  }
);

const newMenuItems = ref(directoryStore.localDirectoryFlat);

watch(
  () => directoryStore.localDirectoryFlat,
  (newValue) => {
    /* console.log('watch:', newValue.directory[0].children); */
    if (newValue) {
      newMenuItems.value = newValue;
    }
  },
  { immediate: true }
);

</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.custom-btn-text {
  font-size: 1.4rem;
}

:deep(.q-btn__content) {
  font-size: 1.4rem;
}

:deep(.q-expansion-item__toggle-icon),
:deep(.q-item__label) {
  font-size: 1.4rem;
}

.logo_small {
  width: 200px;
  height: 70px;
  position: absolute;
  left: 10px;
  top: 10px;
  object-fit: contain;
  background: white;
  border-radius: 5px;
  padding: 5px;
}

.text-weight-bold {
  font-weight: 600;
}

.absolute-center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.z-top {
  z-index: 1;
}

.no-pointer-events {
  pointer-events: none;
}

.w-56 {
  width: 56px;
}
</style>
