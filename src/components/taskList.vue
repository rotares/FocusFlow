<script setup>
import TaskItem from '@/components/TaskItem.vue'
import { useTaskStore } from '@/stores/task'
import { storeToRefs } from 'pinia'

const store = useTaskStore()
const { taskItems } = storeToRefs(store)
</script>

<template>
  <div
    v-if="taskItems.length > 0"
    class="max-w-2xl mx-auto flex flex-col gap-5 pb-45 max-[400px]:pb-60"
  >
    <TaskItem v-for="task in taskItems" :task="task" :key="task.id"></TaskItem>
  </div>
</template>

<style scoped></style>
