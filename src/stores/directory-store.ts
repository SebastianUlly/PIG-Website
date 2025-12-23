// version 1.0.0
// Description: (Pinia-)Directory store for managing the data-handling and -manipulation of the directory data.

import { defineStore, acceptHMRUpdate } from 'pinia';

interface Idirectory {
  id: string;
  position: number;
  name?: string;
  path?: string;
  children?: Idirectory[];
}

export const useDirectoryStore = defineStore('directory', {
  state: () => ({
    localDirectoryFlat: [
      {
        name: 'Startseite',
        id: 'startseite',
        position: 1,
        path: '/',
        children: [],
      },
      {
        name: 'Biographie',
        id: 'biographie',
        path: '/biographie',
        position: 2,
        children: [],
      },
      {
        name: 'Bilder',
        id: 'bilder',
        path: '',
        position: 3,
        children: [
          {
            name: 'Aquarelle',
            id: 'aquarelle',
            path: '/bilder/aquarelle',
            position: 1,
            children: [],
          },
          {
            name: 'Werbegrafiken',
            id: 'werbegrafiken',
            path: '/bilder/werbegrafiken',
            position: 2,
            children: [],
          },
          {
            name: 'Karikaturen',
            id: 'karikaturen',
            path: '/bilder/karikaturen',
            position: 3,
            children: [],
          },
          {
            name: 'Federzeichnungen',
            id: 'federzeichnungen',
            path: '/bilder/federzeichnungen',
            position: 4,
            children: [],
          },
          {
            name: 'Franz Piglmayer',
            id: 'franz-piglmayer',
            path: '/bilder/franz-piglmayer',
            position: 5,
            children: [],
          },
        ],
      },
    ] as Idirectory[],
  }),

  getters: {
    getLocalDirectoryFlat(state): Idirectory[] {
      return state.localDirectoryFlat;
    },
  },

  actions: {},
});

// enabling hot reloading during development
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useDirectoryStore, import.meta.hot));
}
