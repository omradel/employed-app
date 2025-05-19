<script setup lang="ts">
import JobCard from "./JobCard.vue";
import { useJops } from "@/compasables/jobsLogic";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { computed } from 'vue';


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
} = useJops();

// Make pageNumbers reactive using computed
const pageNumbers = computed(() => 
  Array.from({ length: totalPages.value }, (_, i) => i + 1)
);

</script>

<template>
  <div>
    <!-- Loading Skeletons -->
    <div
      v-if="loading"
      class="flex justify-between p-4 border-b"
      v-for="sketon in 5"
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


      <!-- Pagination Controls -->
      <div class="flex justify-center items-center gap-2 mt-6 pb-4">
        <Button
          variant="outline"
          size="sm"
          :disabled="!canPreviousPage"
          @click="previousPage"
        >
          Previous
        </Button>

        <Button
          v-for="page in pageNumbers"
          :key="page"
          variant="outline"
          size="sm"
          :class="{ 'bg-primary text-white': currentPage === page }"
          @click="goToPage(page)"
        >
          {{ page }}
        </Button>

        <Button
          variant="outline"
          size="sm"
          :disabled="!canNextPage"
          @click="nextPage"
        >
          Next
        </Button>
      </div>
    </div>
  </div>
</template>
