<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const changeLang = () => {
  const newLang = locale.value === "en" ? "ar" : "en";
  locale.value = newLang;
  localStorage.setItem("preferred-language", newLang);
};

onMounted(() => {
  const savedLang = localStorage.getItem("preferred-language") || "en";
  if (savedLang) {
    locale.value = savedLang;
  }
});
</script>

<template>
  <Button variant="outline" size="sm" @click="changeLang">
    {{ locale }}
  </Button>
</template>
