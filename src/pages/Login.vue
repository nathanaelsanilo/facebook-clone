<script lang="ts" setup>
import GuestLayout from "../layouts/GuestLayout.vue";
import TextInput from "../components/TextInput.vue";
import { reactive, ref } from "vue";
import PrimaryButton from "../components/PrimaryButton.vue";

withDefaults(
  defineProps<{
    canResetPassword: boolean;
    status: string;
  }>(),
  {
    canResetPassword: true,
    status: "",
  }
);

const form = reactive({
  email: "",
  password: "",
  remember: false,
});
const loading = ref(false);
</script>

<template>
  <GuestLayout>
    <form>
      <div>
        <TextInput
          v-model="form.email"
          id="email"
          type="email"
          class="mt-1 block w-full"
          required
          autofocus
          autocomplete="username"
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
          autocomplete="current-password"
          placeholder="Password"
        />
      </div>

      <div class="flex items-center justify-center pt-4">
        <PrimaryButton
          class="w-full"
          :class="{ 'opacity-25': loading }"
          :disabled="loading"
        >
          Log in
        </PrimaryButton>
      </div>

      <div class="flex items-center justify-center my-5">
        <RouterLink
          v-if="canResetPassword"
          to="/"
          class="hover:underline font-bold text-blue-500 focus:outline-non focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Forgotten password?
        </RouterLink>
      </div>
      <div class="border-b border-b-gray-200"></div>
      <div class="flex items-center justify-center pt-6 pb-2">
        <RouterLink
          to="/register"
          class="px-5 py-3 text-white bg-[#42B729] hover:bg-[#37A621] text-[20px] font-bold rounded-lg"
        >
          Create new account
        </RouterLink>
      </div>
    </form>
  </GuestLayout>
</template>
