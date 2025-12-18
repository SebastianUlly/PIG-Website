import { defineStore, acceptHMRUpdate } from 'pinia';

interface User {
  app_metadata: {
    provider: string;
    providers: string[];
  };
  aud: string;
  confirmed_at: string | null;
  created_at: string;
  email: string;
  email_confirmed_at: string | null;
  id: string;
  last_sign_in_at: string | null;
  phone: string | null;
  updated_at: string;
  user_metadata: {
    user_name?: string;
    avatar_url?: string;
  };
}

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as null | User,
  }),

  getters: {
    getUser: (state) => state.user,
  },

  actions: {
    setUser(userToSet: User) {
      console.log('Setting user in store:', userToSet);
      this.user = userToSet;
    },
  },
});

// enabling hot reloading during development
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
