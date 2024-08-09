<script lang="ts" setup>
import VideoImage from "vue-material-design-icons/VideoImage.vue";
import Image from "vue-material-design-icons/Image.vue";
import EmoticonOutline from "vue-material-design-icons/EmoticonOutline.vue";
import { toRefs } from "vue";
import { useGeneralStore } from "../stores/general";
import { storeToRefs } from "pinia";

const props = defineProps({
  image: String,
  placeholder: String,
});
const { image, placeholder } = toRefs(props);
const useGeneral = useGeneralStore();
const { isPostOverlay } = storeToRefs(useGeneral);
</script>

<template>
  <div
    id="CreatePostBox"
    class="w-full bg-white rounded-lg px-3 mt-4 shadow-md"
  >
    <div class="flex items-center py-3 border-b">
      <RouterLink to="/" class="mr-2">
        <img
          :src="image"
          alt="avatar"
          class="rounded-full ml-1 min-w-[36px] max-h-[36px]"
        />
      </RouterLink>
      <div
        @click="isPostOverlay = true"
        class="flex items-center justify-start bg-[#EFF2F5] p-2 rounded-full w-full cursor-pointer"
      >
        <div class="text-left pl-2">
          {{ placeholder }}
        </div>
      </div>
    </div>

    <div class="flex items-center py-3 border-b">
      <button
        class="flex items-center justify-center p-1 hover:bg-[#F2F2F2] w-full rounded-lg mx-1 cursor-pointer"
      >
        <VideoImage :size="35" fill-color="#F12848" />
        <div class="text-[#6F7275] font-bold">Live Video</div>
      </button>
      <button
        class="flex items-center justify-center p-1 hover:bg-[#F2F2F2] w-full rounded-lg mx-1 cursor-pointer"
      >
        <Image :size="35" fill-color="#43BE62" />
        <div class="text-[#6F7275] font-bold">Photo/Video</div>
      </button>
      <button
        class="flex items-center justify-center p-1 hover:bg-[#F2F2F2] w-full rounded-lg mx-1 cursor-pointer"
      >
        <EmoticonOutline :size="35" fill-color="#F8B927" />
        <div class="text-[#6F7275] font-bold">Feeling/activity</div>
      </button>
    </div>
  </div>
</template>
