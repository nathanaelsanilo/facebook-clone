<script lang="ts" setup>
import { onMounted, ref } from "vue";

defineProps(["placeholder"]);

const input = ref<HTMLInputElement | null>(null);
const modelValue = defineModel<string>();

onMounted(() => {
  if (input.value?.hasAttribute("autofocus")) {
    input.value.focus();
  }
});

defineExpose({ focus: () => input.value?.focus() });
</script>

<template>
  <input
    ref="input"
    v-model="modelValue"
    :placeholder="placeholder"
    class="border-gray-300 focus:border-indigo-300 focus:ring-indigo-300 rounded-md shadow-sm p-4 text-lg font-semibold"
  />
</template>
