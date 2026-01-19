import { computed } from 'vue'
import { useTaskStore } from '@/stores/task'

export function useColorEnergy() {
  const taskStore = useTaskStore()

  const energyPercentage = computed(() =>
    Math.round((taskStore.getCurrentPower / taskStore.maxPower) * 100),
  )

  const getProgressGradient = computed(() => {
    if (energyPercentage.value >= 90) return 'from-rose-600 to-rose-400'
    if (energyPercentage.value >= 70) return 'from-orange-500 to-orange-300'
    return 'from-blue-600 to-cyan-400'
  })

  const getEnergyColor = computed(() => {
    if (energyPercentage.value >= 90) return 'text-rose-500'
    if (energyPercentage.value >= 70) return 'text-orange-400'
    return 'text-cyan-400'
  })

  return {
    energyPercentage,
    gradientBar: getProgressGradient,
    energyColor: getEnergyColor,
  }
}
