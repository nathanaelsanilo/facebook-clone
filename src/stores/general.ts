import { defineStore } from "pinia";

type State = {
  isPostOverlay: boolean;
  isCropperModal: boolean;
  isImageDisplay: string | null;
};

export const useGeneralStore = defineStore("general", {
  state: (): State => ({
    isPostOverlay: false,
    isCropperModal: false,
    isImageDisplay: null,
  }),
  persist: true,
});
