<script setup>
import { useColorEnergy } from '@/composables/useColorEnergy'
const { energyPercentage, gradientBar } = useColorEnergy()
</script>

<template>
  <div class="h-0.75 bg-slate-400/20">
    <div
      :style="{ width: `${energyPercentage}%` }"
      :class="[gradientBar, 'bg-linear-to-r transition-all duration-700 h-full']"
    ></div>
  </div>
</template>

<style scoped></style>
