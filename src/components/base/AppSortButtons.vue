<script setup>
import AppButton from '@/components/base/AppButton.vue'

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
    default: 'all',
  },
  filters: {
    type: Array,
    required: true,
    default() {
      ;[]
    },
  },
})

const emits = defineEmits(['update:modelValue'])

const handleSelect = (filterOption) => {
  emits('update:modelValue', filterOption)
}
</script>

<template>
  <div
    class="flex gap-2 items-center max-[420px]:justify-center bg-slate-800/50 p-1 rounded-lg border border-slate-700/50"
  >
    <AppButton
      @click="handleSelect(filterOption)"
      v-for="filterOption in props.filters"
      :key="filterOption"
      :variant="filterOption === props.modelValue ? 'active' : 'ghost'"
    >
      {{ filterOption }}
    </AppButton>
  </div>
</template>

<style scoped></style>
