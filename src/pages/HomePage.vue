<script setup>
import TaskList from '@/components/TaskList.vue'
import { useTaskPersistence } from '@/composables/useTaskPersistence'
import { Clock } from 'lucide-vue-next'
import { useTaskStore } from '@/stores/task'
import TaskEntryManager from '@/components/TaskEntryManager.vue'
import AppSortButtons from '@/components/ui/AppSortButtons.vue'
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
  <section class="px-6 py-8">
    <div class="max-w-2xl mx-auto">
      <div class="flex justify-between pb-5 text-slate-500 items-center">
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
