<template>
  <div class="p-6">
    <!-- Task Cards Container -->
    <div
      class="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <!-- Dynamically Render Task Cards -->
      <div
        v-for="item in tasks"
        :key="item.id"
        :style="{ backgroundColor: getRandomColorWithOpacity() }"
        class="p-6 rounded-lg shadow-md hover:shadow-xl">
        <h3 class="font-semibold text-xl mb-2">{{ item.title }}</h3>
        <p class="text-gray-700 py-4">
          {{ item.descriptions }}
        </p>

        <!-- Action Buttons with Outline Icons -->
        <div class="mt-4 flex justify-end">
          <!-- Edit Button with Custom SVG Icon -->
          <button
            class="p-2 text-blue-500 hover:bg-blue-100 focus:outline-none">
            <!-- Custom Edit SVG Icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-7 h-7">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>
          </button>

          <!-- Delete Button with Custom SVG Icon -->
          <button
            @click="deleteTask(item.id)"
            class="p-2 text-red-500 hover:bg-red-100 focus:outline-none">
            <!-- Custom Delete SVG Icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-7 h-7">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Function to generate random modern color with lower opacity
function getRandomColorWithOpacity() {
  // Generate a random hue (0-360 degrees on the color wheel)
  const hue = Math.floor(Math.random() * 360);

  // Random saturation (60-100% for more vibrant colors)
  const saturation = Math.floor(Math.random() * 40) + 60;

  // Random lightness (40-60% for balanced colors)
  const lightness = Math.floor(Math.random() * 20) + 40;

  // Set the opacity to exactly 30% (0.3)
  return `hsla(${hue}, ${saturation}%, ${lightness}%, 0.3)`;
}

const tasks = ref([]); // Ref to store tasks

// Fetch data from backend on mount
onMounted(async () => {
  try {
    const response = await fetch("http://localhost:3000/api/get-data"); // Fetching from the backend
    const data = await response.json();
    tasks.value = data.data; // The data object will have the 'data' property
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
});

// Function to handle task deletion
const deleteTask = async (taskId) => {
  try {
    // Send a DELETE request to remove the task
    const response = await fetch(
      `http://localhost:3000/api/delete-item/${taskId}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      console.log(`Task with ID: ${taskId} deleted successfully.`);
      // Remove the deleted task from the tasks array to update the UI
      tasks.value = tasks.value.filter((task) => task.id !== taskId);
    } else {
      console.error("Error deleting task:", response.statusText);
    }
  } catch (error) {
    console.error("Error deleting task:", error);
  }
};
</script>

<style scoped lang="scss">
// Custom styles can go here
</style>
