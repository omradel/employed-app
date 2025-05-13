<script setup lang="ts">
import JobCard from '@/components/JobCard.vue'
import MultiApplyCard from '@/components/MultiApplyCard.vue'

const exampleJob = {
  companyLogo: 'https://placehold.co/100x100',
  jobTitle: 'Senior Front-End Developer - Angular',
  companyName: 'INVENTO',
  location: 'Maadi, Cairo',
  timeAgo: '6 days ago',
  skills: ['Experienced (Non-Manager)', '4-8 Yrs of Exp', 'Angular', 'front-end', 'Design', 'Computer Science', 'Bootstrap', 'CSS3', 'Information Technology (IT)', 'IT/Software Development']
}

const jobs = [
  exampleJob,
  exampleJob,
  exampleJob,
  exampleJob,
  exampleJob,
  exampleJob,
  exampleJob,
  exampleJob,
  exampleJob,
  exampleJob,
  exampleJob,
]

</script>

<template>
  <div class="max-w-7xl mx-auto py-6 px-4">
    <h1 class="text-2xl font-bold">Explore New Career Opportunities</h1>
    <div class="grid grid-cols-12 gap-4 mt-6">
      <div class="jobs-list-card  border-2 col-span-8">
        <div class="card-header pt-0 pb-0 bg-secondary flex items-center">
          <div class=" flex gap-x-2 items-center py-4 px-3 bg-white cursor-pointer border-r">
            <img src="@/assets/images/star.svg" alt="star" class="w-5 h-5">
            <span class="text-sm font-medium ">Recommended Jobs</span>
          </div>
          <span class="text-sm font-medium py-3 px-3 cursor-pointer">Outside Egypt</span>
        </div>
        
        <JobCard v-for="(job, index) in jobs" :key="index" v-bind="job" :class="{'border-b': index !== jobs.length - 1}" />
      </div>
      
      <div class="col-span-4 space-y-4">
        <MultiApplyCard />
      </div>
    </div>
  </div>
</template>
