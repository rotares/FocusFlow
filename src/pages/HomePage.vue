<script setup>
import TaskList from '@/components/TaskList.vue'
import TaskForm from '@/components/TaskForm.vue'
import { useTaskPersistence } from '@/composables/useTaskPersistence'
import { useColorEnergy } from '@/composables/useColorEnergy'
import { ref } from 'vue'
import { useTaskStore } from '@/stores/task'
import { storeToRefs } from 'pinia'
import { Zap } from 'lucide-vue-next'
import AppEnergyBar from '@/components/ui/AppEnergyBar.vue'

const title = ref('FocusFlow')
const store = useTaskStore()

const { maxPower } = store
const { getCurrentPower } = storeToRefs(store)
useTaskPersistence()
const { energyColor } = useColorEnergy()
</script>

<template>
  <div class="min-h-screen bg-slate-900 text-slate-200 font-sans">
    <header
      class="pt-8 sticky top-0 z-20 bg-[#0f172a]/80 backdrop-blur-xl border-b border-slate-800/50"
    >
      <div class="pb-5 px-6">
        <div class="max-w-2xl mx-auto flex justify-between">
          <h1 class="text-3xl font-bold text-white uppercase italic">{{ title }}</h1>
          <div
            :class="[
              energyColor,
              'transition-all duration-700 flex items-center font-mono gap-2 font-semibold',
            ]"
          >
            <span class="text-nowrap">{{ getCurrentPower }} / {{ maxPower }}</span>
            <Zap class="h-6 w-6 fill-current" />
          </div>
        </div>
      </div>
      <EnergyBar />
    </header>
    <main>
      <div class="px-6 py-12">
        <TaskList></TaskList>
      </div>
      <TaskForm></TaskForm>
    </main>
  </div>
</template>

<style scoped></style>
