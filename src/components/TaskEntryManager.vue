<script setup>
import { ref } from 'vue'
import TaskFormFields from './TaskFormFields.vue'
import TaskModal from './TaskModal.vue'

const showModal = ref(false)
</script>

<template>
  <div
    class="fixed bottom-0 left-0 right-0 p-6 bg-linear-to-t from-slate-900 via-[#0f172a] to-transparent"
  >
    <div class="hidden md:block">
      <TaskFormFields />
    </div>
    <div class="md:hidden max-w-3xl mx-auto flex">
      <button
        v-if="!showModal"
        class="bg-white duration-500 grow text-slate-950 active:bg-cyan-400 hover:bg-cyan-400 cursor-pointer px-4 py-3 rounded-lg transition-all"
        @click="showModal = true"
      >
        +
      </button>
      <TaskModal v-model="showModal" />
    </div>
  </div>
</template>

<style scoped></style>
