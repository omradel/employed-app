import { jobsApi, type Job } from '@/lib/supabase'
import { ref , onMounted } from 'vue'

export const useJops = (is_international?: boolean) => {
    const jobs = ref<Job[]>([])
    const loading = ref<boolean>(false)
    const error = ref<string | null>(null)

    const fetchJobs = async () => {
        try {
            loading.value = true;
            const response = await jobsApi.getAllJobs(is_international);
            jobs.value = response;
        } catch (error : any) {
            error.value = error as string;
        } finally {
            loading.value = false;
        }
    }

    onMounted(fetchJobs)

    return {
        jobs,
        loading,
        error,
    }
}
