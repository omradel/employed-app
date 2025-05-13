import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our jobs table
export interface Job {
  id: number
  title: string
  company_name: string
  company_logo: string
  location: string
  skills: string[]
  created_at: string
  description: string
  experience_level: string
  job_type: string
  salary_range?: string
  
}

// Jobs API
export const jobsApi = {
  async getAllJobs() {
    const { data, error } = await supabase
      .from('jobs')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data as Job[]
  },

  async getJobById(id: number) {
    const { data, error } = await supabase
      .from('jobs')
      .select('*')
      .eq('id', id)
      .single()
    
    if (error) throw error
    return data as Job
  },

  async searchJobs(query: string) {
    const { data, error } = await supabase
      .from('jobs')
      .select('*')
      .textSearch('title', query)
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data as Job[]
  },

  async filterJobs({ 
    location, 
    experience_level, 
    job_type 
  }: { 
    location?: string
    experience_level?: string
    job_type?: string
  }) {
    let query = supabase.from('jobs').select('*')

    if (location) {
      query = query.eq('location', location)
    }
    if (experience_level) {
      query = query.eq('experience_level', experience_level)
    }
    if (job_type) {
      query = query.eq('job_type', job_type)
    }

    const { data, error } = await query.order('created_at', { ascending: false })
    
    if (error) throw error
    return data as Job[]
  }
} 