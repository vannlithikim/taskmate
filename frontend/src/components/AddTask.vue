<template>
  <div class="px-6">
    <!-- Flex container for the search bar and the add task button -->
    <div class="flex justify-between items-center mb-6">
      <!-- Search Bar -->
      <div class="flex items-center w-3/4 relative">
        <!-- Search Icon inside the input field -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 absolute left-3 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35" />
        </svg>

        <!-- Input field -->
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search tasks..."
          class="pl-10 pr-4 py-2 border border-gray-300 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>

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
    </div>

    <!-- Modal Popup -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      @click.self="closeModal">
      <div class="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 class="text-xl font-semibold mb-4">Add New Task</h2>

        <!-- Title Input -->
        <input
          v-model="taskTitle"
          type="text"
          placeholder="Enter task title"
          class="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />

        <!-- Description Input -->
        <textarea
          v-model="taskDescription"
          placeholder="Enter task description"
          class="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>

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

// State for managing modal visibility and task input fields
const showModal = ref(false);
const taskTitle = ref("");
const taskDescription = ref(""); // New field for description
const searchQuery = ref(""); // State for the search input
const tasks = ref([
  /* Example list of tasks */
]);
const filteredTasks = ref(tasks.value);

// Function to handle search button click (filter tasks based on searchQuery)
const searchTasks = () => {
  // Check for the title before attempting to call toLowerCase
  filteredTasks.value = tasks.value.filter(
    (task) =>
      task.title &&
      task.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
};

const addTask = async () => {
  if (taskTitle.value.trim() && taskDescription.value.trim()) {
    try {
      // Send the task data to the backend (title and description)
      const response = await fetch("http://localhost:3000/api/create-item", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: taskTitle.value,
          descriptions: taskDescription.value, // Sending description as well
        }),
      });

      // Check if the request was successful
      if (response.ok) {
        const result = await response.json();

        // Assuming the response contains the added task in 'data'
        if (result.data) {
          console.log("Task added:", result.data);

          // Immediately add the new task to the tasks array
          tasks.value.push(result.data);

          // Optionally, force reactivity
          tasks.value = [...tasks.value];

          // Reset the input fields and close the modal
          closeModal();
        } else {
          console.error("Invalid task data received:", result.data);
        }
      } else {
        console.error("Error adding task:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding task:", error);
    }
  }
};

// Function to close the modal
const closeModal = () => {
  showModal.value = false;
  taskTitle.value = ""; // Reset task title input field
  taskDescription.value = ""; // Reset task description input field
};
</script>

<style scoped>
/* Optional: Tailwind CSS is already used in the template, no need for custom styles */
</style>
