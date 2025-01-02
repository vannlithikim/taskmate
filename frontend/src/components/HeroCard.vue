<template>
  <!-- Hero Image Card -->
  <div class="relative w-full h-64">
    <img
      class="w-full h-full object-cover"
      :src="Background"
      alt="Cover Image" />

    <div class="absolute bottom-0 left-0 flex pl-4 py-4">
      <h1 class="text-white text-2xl font-semibold">Untitled Project</h1>
    </div>
  </div>

  <!-- Content Below the Image -->
  <div class="px-6 py-4">
    <!-- Notion-like header with Date, Priority, and Name stacked vertically -->
    <div class="flex flex-col mb-4 space-y-2">
      <!-- Date Section with Title -->
      <div class="flex items-center gap-4">
        <span class="text-sm text-gray-600">Due Date</span>
        <span class="text-sm font-semibold text-gray-600">21 12 2024</span>
      </div>

      <!-- Priority Section with Title -->
      <div class="flex items-center gap-8">
        <span class="text-sm text-gray-600">Priority</span>
        <span class="text-sm text-yellow-500 font-semibold">High Priority</span>
      </div>

      <!-- Task Title Section with Title -->
      <div class="flex items-center gap-12">
        <span class="text-sm text-gray-600">Tags </span>
        <span class="text-sm font-semibold text-gray-800">Task Title</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import Background from "../assets/imgs/bg.jpg";
</script>

<style lang="scss" scoped></style>
