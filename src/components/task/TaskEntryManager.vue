<script setup>
import { ref } from 'vue'
import TaskFormFields from './TaskFormFields.vue'
import TaskModal from './TaskModal.vue'
import AppButton from '@/components/base/AppButton.vue'
import { useDevice } from '@/composables/useDevice'
const showModal = ref(false)
const { isMobile } = useDevice()
</script>

<template>
  <div
    class="fixed bottom-0 left-0 right-0 p-6 bg-linear-to-t from-slate-900 via-[#0f172a] to-transparent"
  >
    <div v-if="isMobile" class="max-w-3xl mx-auto flex">
      <AppButton v-if="!showModal" :variant="'active'" class="px-12 py-4" @click="showModal = true">
        +
      </AppButton>
      <TaskModal v-model="showModal" />
    </div>
    <TaskFormFields v-else />
  </div>
</template>

<style scoped></style>
