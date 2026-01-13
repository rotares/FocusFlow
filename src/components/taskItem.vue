<script setup>
import { ref } from 'vue';
  const props = defineProps({
    task: {
      type: Object,
      required: true,
      default: {}
    }
  })
</script>


<template>
  <div class="bg-slate-800/30 hover:bg-slate-800/50 transition duration-200 hover:translate-x-1  rounded-2xl border border-slate-800 py-3 px-4">
    <div class="flex gap-10 items-center">
      <input type="checkbox">
      <span>{{task.title}}</span>
      <div class="flex ml-auto gap-3 items-center">
        <span>{{task.energy}}</span>
        <span>icon</span>
        <button @click="">
          <svg class="w-10 h-10 stroke-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 10L7.70141 19.3578C7.87432 20.3088 8.70258 21 9.66915 21H14.3308C15.2974 21 16.1257 20.3087 16.2986 19.3578L18 10" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>            
        </button>
      </div>
    </div>
  </div>
</template>


<style scoped>
  
</style>