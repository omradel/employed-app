<script setup lang="ts">
import router from "./router";

const loading = useLoadingStore();

router.isReady().then(() => {
  loading.setAppLoading(false);
});
</script>

<template>
  <AppLoader />
  <RouterView />
</template>
