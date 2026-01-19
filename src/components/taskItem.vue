<script setup>
import { useTaskStore } from '@/stores/task'
import { Trash2, Zap } from 'lucide-vue-next'

const props = defineProps({
  task: {
    type: Object,
    required: true,
    default() {
      return {}
    },
  },
})

const store = useTaskStore()
const { destroyTask } = store
</script>

<template>
  <div
    class="group hover:border-slate-700 bg-slate-800/30 hover:bg-slate-800/50 transition-all duration-200 hover:translate-x-1 rounded-2xl border border-slate-800 py-5 px-5"
  >
    <div class="flex gap-10 items-center h-9.5">
      <input type="checkbox" />
      <span class="grow">{{ task.title }}</span>
      <div class="flex items-center justify-center relative md:w-10 gap-2">
        <div
          :class="[
            task.energy >= 4
              ? 'border-orange-500/30 text-orange-400 bg-orange-500/5'
              : 'border-slate-700 text-slate-400 bg-slate-800',
            'px-2 py-0.5 border rounded-2xl gap-1 text-md flex items-center md:group-hover:opacity-0 md:group-hover:invisible transition-all duration-200',
          ]"
        >
          <Zap class="w-5 h-5 fill-current" />
          <span>{{ task.energy }}</span>
        </div>
        <button
          class="rounded-lg text-slate-500 md:absolute opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-hover:visible flex items-center justify-center md:invisible transition-all duration-200 hover:bg-red-200/20 hover:text-red-500/90 p-3"
          @click="destroyTask(task)"
        >
          <Trash2 class="w-6.5 h-6.5" />
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
