<script setup lang="ts">
import Header from "@/components/layout/Header.vue";
</script>

<template>
  <div>
    <Header />
    <main class="bg-secondary">
      <router-view />
    </main>
  </div>
</template>
