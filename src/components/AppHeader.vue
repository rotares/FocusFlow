<script setup>
import { Zap } from 'lucide-vue-next'
import AppEnergyBar from '@/components/ui/AppEnergyBar.vue'
import { useColorEnergy } from '@/composables/useColorEnergy'
import { ref } from 'vue'
import { useTaskStore } from '@/stores/task'
import { storeToRefs } from 'pinia'

const title = ref('FocusFlow')

const store = useTaskStore()
const { maxPower } = store
const { getCurrentPower } = storeToRefs(store)
const { energyColor, energyPercentage, gradientBar } = useColorEnergy()
</script>

<template>
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
    <AppEnergyBar :gradient="gradientBar" :percentage="energyPercentage" />
  </header>
</template>

<style scoped></style>
