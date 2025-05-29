export const useLoadingStore = defineStore("loading", () => {
  const appLoading = ref(true);
  const pageLoading = ref(true);
  const httpCallRunning = ref(false);

  const setAppLoading = (value: boolean) => {
    appLoading.value = value;
  };

  const setPageLoading = (value: boolean) => {
    pageLoading.value = value;
  };

  const setHttpCallRunning = (value: boolean) => {
    httpCallRunning.value = value;
  };

  return {
    appLoading,
    setAppLoading,
    pageLoading,
    setPageLoading,
    httpCallRunning,
    setHttpCallRunning,
  };
});
