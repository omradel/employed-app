import { jobsApi, type Job, type PaginatedResponse } from "@/lib/supabase";

export const useJops = (is_international?: boolean) => {
  const jobs = ref<Job[]>([]);
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);
  const currentPage = ref<number>(1);
  const limit = ref<number>(6);
  const total = ref<number>(0);
  const totalPages = ref<number>(0);

  const fetchJobs = async (page?: number) => {
    try {
      loading.value = true;
      if (page) {
        currentPage.value = page;
      }

      const response: PaginatedResponse<Job> = await jobsApi.getAllJobs({
        is_international,
        page: currentPage.value,
        limit: limit.value,
      });

      console.log("response", response);

      jobs.value = response.data;
      total.value = response.total;
      totalPages.value = response.totalPages;
    } catch (error: any) {
      error.value = error as string;
    } finally {
      loading.value = false;
    }
  };

  const nextPage = () => {
    if (currentPage.value < totalPages.value) {
      fetchJobs(currentPage.value + 1);
    }
  };

  const previousPage = () => {
    if (currentPage.value > 1) {
      fetchJobs(currentPage.value - 1);
    }
  };

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages.value) {
      fetchJobs(page);
    }
  };

  const canNextPage = computed(() => currentPage.value < totalPages.value);
  const canPreviousPage = computed(() => currentPage.value > 1);

  onMounted(() => {
    fetchJobs();
  });

  return {
    jobs,
    loading,
    error,
    currentPage,
    totalPages,
    total,
    nextPage,
    previousPage,
    goToPage,
    canNextPage,
    canPreviousPage,
  };
};
