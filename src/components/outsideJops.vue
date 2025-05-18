<script setup lang="ts">
import JobCard from "./JobCard.vue";
import { useJops } from "@/compasables/jobsLogic";
import { Skeleton } from "@/components/ui/skeleton";

const { jobs, loading, error } = useJops(true);
</script>

<template>
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

  <JobCard
    v-else
    v-for="(job, index) in jobs"
    :key="index"
    v-bind="job"
    :class="index !== jobs.length - 1 ? 'border-b' : ''"
  />
</template>
