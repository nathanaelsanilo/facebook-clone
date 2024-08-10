<script lang="ts" setup></script>

<template>
  <div class="h-[100vh] flex flex-col items-center pt-[100px] bg-gray-100">
    <div>
      <RouterLink to="/login">
        <img src="/images/FacebookLogo.png" alt="logo" width="200" />
      </RouterLink>
    </div>

    <div
      class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg"
    >
      <slot />
    </div>
  </div>
</template>
