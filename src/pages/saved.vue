<script setup lang="ts">
import { useFetch } from "@/compasables/reusable/useFetch";
const { refresh, data, loading } = useFetch<any>("test", {
  method: "GET",
});
</script>

<template>
  <h1 class="text-2xl font-bold mb-4">Saved Items</h1>
  <p v-if="loading">Loading...</p>
  <p v-else>{{ data }}</p>
  <Button variant="outline" @click="refresh">Refresh</Button>
</template>
