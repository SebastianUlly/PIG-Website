<template>
  <q-page padding class="flex flex-center login-background">
    <div class="flex flex-center">
      <div class="flex flex-center" style="width: 70%">
        <q-input class="q-mb-lg" outlined v-model="email" label="E-Mail Adresse" style="width: 100%" />
        <q-input class="q-mb-lg" outlined v-model="password" label="Password" type="password" style="width: 100%" />
        <q-btn style="width: 100%" class="bg-primary text-white" no-caps label="Registrieren" @click="handleSignUp" />
        <!-- button to switch to registration -->
        <q-btn style="width: 100%" class="bg-primary text-white" no-caps label="Anmelden"
          @click="router.push('/login')" />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// import { useUserStore } from '../stores/user-store';
import { supabase } from 'src/supabase';
import { useRouter } from 'vue-router';

const loading = ref(false)
const email = ref('')
const password = ref('')
const router = useRouter()
// const userStore = useUserStore()

const handleSignUp = async () => {
  try {
    loading.value = true
    const { error: signUpError } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    });
    if (signUpError) throw signUpError
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
