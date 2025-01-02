<template>
  <div class="w-64 h-screen bg-slate-100 text-black fixed top-0 left-0 p-5">
    <!-- Header Section -->
    <div class="mb-8 text-3xl font-bold">
      <span class="text-orange-500">Task</span>
      <span class="text-black">Mate</span>
      <p class="text-slate-500 text-sm font-light">Focus.Prioritize.Execute</p>
    </div>

    <!-- Profile Card -->
    <div
      class="max-w-xs w-full flex items-center bg-white rounded-lg shadow-md overflow-hidden px-2 mb-9">
      <img :src="Profile" class="w-10 h-10 rounded-full" alt="Profile Image" />
      <div class="p-3 flex flex-col">
        <h2 class="text-md font-semibold text-gray-800 flex items-center">
          John Doe
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 ml-2 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7" />
          </svg>
        </h2>
        <p class="text-xs text-gray-600">johndoe@example.com</p>
      </div>
    </div>

    <!-- Collapsible Menu Section -->
    <div>
      <!-- Menu Toggle Button -->
      <button
        @click="toggleMenu"
        class="w-full text-left flex items-center hover:text-green-500 mb-4 font-semibold text-lg justify-between">
        <span>Menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <!-- Menu Items, only visible if menu is open -->
      <ul v-if="isMenuOpen" class="space-y-4">
        <li>
          <RouterLink to="/" class="flex items-center hover:text-green-500">
            <HomeIcon class="mr-3 text-gray-600 w-5 h-5" />
            Overview
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/about"
            class="flex items-center hover:text-green-500">
            <BookOpenIcon class="mr-3 text-gray-600 w-5 h-5" />
            Task-Lists
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/services"
            class="flex items-center hover:text-green-500">
            <FolderIcon class="mr-3 text-gray-600 w-5 h-5" />
            Project Overview
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/contact"
            class="flex items-center hover:text-green-500">
            <CalendarIcon class="mr-3 text-gray-600 w-5 h-5" />
            Calendar
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/settings"
            class="flex items-center hover:text-green-500">
            <CogIcon class="mr-3 text-gray-600 w-5 h-5" />
            Settings
          </RouterLink>
        </li>
      </ul>
    </div>

    <!-- Collapsible List Section -->
    <div class="mt-7">
      <!-- List Toggle Button -->
      <button
        @click="toggleList"
        class="w-full text-left flex items-center hover:text-green-500 mb-4 font-semibold text-lg justify-between">
        <span>List</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <!-- List Items, only visible if list is open -->
      <ul v-if="isListOpen" class="space-y-4">
        <li>
          <RouterLink to="/" class="flex items-center hover:text-green-500">
            <span class="mr-3 text-gray-600 text-xl">🏠</span>
            Personal
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/about"
            class="flex items-center hover:text-green-500">
            <span class="mr-3 text-gray-600 text-xl">📚</span>
            Design
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/services"
            class="flex items-center hover:text-green-500">
            <span class="mr-3 text-gray-600 text-xl">📂</span>
            Development
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/contact"
            class="flex items-center hover:text-green-500">
            <span class="mr-3 text-gray-600 text-xl">📅</span>
            Research
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Profile from "../assets/imgs/video-calling.png";
import { RouterLink } from "vue-router";

// Importing the icons from Heroicons v2
import { HomeIcon } from "@heroicons/vue/24/outline";
import { BookOpenIcon } from "@heroicons/vue/24/outline";
import { FolderIcon } from "@heroicons/vue/24/outline";
import { CalendarIcon } from "@heroicons/vue/24/outline";
import { CogIcon } from "@heroicons/vue/24/outline";

// State for managing the visibility of the menu and list
const isMenuOpen = ref(true);
const isListOpen = ref(true);

// Toggle function for opening and closing the menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Toggle function for opening and closing the list
const toggleList = () => {
  isListOpen.value = !isListOpen.value;
};
</script>

<style scoped>
/* Optional: Add some custom styles for transitions or animations */
</style>
