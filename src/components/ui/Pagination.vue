<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { computed } from 'vue';

const {
    currentPage,
    totalPages,
    nextPage,
    previousPage,
    goToPage,
    canNextPage,
    canPreviousPage
} = defineProps<{
    currentPage: number,
    totalPages: number,
    nextPage: () => void,
    previousPage: () => void,
    goToPage: (page: number) => void,
    canNextPage: boolean,
    canPreviousPage: boolean,
}>()

const pageNumbers = computed(() => 
  Array.from({ length: totalPages }, (_, i) => i + 1)
);
</script>

<template>
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
</template>