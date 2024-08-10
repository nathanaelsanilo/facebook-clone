<script lang="ts" setup>
import { ref } from "vue";
import { CircleStencil, Cropper } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";
import Close from "vue-material-design-icons/Close.vue";
import Plus from "vue-material-design-icons/Plus.vue";

const emits = defineEmits(["showModal"]);
const fileInput = ref(null);
const cropper = ref<any>(null);
const uploadedImage = ref<string | null>(null);
const croppedImageData = ref({
  file: null,
  imageUrl: null,
  heigth: null,
  width: null,
  left: null,
  top: null,
});

const getUploadedImage = (e: any) => {
  const file = e.target.files[0];
  uploadedImage.value = URL.createObjectURL(file);
};

const crop = () => {
  const { canvas } = cropper.value?.getResult();
  croppedImageData.value.imageUrl = canvas.toDataURL();

  emits("showModal", false);
};
</script>

<template>
  <div class="fixed z-50">
    <div class="fixed inset-0 bg-white bg-opacity-60"></div>
    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div class="flex flex-col min-h-full justify-center items-center py-2">
        <div
          class="transform overflow-hidden rounded-lg bg-white shadow-2xl transition-all max-w-xl"
        >
          <div class="flex items-center py-4 border-b border-b-gray-300">
            <div class="text-[22px] font-extrabold w-full text-center">
              Update profile picture
            </div>
            <div
              class="absolute right-3 rounded-full p-1.5 bg-gray-200 hover:bg-gray-300 cursor-pointer"
              @click="emits('showModal', false)"
            >
              <Close :size="28" fill-color="#5E6771" />
            </div>
          </div>

          <div class="flex items-center bg-white px-4 pb-4">
            <div>
              <div class="my-4">
                <label
                  for="image"
                  class="flex items-center justify-center bg-[#E7F3FF] hover:bg-[#DBE7F2] font-bold p-2 rounded-lg text-[#1977F2] w-full cursor-pointer"
                >
                  <Plus :size="20" /> Upload photo
                </label>
                <input
                  type="file"
                  id="image"
                  ref="fileInput"
                  class="hidden"
                  @change="getUploadedImage"
                />
              </div>

              <div class="w-[350px] mx-auto">
                <Cropper
                  class="object-cover"
                  ref="cropper"
                  :stencil-component="CircleStencil"
                  :src="uploadedImage"
                />
              </div>

              <div class="flex gap-4" :class="{ 'pt-4': uploadedImage }">
                <button
                  type="button"
                  class="w-full justify-center rounded-md py-2 text-gray-600 hover:text-gray-800 font-bold hover:shadow-sm hover:bg-gray-200 focus:outline-non focus:ring-0"
                  @click="emits('showModal', false)"
                >
                  Cancel
                </button>
                <button
                  v-if="uploadedImage"
                  type="button"
                  class="w-full rounded-md bg-blue-500 py-2 text-white font-bold shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-0"
                  @click="crop"
                >
                  Crop image
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
