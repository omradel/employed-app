<script setup lang="ts">
import JobCard from "./JobCard.vue";
import { useJops } from "@/compasables/jobsLogic";
import { Skeleton } from "@/components/ui/skeleton";
import Pagination from "@/components/ui/Pagination.vue";
import { computed } from "vue";

const {
  jobs,
  loading,
  error,
  currentPage,
  totalPages,
  nextPage,
  previousPage,
  goToPage,
  canNextPage,
  canPreviousPage,
} = useJops(true);
</script>

<template>
  <div>
    <!-- Loading Skeletons -->
    <div
      v-if="loading"
      class="flex justify-between p-4 border-b"
      v-for="sketon in 6"
      :key="sketon"
    >
      <div class="flex flex-col gap-2 w-full">
        <Skeleton class="h-5 w-3/4" />
        <Skeleton class="h-5 w-1/2" />
        <div class="flex flex-col gap-2 mt-5">
          <Skeleton class="h-5 w-3/4" />
          <Skeleton class="h-5 w-3/4" />
          <Skeleton class="h-5 w-1/2" />
        </div>
      </div>
      <Skeleton class="h-[4rem] w-[4rem]" />
    </div>

    <!-- Job Cards -->
    <div v-else>
      <JobCard
        v-for="(job, index) in jobs"
        :key="job.id"
        v-bind="job"
        :class="{ 'border-b': index !== jobs.length - 1 }"
      />

      <!-- Pagination -->
      <Pagination
        :currentPage="currentPage"
        :totalPages="totalPages"
        :nextPage="nextPage"
        :previousPage="previousPage"
        :goToPage="goToPage"
        :canNextPage="canNextPage"
        :canPreviousPage="canPreviousPage"
      />
    </div>
  </div>
</template>
