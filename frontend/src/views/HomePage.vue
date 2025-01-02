<template>
  <div class="flex h-screen">
    <!-- Sidebar (NavBar) -->
    <NavBar class="w-64 h-full fixed" />
    <!-- Main Content (Starts after the sidebar) -->
    <div class="flex-1 ml-64">
      <HeroCard />
      <AddTask />
      <TodoCard />
    </div>
  </div>
</template>

<script setup>
import HeroCard from "@/components/HeroCard.vue";
import AddTask from "@/components/AddTask.vue";
import TodoCard from "@/components/TodoCard.vue";
</script>

<style scoped></style>
