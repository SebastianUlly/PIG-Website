<template>
  <!-- <q-layout view="hHh lpR fFf"> -->

  <!-- SIDE MENU / DIRECTORY -->
  <q-drawer v-model="drawer" side="right" overlay bordered>
    <q-list>
      <q-item-label header>Navigation</q-item-label>

      <!-- <DirectoryNode v-for="node in props.nodes" :key="node.id" :node="node" @navigate="onNavigate" /> -->
      <div v-for="node in newMenuItems" :key="node.id">
        <q-expansion-item v-if="node.children && node.children.length" :label="node.name" expand-separator dense>
          <div v-for="child in node.children" :key="child.id">
            <!-- <q-expansion-item v-if="node.children.length" :label="node.name" expand-separator dense> -->
            <q-item v-if="child.path" clickable v-ripple @click="navigate(child.path)" dense>
              <q-item-section>
                {{ child.name }}
              </q-item-section>
            </q-item>
            <!-- </q-expansion-item> -->

            <!-- <q-item v-else clickable v-ripple :disable="!node.path" @click="router.push(node.path)" dense>
                <q-item-section>
                  {{ node.name }}
                </q-item-section>
              </q-item> -->
          </div>
        </q-expansion-item>

        <q-item v-else clickable v-ripple :disable="!node.path" @click="node.path && navigate(node.path)" dense>
          <q-item-section>
            {{ node.name }}
          </q-item-section>
        </q-item>
      </div>
      <q-item clickable v-ripple @click="router.push('/impressum')" dense>
        <q-item-section>
          Impressum
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>

  <!-- PAGE CONTENT -->
  <!-- <q-page-container>
    <router-view />
  </q-page-container> -->

  <!-- BOTTOM MENU BAR -->
  <q-footer elevated class="footer">
    <q-toolbar class="justify-between">

      <!-- Home (left) -->
      <q-btn flat round icon="home" @click="router.push('/')" />

      <!-- Menu (right) -->
      <q-btn flat round icon="menu" @click="drawer = !drawer" />

    </q-toolbar>
  </q-footer>

  <!-- </q-layout> -->
</template>


<script setup lang="ts">
import {
  ref,
  defineComponent,
  watch,
} from 'vue';
import { useRouter } from 'vue-router';
import { useDirectoryStore } from 'src/stores/directory-store';

defineComponent({
  name: 'NavigationBar',
});

const drawer = ref(false)
const router = useRouter();

function navigate(path: string) {
  drawer.value = false
  void router.push(path)
}

const directoryStore = useDirectoryStore();



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
.footer {
  background-color: #ffffff;
  border-top: 1px solid #e0e0e0;
  color: black;
}
</style>
