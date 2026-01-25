<script setup>
import { ref } from 'vue'
import TaskFormFields from './TaskFormFields.vue'
import TaskModal from './TaskModal.vue'
import AppButton from '@/components/base/AppButton.vue'
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
      <AppButton v-if="!showModal" :variant="'active'" class="px-12 py-4" @click="showModal = true">
        +
      </AppButton>
      <TaskModal v-model="showModal" />
    </div>
  </div>
</template>

<style scoped></style>
