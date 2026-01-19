<script setup>
import { useTaskStore } from '@/stores/task'
import { Trash2, Zap, Circle, CircleCheck } from 'lucide-vue-next'
import { computed } from 'vue'

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
const { destroyTask, toggleTaskState } = store

const isCompletedTaskStyles = computed(() => {
  return props.task.isCompleted
    ? 'bg-teal-800/45 opacity-60'
    : 'hover:border-slate-700 bg-slate-800/30 hover:bg-slate-800/50'
})
</script>

<template>
  <div
    :class="[
      isCompletedTaskStyles,
      'group border-slate-800 hover:border-slate-700 p-5 duration-300 transition-all rounded-2xl border hover:translate-x-1 ',
    ]"
  >
    <div class="flex gap-2 items-center">
      <button
        class="rounded-full flex items-center justify-center h-13 aspect-square duration-700 transition-all"
        :class="task.isCompleted ? 'text-emerald-400' : 'text-cyan-400'"
        @click="toggleTaskState(task.id)"
      >
        <span class="sr-only">Button to change task status</span>
        <CircleCheck size="27" v-if="task.isCompleted" />
        <Circle size="27" v-else />
      </button>
      <span class="flex grow break-all" :class="{ 'line-through': task.isCompleted }">{{
        task.title
      }}</span>
      <div class="flex items-center justify-center relative gap-2">
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
