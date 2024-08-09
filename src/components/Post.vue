<script lang="ts" setup>
import AccountMultiple from "vue-material-design-icons/AccountMultiple.vue";
import ThumbUp from "vue-material-design-icons/ThumbUp.vue";
import Check from "vue-material-design-icons/Check.vue";
import Delete from "vue-material-design-icons/Delete.vue";
import { useGeneralStore } from "../stores/general";
import { storeToRefs } from "pinia";
import { reactive } from "vue";

const useGeneral = useGeneralStore();
const { isImageDisplay } = storeToRefs(useGeneral);
const form = reactive({ comment: null });
</script>

<template>
  <div id="Post" class="w-full bg-white rounded-lg my-4 shadow-md">
    <div class="flex items-center py-3 px-3">
      <button class="mr-2">
        <img
          src="https://picsum.photos/id/1/200/300"
          alt="avatar"
          class="rounded-full ml-1 min-w-[42px] max-h-[42px]"
        />
      </button>
      <div class="flex items-center justify-between p-2 rounded-full w-full">
        <div>
          <div class="font-extrabold text-[15px]">Nathanael</div>
          <div class="flex items-center text-xs text-gray-600">
            14h <AccountMultiple class="ml-1" :size="15" fill-color="#64676B" />
          </div>
        </div>
        <div class="flex items-center">
          <button class="rounded-full p-1.5 cursor-pointer hover:bg-[#F2F2F2]">
            <Delete fill-color="#64676B" />
          </button>
        </div>
      </div>
    </div>
    <div class="px-5 pb-2 text-[17px] font-semibold">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam suscipit
      officiis quibusdam consequatur!
    </div>
    <img
      src="https://picsum.photos/id/189/800/800"
      alt="image-post"
      class="mx-auto cursor-pointer"
    />
    <div id="Likes" class="px-5">
      <div class="flex items-center justify-between py-3 border-b">
        <ThumbUp fill-color="#1D72E2" :size="16" />
        <div class="text-sm text-gray-600 font-semibold">5 comments</div>
      </div>
    </div>

    <div id="Comments" class="px-3">
      <div id="CreateComment" class="flex items-center justify-between py-2">
        <div class="flex items-center w-full">
          <RouterLink to="/" class="mr-2">
            <img
              src="https://picsum.photos/id/189/800/800"
              alt="image-post"
              class="rounded-full ml-1 min-w-[36px] max-h-[36px]"
            />
          </RouterLink>
          <div
            class="flex items-center justify-center bg-[#EFF2F5] p-2 rounded-full w-full"
          >
            <input
              v-model="form.comment"
              placeholder="Write a public comment..."
              type="text"
              class="w-full mx-1 border-none p-0 text-sm bg-[#EFF2F5] placeholder-[#64676B] ring-0 focus:ring-0"
            />
            <button
              type="button"
              class="flex items-center text-sm pl-2 pr-3.5 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-bold"
            >
              <Check fill-color="#FFFFFF" :size="20" /> Send
            </button>
          </div>
        </div>
      </div>

      <div id="Comments" class="max-h-[120px] overflow-auto pb-2 px-4">
        <div class="flex items-center justify-between pb-2">
          <div class="flex items-center w-full mb-1">
            <RouterLink to="/" class="mr-2">
              <img
                src="https://picsum.photos/id/1/200/300"
                alt="avatar"
                class="rounded-full ml-1 min-w-[36px] max-h-[36px]"
              />
            </RouterLink>
            <div class="flex items-center w-full">
              <div
                class="flex items-center bg-[#EFF2F5] text-xs p-2 rounded-lg w-full"
              >
                this is a comment
              </div>
              <button
                class="rounded-full p-1.5 ml-2 cursor-pointer hover:bg-[#F2F2F2]"
              >
                <Delete fill-color="#64676B" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
