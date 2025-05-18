<script setup lang="ts">
import JobCard from '@/components/JobCard.vue'
import MultiApplyCard from '@/components/MultiApplyCard.vue'
import { useJops } from '@/compasables/jobsLogic'
import { Skeleton } from '@/components/ui/skeleton'

const { jobs, loading, error } = useJops()

</script>

<template>
  <div class="max-w-7xl mx-auto py-6 px-4">
    <h1 class="text-2xl font-bold">Explore New Career Opportunities</h1>
    <div class="grid grid-cols-12 gap-4 mt-6">
      <div class="jobs-list-card  border-2 xl:col-span-8 lg:col-span-8 md:col-span-12 col-span-12 bg-white">
        <div class="card-header pt-0 pb-0 bg-secondary flex items-center">
          <div class=" flex gap-x-2 items-center py-4 px-3 bg-white cursor-pointer border-r">
            <img src="@/assets/images/star.svg" alt="star" class="w-5 h-5">
            <span class="text-sm font-medium ">Recommended Jobs</span>
          </div>
          <span class="text-sm font-medium py-3 px-3 cursor-pointer">Outside Egypt</span>
        </div>

        <div v-if="loading"  class="flex justify-between p-4 border-b" v-for="sketon  in 5" :key="sketon">
          <div class="flex flex-col gap-2 w-full">
            <Skeleton class="h-6 w-3/4"/>
            <Skeleton class="h-6 w-1/2  "/>
            <div class="flex flex-col gap-2 mt-5">
              <Skeleton class="h-6 w-3/4"/>
              <Skeleton class="h-6 w-3/4"/>
              <Skeleton class="h-6 w-1/2"/>
            </div>
          </div>
          <Skeleton class="h-[4rem] w-[4rem]"/>
        </div>
        
        <JobCard v-else v-for="(job, index) in jobs" :key="index" v-bind="job" :class="index !== jobs.length - 1 ? 'border-b' : ''"  />
      </div>
      
      <div class="xl:col-span-4 lg:col-span-4 md:col-span-12 col-span-12 space-y-4">
        <MultiApplyCard />
      </div>
    </div>
  </div>
</template>
