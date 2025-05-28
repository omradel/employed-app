<template>
  <div>
    <Header />
    <main class="bg-secondary">
      <router-view v-slot="{ Component }" />
    </main>
  </div>
</template>
