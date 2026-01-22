<script setup>
import TaskList from '@/components/TaskList.vue'
import TaskForm from '@/components/TaskForm.vue'
import { useTaskPersistence } from '@/composables/useTaskPersistence'
import { Clock } from 'lucide-vue-next'

useTaskPersistence()

const today = new Date().toLocaleDateString('en-EN', {
  day: 'numeric',
  month: 'short',
})
</script>

<template>
  <section class="px-6 py-8">
    <div class="max-w-2xl mx-auto">
      <div class="flex justify-between pb-5 text-slate-500">
        <h2 class="text-base">Your Tasks</h2>
        <div class="flex items-center justify-center gap-2 text-xs">
          <Clock size="22" />
          <p>{{ today }}</p>
        </div>
      </div>
      <TaskList></TaskList>
    </div>
  </section>
  <TaskForm></TaskForm>
</template>

<style scoped></style>
