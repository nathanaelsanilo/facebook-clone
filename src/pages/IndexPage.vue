<script lang="ts" setup>
import Magnify from "vue-material-design-icons/Magnify.vue";
import TelevisionPlay from "vue-material-design-icons/TelevisionPlay.vue";
import StorefrontOutline from "vue-material-design-icons/StorefrontOutline.vue";
import AccountGroup from "vue-material-design-icons/AccountGroup.vue";
import AccountMultiple from "vue-material-design-icons/AccountMultiple.vue";
import Flag from "vue-material-design-icons/Flag.vue";
import ClockTimeTwoOutline from "vue-material-design-icons/ClockTimeTwoOutline.vue";
import Restore from "vue-material-design-icons/Restore.vue";
import VideoImage from "vue-material-design-icons/VideoImage.vue";
import DotsHorizontal from "vue-material-design-icons/DotsHorizontal.vue";
import MainNavLayout from "../layouts/MainNavLayout.vue";
import CreatePostBox from "../components/CreatePostBox.vue";
import Post from "../components/Post.vue";
</script>

<template>
  <MainNavLayout>
    <div class="fixed w-full h-[100%] bg-[#F1F2F5]">
      <div
        class="grid grid-rows-3 grid-flow-col w-full max-w-[1600px] mt-[56px] h-[calc(100%-56px)] mx-auto px-4"
      >
        <div id="LeftSection" class="xl:w-[345px] lg:block hidden">
          <div class="pt-4 max-w-[320px] pr-4">
            <RouterLink
              to="/"
              class="flex items-center justify-start w-full cursor-pointer hover:bg-[#E5E6E9] p-2 rounded-md"
            >
              <img
                class="rounded-full ml-1 min-w-[38px] max-h-[38px]"
                src="https://picsum.photos/id/1/200/300"
                alt="avatar"
              />
              <div class="text-[15px] text-gray-800 font-extrabold pl-3">
                Nathanael
              </div>
            </RouterLink>
            <button
              class="flex items-center justify-start w-full cursor-pointer hover:bg-[#E5E6E9] px-2 py-1.5 rounded-md"
            >
              <AccountMultiple :size="40" fill-color="#5BD7C6" />
              <div class="text-[15px] text-gray-800 font-extrabold pl-3">
                Friends
              </div>
            </button>
            <button
              class="flex items-center justify-start w-full cursor-pointer hover:bg-[#E5E6E9] px-2 py-1.5 rounded-md"
            >
              <Flag :size="40" fill-color="#F2682C" />
              <div class="text-[15px] text-gray-800 font-extrabold pl-3">
                Pages
              </div>
            </button>
            <button
              class="flex items-center justify-start w-full cursor-pointer hover:bg-[#E5E6E9] px-2 py-1.5 rounded-md"
            >
              <ClockTimeTwoOutline :size="40" fill-color="#21AAFA" />
              <div class="text-[15px] text-gray-800 font-extrabold pl-3">
                Most Recent
              </div>
            </button>
            <button
              class="flex items-center justify-start w-full cursor-pointer hover:bg-[#E5E6E9] px-2 py-1.5 rounded-md"
            >
              <AccountGroup :size="40" fill-color="#20A9FD" />
              <div class="text-[15px] text-gray-800 font-extrabold pl-3">
                Groups
              </div>
            </button>
            <button
              class="flex items-center justify-start w-full cursor-pointer hover:bg-[#E5E6E9] px-2 py-1.5 rounded-md"
            >
              <StorefrontOutline :size="40" fill-color="#48C0D8" />
              <div class="text-[15px] text-gray-800 font-extrabold pl-3">
                Marketplace
              </div>
            </button>
            <button
              class="flex items-center justify-start w-full cursor-pointer hover:bg-[#E5E6E9] px-2 py-1.5 rounded-md"
            >
              <TelevisionPlay :size="40" fill-color="#9739CF" />
              <div class="text-[15px] text-gray-800 font-extrabold pl-3">
                Watch
              </div>
            </button>
            <button
              class="flex items-center justify-start w-full cursor-pointer hover:bg-[#E5E6E9] px-2 py-1.5 rounded-md"
            >
              <Restore :size="40" fill-color="#32B4D0" />
              <div class="text-[15px] text-gray-800 font-extrabold pl-3">
                Memories
              </div>
            </button>
          </div>
        </div>

        <div
          id="PostsSection"
          class="row-span-6 max-w-[600px] lg:mx-0 mx-auto overflow-auto"
        >
          <CreatePostBox
            image="https://picsum.photos/id/1/200/300"
            placeholder="Whats on your mind?"
          />

          <Post />
        </div>

        <div id="RightSection" class="pl-4 md:block hidden">
          <div class="max-w-[340px] min-w-[250px] mx-auto pt-4">
            <div
              class="flex items-center justify-between border-b border-b-gray-300"
            >
              <div class="font-semibold">Contacts</div>
              <div class="flex items-center">
                <div class="p-2 hover:bg-gray-300 rounded-full cursor-pointer">
                  <VideoImage :size="23" fill-color="#050505" />
                </div>
                <div class="p-2 hover:bg-gray-300 rounded-full cursor-pointer">
                  <Magnify :size="23" fill-color="#050505" />
                </div>
                <div class="p-2 hover:bg-gray-300 rounded-full cursor-pointer">
                  <DotsHorizontal :size="23" fill-color="#050505" />
                </div>
              </div>
            </div>
            <div class="h-[calc(100vh-115px)] overflow-auto pt-2">
              <div
                class="flex items-center justify-start cursor-pointer hover:bg-[#E5E6E9] py-2 rounded-md"
              >
                <img
                  src="https://picsum.photos/id/1/200/300"
                  alt="avatar"
                  class="rounded-full ml-1 min-w-[38px] max-h-[38px]"
                />
                <div class="text-[15px] text-gray-800 font-extrabold pl-3">
                  Nathanael
                </div>
              </div>
              <div
                class="flex items-center justify-start cursor-pointer hover:bg-[#E5E6E9] py-2 rounded-md"
              >
                <img
                  src="https://picsum.photos/id/2/200/300"
                  alt="avatar"
                  class="rounded-full ml-1 min-w-[38px] max-h-[38px]"
                />
                <div class="text-[15px] text-gray-800 font-extrabold pl-3">
                  Nathanael
                </div>
              </div>
              <div
                class="flex items-center justify-start cursor-pointer hover:bg-[#E5E6E9] py-2 rounded-md"
              >
                <img
                  src="https://picsum.photos/id/3/200/300"
                  alt="avatar"
                  class="rounded-full ml-1 min-w-[38px] max-h-[38px]"
                />
                <div class="text-[15px] text-gray-800 font-extrabold pl-3">
                  Nathanael
                </div>
              </div>
              <div
                class="flex items-center justify-start cursor-pointer hover:bg-[#E5E6E9] py-2 rounded-md"
              >
                <img
                  src="https://picsum.photos/id/4/200/300"
                  alt="avatar"
                  class="rounded-full ml-1 min-w-[38px] max-h-[38px]"
                />
                <div class="text-[15px] text-gray-800 font-extrabold pl-3">
                  Nathanael
                </div>
              </div>
              <div
                class="flex items-center justify-start cursor-pointer hover:bg-[#E5E6E9] py-2 rounded-md"
              >
                <img
                  src="https://picsum.photos/id/5/200/300"
                  alt="avatar"
                  class="rounded-full ml-1 min-w-[38px] max-h-[38px]"
                />
                <div class="text-[15px] text-gray-800 font-extrabold pl-3">
                  Nathanael
                </div>
              </div>
              <div
                class="flex items-center justify-start cursor-pointer hover:bg-[#E5E6E9] py-2 rounded-md"
              >
                <img
                  src="https://picsum.photos/id/6/200/300"
                  alt="avatar"
                  class="rounded-full ml-1 min-w-[38px] max-h-[38px]"
                />
                <div class="text-[15px] text-gray-800 font-extrabold pl-3">
                  Nathanael
                </div>
              </div>
              <div
                class="flex items-center justify-start cursor-pointer hover:bg-[#E5E6E9] py-2 rounded-md"
              >
                <img
                  src="https://picsum.photos/id/7/200/300"
                  alt="avatar"
                  class="rounded-full ml-1 min-w-[38px] max-h-[38px]"
                />
                <div class="text-[15px] text-gray-800 font-extrabold pl-3">
                  Nathanael
                </div>
              </div>
              <div
                class="flex items-center justify-start cursor-pointer hover:bg-[#E5E6E9] py-2 rounded-md"
              >
                <img
                  src="https://picsum.photos/id/8/200/300"
                  alt="avatar"
                  class="rounded-full ml-1 min-w-[38px] max-h-[38px]"
                />
                <div class="text-[15px] text-gray-800 font-extrabold pl-3">
                  Nathanael
                </div>
              </div>
              <div
                class="flex items-center justify-start cursor-pointer hover:bg-[#E5E6E9] py-2 rounded-md"
              >
                <img
                  src="https://picsum.photos/id/9/200/300"
                  alt="avatar"
                  class="rounded-full ml-1 min-w-[38px] max-h-[38px]"
                />
                <div class="text-[15px] text-gray-800 font-extrabold pl-3">
                  Nathanael
                </div>
              </div>
              <div
                class="flex items-center justify-start cursor-pointer hover:bg-[#E5E6E9] py-2 rounded-md"
              >
                <img
                  src="https://picsum.photos/id/10/200/300"
                  alt="avatar"
                  class="rounded-full ml-1 min-w-[38px] max-h-[38px]"
                />
                <div class="text-[15px] text-gray-800 font-extrabold pl-3">
                  Nathanael
                </div>
              </div>
              <div
                class="flex items-center justify-start cursor-pointer hover:bg-[#E5E6E9] py-2 rounded-md"
              >
                <img
                  src="https://picsum.photos/id/11/200/300"
                  alt="avatar"
                  class="rounded-full ml-1 min-w-[38px] max-h-[38px]"
                />
                <div class="text-[15px] text-gray-800 font-extrabold pl-3">
                  Nathanael
                </div>
              </div>
              <div
                class="flex items-center justify-start cursor-pointer hover:bg-[#E5E6E9] py-2 rounded-md"
              >
                <img
                  src="https://picsum.photos/id/12/200/300"
                  alt="avatar"
                  class="rounded-full ml-1 min-w-[38px] max-h-[38px]"
                />
                <div class="text-[15px] text-gray-800 font-extrabold pl-3">
                  Nathanael
                </div>
              </div>
              <div
                class="flex items-center justify-start cursor-pointer hover:bg-[#E5E6E9] py-2 rounded-md"
              >
                <img
                  src="https://picsum.photos/id/13/200/300"
                  alt="avatar"
                  class="rounded-full ml-1 min-w-[38px] max-h-[38px]"
                />
                <div class="text-[15px] text-gray-800 font-extrabold pl-3">
                  Nathanael
                </div>
              </div>
              <div
                class="flex items-center justify-start cursor-pointer hover:bg-[#E5E6E9] py-2 rounded-md"
              >
                <img
                  src="https://picsum.photos/id/14/200/300"
                  alt="avatar"
                  class="rounded-full ml-1 min-w-[38px] max-h-[38px]"
                />
                <div class="text-[15px] text-gray-800 font-extrabold pl-3">
                  Nathanael
                </div>
              </div>
              <div
                class="flex items-center justify-start cursor-pointer hover:bg-[#E5E6E9] py-2 rounded-md"
              >
                <img
                  src="https://picsum.photos/id/15/200/300"
                  alt="avatar"
                  class="rounded-full ml-1 min-w-[38px] max-h-[38px]"
                />
                <div class="text-[15px] text-gray-800 font-extrabold pl-3">
                  Nathanael
                </div>
              </div>
              <div
                class="flex items-center justify-start cursor-pointer hover:bg-[#E5E6E9] py-2 rounded-md"
              >
                <img
                  src="https://picsum.photos/id/16/200/300"
                  alt="avatar"
                  class="rounded-full ml-1 min-w-[38px] max-h-[38px]"
                />
                <div class="text-[15px] text-gray-800 font-extrabold pl-3">
                  Nathanael
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainNavLayout>
</template>
