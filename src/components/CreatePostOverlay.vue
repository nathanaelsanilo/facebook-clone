<script lang="ts" setup>
import VideoImage from "vue-material-design-icons/VideoImage.vue";
import Image from "vue-material-design-icons/Image.vue";
import EmoticonOutline from "vue-material-design-icons/EmoticonOutline.vue";
import Close from "vue-material-design-icons/Close.vue";
import ChevronDown from "vue-material-design-icons/ChevronDown.vue";
import Earth from "vue-material-design-icons/Earth.vue";
import DotsHorizontal from "vue-material-design-icons/DotsHorizontal.vue";
import { useGeneralStore } from "../stores/general";
import { storeToRefs } from "pinia";
import { reactive, ref } from "vue";

const emits = defineEmits(["showModal"]);
const useGeneral = useGeneralStore();
const { isPostOverlay } = storeToRefs(useGeneral);

const imageDisplay = ref<string | null>("");

const form = reactive({
  text: null,
  image: null,
});

const error = ref(null);

const getUploadedImage = (e: any) => {
  imageDisplay.value = URL.createObjectURL(e.target.files[0]);
  form.image = e.target.files[0];
};

const clearImage = () => {
  imageDisplay.value = null;
  form.image = null;
};
</script>

<template>
  <div
    id="CreatePostOverlay"
    class="fixed z-50 top-0 left-0 w-full h-full bg-white bg-opacity-70"
  >
    <div class="grid h-screen place-items-center p-4">
      <div class="bg-white w-full max-w-[600px] mx-auto shadow-xl rounded-xl">
        <div class="flex items-center relative my-3.5 mx-1">
          <div class="text-[22px] font-extrabold w-full text-center">
            Create post
          </div>
          <div
            class="absolute right-3 rounded-full p-1.5 bg-gray-200 hover:bg-gray-300 cursor-pointer"
            @click="isPostOverlay = false"
          >
            <Close :size="28" fill-color="#5E6771" />
          </div>
        </div>

        <div class="border-t border-t-gray-300">
          <div class="p-4">
            <div class="flex items-center">
              <img
                src="https://picsum.photos/id/189/800/800"
                alt="post overlay image"
                class="rounded-full ml-1 min-w-[45px] max-h-[45px]"
              />
              <div class="ml-4">
                <div class="font-extrabold">Nathanael</div>
                <div
                  class="flex items-center justify-between w-[100px] bg-gray-200 p-0.5 px-2 rounded-lg"
                >
                  <Earth :size="18" />
                  <span class="font-bold pl-1.5 text-[13px]">Public</span>
                  <ChevronDown class="pr-10 pl-1" :size="18" />
                </div>
              </div>
            </div>

            <div class="max-h-[350px] overflow-auto">
              <textarea
                v-model="form.text"
                name="post"
                id="post"
                class="w-full border-0 mt-4 focus:ring-0 text-[22px]"
                placeholder="What's on your mind?"
                cols="30"
                rows="3"
              ></textarea>
              <div
                v-if="form.image"
                class="p-2 border border-gray-300 rounded-lg relative"
              >
                <Close
                  class="absolute bg-white p-0.5 m-2 right-2 rounded-full border cursor-pointer"
                  :size="24"
                  fill-color="#5E6771"
                  @click="clearImage"
                />

                <img
                  :src="imageDisplay ?? ''"
                  alt="display"
                  class="rounded-lg mx-auto"
                />
              </div>
            </div>

            <div
              class="border-2 rounded-xl mt-4 shadow-sm flex items-center justify-between"
            >
              <div class="font-extrabold p-4">Add to your post</div>
              <div class="flex items-center">
                <label
                  for="image"
                  class="hover:bg-gray-200 rounded-full p-2 cursor-pointer"
                >
                  <Image :size="27" fill-color="#43BE62" />
                </label>
                <input
                  id="image"
                  type="file"
                  class="hidden"
                  @input="getUploadedImage"
                />
                <button
                  class="hover:bg-gray-200 rounded-full p-2 cursor-pointer"
                >
                  <EmoticonOutline :size="27" fill-color="#F8B927" />
                </button>
                <button
                  class="hover:bg-gray-200 rounded-full p-2 cursor-pointer"
                >
                  <VideoImage :size="27" fill-color="#F12848" />
                </button>
                <button
                  class="hover:bg-gray-200 rounded-full p-2 cursor-pointer"
                >
                  <DotsHorizontal :size="27" fill-color="#050505" />
                </button>
              </div>
            </div>

            <div v-if="error">
              <div
                class="w-full bg-red-100 text-red-700 rounded-lg mt-3 text-center"
              >
                <div class="p-0 5">
                  {{ error }}
                </div>
              </div>
            </div>

            <button
              class="w-full bg-blue-500 hover:bg-blue-600 text-white font-extrabold p-1.5 mt-3 rounded-lg"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
