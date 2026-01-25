<script setup>
import TaskList from '@/components/task/TaskList.vue'
import TaskEntryManager from '@/components/task/TaskEntryManager.vue'
import AppSortButtons from '@/components/base/AppSortButtons.vue'
import { useTaskPersistence } from '@/composables/useTaskPersistence'
import { Clock } from 'lucide-vue-next'
import { useTaskStore } from '@/stores/task'
import { storeToRefs } from 'pinia'

const store = useTaskStore()
const { filters } = store
const { currentFilter } = storeToRefs(store)

useTaskPersistence()

const today = new Date().toLocaleDateString('en-EN', {
  day: 'numeric',
  month: 'short',
})
</script>

<template>
  <section class="px-6 py-10">
    <div class="max-w-2xl mx-auto">
      <div class="flex justify-between pb-10 text-slate-500 items-center">
        <div class="flex flex-col gap-2">
          <h2 class="text-base">Your Tasks</h2>
          <div class="flex items-center justify-start gap-2 text-xs">
            <Clock size="20" />
            <p>{{ today }}</p>
          </div>
        </div>
        <AppSortButtons v-model="currentFilter" :filters="filters" />
      </div>
      <TaskList></TaskList>
    </div>
  </section>
  <TaskEntryManager></TaskEntryManager>
</template>

<style scoped></style>
