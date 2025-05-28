<script setup lang="ts">
import { Input } from "@/components/ui/input";
import { ref } from "vue";

const search = ref("");
</script>

<template>
  <header class="border-b border-gray-200 bg-white">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex items-center justify-between h-14">
        <div class="flex items-center space-x-8">
          <!-- Logo -->
          <a href="/" class="text-blue-600 font-bold text-2xl">WUZZUF</a>

          <!-- Navigation Links -->
          <nav class="hidden md:flex space-x-8">
            <ul class="list-none flex gap-x-3 items-center">
              <li>
                <a href="/explore" class="text-blue-600 font-medium">EXPLORE</a>
              </li>
              <li>
                <a
                  href="/saved"
                  class="text-gray-600 hover:text-gray-900 font-medium"
                  >SAVED</a
                >
              </li>
              <li>
                <a
                  href="/applications"
                  class="text-gray-600 hover:text-gray-900 font-medium"
                  >APPLICATIONS</a
                >
              </li>
            </ul>
          </nav>
        </div>

        <div class="flex items-center space-x-4">
          <!-- Search Bar -->
          <div class="hidden md:block w-96">
            <Input
              type="search"
              placeholder="Search jobs, companies.."
              class="w-full"
              v-model="search"
            />
          </div>

          <!-- Profile Avatar -->
          <img
            src="@/assets/images/avatar.svg"
            alt="Profile"
            class="h-6 w-6 rounded-full"
          />

          <LangSwitcher />

          {{ $t("auth") }}
        </div>
      </div>
    </div>
  </header>
</template>
