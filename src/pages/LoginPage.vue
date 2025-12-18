<template>
  <q-page padding class="flex flex-center login-background">
    <div class="flex flex-center">
      <div class="flex flex-center" style="width: 70%">
        <q-input class="q-mb-lg" outlined v-model="email" label="E-Mail Adresse" style="width: 100%" />
        <q-input class="q-mb-lg" outlined v-model="password" label="Password" type="password" style="width: 100%" />
        <q-btn style="width: 100%" class="bg-primary text-white" no-caps label="Anmelden" @click="handleLogin" />
        <!-- button to switch to registration -->
        <q-btn style="width: 100%" class="bg-primary text-white" no-caps label="Registrieren"
          @click="router.push('/register')" />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Cookies } from 'quasar';
import { useUserStore } from '../stores/user-store';
import { supabase } from 'src/supabase';
import { useRouter } from 'vue-router';

const loading = ref(false)
const email = ref('')
const password = ref('')
const router = useRouter()
const userStore = useUserStore()

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

const handleLogin = async () => {
  try {
    loading.value = true
    const { data, error: signInError } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    if (signInError) throw signInError
    console.log(data)
    Cookies.set('sb-access-token', data.session?.access_token)
    window.localStorage.setItem('sb-access-token', data.session?.access_token);
    userStore.setUser(data.user as User)
    window.location.href = '/';
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message)
    }
  } finally {
    loading.value = false
  }
}





</script>

<style></style>
