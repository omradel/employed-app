<script setup lang="ts">
import Recommended from "@/components/recomJops.vue";
import Outside from "@/components/outsideJops.vue";

const currentTab = ref<string>("Recommended");

const tabs: Record<string, Component> = { Recommended, Outside };
</script>

<template>
  <div class="max-w-7xl mx-auto py-6 px-4">
    <h1 class="text-2xl font-bold">Explore New Career Opportunities</h1>
    <div class="grid grid-cols-12 gap-4 mt-6">
      <div
        class="jobs-list-card border-2 xl:col-span-8 lg:col-span-8 md:col-span-12 col-span-12 bg-white"
      >
        <div class="card-header pt-0 pb-0 bg-secondary flex items-center">
          <div
            v-for="(_, tab) in tabs"
            :key="tab"
            @click="currentTab = tab"
            :class="{
              'bg-white border-r': currentTab === tab,
              'border-l': currentTab === 'Outside',
            }"
            class="flex gap-x-2 items-center py-4 px-3 cursor-pointer"
          >
            <img
              v-if="tab === 'Recommended'"
              src="@/assets/images/star.svg"
              alt="star"
              class="w-5 h-5"
            />
            <span class="text-sm font-medium">{{ tab }}</span>
          </div>
        </div>

        <component :is="tabs[currentTab]" />
      </div>

      <div
        class="xl:col-span-4 lg:col-span-4 md:col-span-12 col-span-12 space-y-4"
      >
        <MultiApplyCard />
      </div>
    </div>
  </div>
</template>
