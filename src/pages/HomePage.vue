<script setup>
import TaskList from '@/components/TaskList.vue'
import TaskForm from '@/components/TaskForm.vue'
import { useTaskPersistence } from '@/composables/useTaskPersistence'

useTaskPersistence()
</script>

<template>
  <div class="px-6 py-12">
    <TaskList></TaskList>
  </div>
  <TaskForm></TaskForm>
</template>

<style scoped></style>
