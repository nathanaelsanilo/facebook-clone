<script lang="ts" setup>
import { reactive, ref } from "vue";
import GuestLayout from "../layouts/GuestLayout.vue";
import TextInput from "../components/TextInput.vue";
import PrimaryButton from "../components/PrimaryButton.vue";

const form = reactive({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
  terms: false,
});
const loading = ref(false);
</script>

<template>
  <GuestLayout>
    <form>
      <div>
        <TextInput
          v-model="form.name"
          id="name"
          type="text"
          class="mt-1 block w-full"
          required
          autofocus
          autocomplete="name"
          placeholder="Name"
        />
      </div>

      <div class="mt-4">
        <TextInput
          v-model="form.email"
          id="email"
          type="email"
          class="mt-1 block w-full"
          required
          autocomplete="email"
          placeholder="Email"
        />
      </div>

      <div class="mt-4">
        <TextInput
          v-model="form.password"
          id="password"
          type="password"
          class="mt-1 block w-full"
          required
          autocomplete="new-password"
          placeholder="Password"
        />
      </div>

      <div class="mt-4">
        <TextInput
          v-model="form.password_confirmation"
          id="password_confirmation"
          type="password"
          class="mt-1 block w-full"
          required
          autocomplete="new-password"
          placeholder="Confirm password"
        />
      </div>

      <div class="flex items-center justify-end mt-4">
        <PrimaryButton
          class="w-full"
          :class="{ 'opacity-25': loading }"
          :disabled="loading"
        >
          Register
        </PrimaryButton>
      </div>

      <div class="flex items-center justify-center mt-4">
        <RouterLink
          to="/login"
          class="hover:underline font-bold text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Log in?
        </RouterLink>
      </div>
    </form>
  </GuestLayout>
</template>
