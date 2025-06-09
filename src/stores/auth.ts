export const useAuthStore = defineStore("auth", () => {
  const token = ref<string | null>(null);
  const user = ref<any>(null);

  return {
    token,
  };
});
