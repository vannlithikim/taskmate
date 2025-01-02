<template>
  <div class="px-6">
    <!-- Add Task Button with Dropdown Icon -->
    <button
      @click="showModal = true"
      class="flex items-center px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-blue-700 focus:outline-none">
      Add Task
      <!-- Heroicon Arrow Down Icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 ml-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>

    <!-- Modal Popup -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      @click.self="closeModal">
      <div class="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 class="text-xl font-semibold mb-4">Add New Task</h2>
        <input
          v-model="task"
          type="text"
          placeholder="Enter task"
          class="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <div class="flex justify-between">
          <button
            @click="addTask"
            class="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700 focus:outline-none">
            Save
          </button>
          <button
            @click="closeModal"
            class="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 focus:outline-none">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// State for managing modal visibility and task input
const showModal = ref(false);
const task = ref("");

// Function to add task (example placeholder for your task logic)
const addTask = () => {
  if (task.value.trim()) {
    // You can push the task to your task list or do other operations
    console.log("Task added:", task.value);
    closeModal();
  }
};

// Function to close the modal
const closeModal = () => {
  showModal.value = false;
  task.value = ""; // Reset task input field
};
</script>

<style scoped>
/* Optional: Tailwind CSS is already used in the template, no need for custom styles */
</style>
