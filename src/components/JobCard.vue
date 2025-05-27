<script setup lang="ts">
import { Icon } from "@iconify/vue";
import formatTimeAgo from "@/utils/dateFormate";

defineProps<{
  id: number;
  title: string;
  company_name: string;
  company_logo: string;
  location: string;
  skills: string[];
  created_at: string;
  description: string;
  experience_level: string;
  job_type: string;
  salary_range?: string;
}>();
</script>

<template>
  <article class="bg-white p-4">
    <div class="flex items-start gap-4">
      <div class="flex-1">
        <!-- Job Title and Actions -->
        <h2 class="text-lg font-semibold text-[#073cae] hover:text-purple-800">
          {{ title }}
        </h2>

        <!-- Company Name and Location -->
        <div class="flex items-center gap-2 text-gray-600 mb-3">
          <span class="font-medium text-sm">{{ company_name }}</span>
          <span class="text-gray-400">-</span>
          <span class="flex items-center gap-1 text-sm">
            <Icon icon="mdi:map-marker" class="w-4 h-4" />
            {{ location }}
          </span>
        </div>

        <!-- Skills -->
        <div class="flex flex-wrap gap-2 mb-3">
          <span
            v-for="skill in skills"
            :key="skill"
            class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
          >
            {{ skill }}
          </span>

          <!-- Time Posted -->
          <div class="text-sm text-green-600">
            {{ formatTimeAgo(created_at) }}
          </div>
        </div>

        <div class="flex gap-2 mt-5">
          <Button variant="ghost" size="sm">
            <Icon icon="mdi:bookmark-outline" class="w-5 h-5" />
            <span>Save</span>
          </Button>

          <Button variant="ghost" size="sm">
            <Icon icon="mdi:share-variant-outline" class="w-5 h-5" />
            <span>Share</span>
          </Button>

          <Button variant="ghost" size="sm">
            <Icon icon="mdi:eye-off-outline" class="w-5 h-5" />
            <span>Hide</span>
          </Button>
        </div>
      </div>

      <!-- Company Logo -->
      <img :src="company_logo" class="w-16 h-16 object-contain rounded-0" />
    </div>
  </article>
</template>
