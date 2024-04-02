<script setup lang="ts">
import { useRoute } from "vue-router";
import AdminLayout from "@/views/layout/AdminLayout.vue";
const route = useRoute();
</script>

<template>
  <AdminLayout v-if="route.meta.layout === 'admin'" />
</template>
