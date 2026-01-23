<script setup>
import { computed } from 'vue'

  const props = defineProps({
    modelValue: {
      type: String,
      required: true,
      default: 'all'
    },
    filters: {
      type: Array,
      required: true,
      default() {[]}
    },
  })

  const emits = defineEmits(['update:modelValue'])

  const handleSelect = (filterOption) => {
    emits('update:modelValue', filterOption)
  }

  const basicButtonStyles = computed(() => {
    return 'h-11 md:h-9.5 px-2 aspect-square rounded-md cursor-pointer transition-all duration-200'
  })

</script>

<template>
  <div class="flex gap-2 items-center max-[420px]:justify-center bg-slate-800/50 p-1 rounded-lg border border-slate-700/50">
    <button @click="handleSelect(filterOption)" :class="[filterOption === modelValue ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20' : 'text-slate-500 hover:text-slate-300', basicButtonStyles]" v-for="filterOption in props.filters" :key="filterOption" :value="filterOption">
      {{filterOption}}
    </button>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
.v-enter-from {
  opacity: 0;
  transform: translateY(5px);
}
.v-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>