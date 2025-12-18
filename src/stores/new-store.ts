// version 1.0.0
// Description: (Pinia-)Directory store for managing the data-handling and -manipulation of the directory data.

import { defineStore, acceptHMRUpdate } from 'pinia';

interface Idirectory {
  id: string;
  position: number;
  name?: string;
  children?: Idirectory[];
}

export const useNewStore = defineStore('new', {
  state: () => ({
    teest: [
      {
        name: 'Bilder',
        id: 'bilder',
        position: 1,
        children: [
          {
            name: 'Aquarelle',
            id: 'aquarelle',
            position: 1,
            children: [],
          },
          {
            name: 'Ölgemälde',
            id: 'oelgemaelde',
            position: 2,
            children: [],
          },
        ],
      },
      {
        name: 'Biographie',
        id: 'biographie',
        position: 2,
        children: [
          {
            name: 'Frühe Jahre',
            id: 'fruehe-jahre',
            position: 1,
            children: [],
          },
          {
            name: 'Spätere Jahre',
            id: 'spaetere-jahre',
            position: 2,
            children: [],
          },
        ],
      },
    ] as Idirectory[],
  }),

  getters: {
    getLocalDirectoryFlat(state): Idirectory[] {
      return state.teest;
    },
  },

  actions: {},
});

// enabling hot reloading during development
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useNewStore, import.meta.hot));
}
