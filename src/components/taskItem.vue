<script setup>
import { ref } from 'vue'
import { useTaskStore } from '@/stores/task'

const props = defineProps({
  task: {
    type: Object,
    required: true,
    default: {},
  },
})

const store = useTaskStore()
const { destroyTask } = store
</script>

<template>
  <div
    class="group bg-slate-800/30 hover:bg-slate-800/50 transition-all duration-200 hover:translate-x-1 rounded-2xl border border-slate-800 py-6 px-5"
  >
    <div class="flex gap-10 items-center">
      <input type="checkbox" />
      <span class="grow">{{ task.title }}</span>
      <div class="flex items-center justify-center relative w-10">
        <div
          class="flex items-center gap-1 group-hover:opacity-0 group-hover:invisible transition-all duration-200"
        >
          <span>{{ task.energy }}</span>
          <span>icon</span>
        </div>
        <button
          class="rounded-lg text-slate-500 absolute opacity-0 group-hover:opacity-100 group-hover:visible flex items-center justify-center invisible transition-all duration-200 hover:bg-red-200/20 hover:text-red-500/90 p-3"
          @click="destroyTask(task)"
        >
          <svg
            class="h-5 w-5 fill-current transition-colors duration-200"
            viewBox="0 0 21 21"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.35,16 L9.45,16 L9.45,8 L7.35,8 L7.35,16 Z M11.55,16 L13.65,16 L13.65,8 L11.55,8 L11.55,16 Z M5.25,18 L15.75,18 L15.75,6 L5.25,6 L5.25,18 Z M7.35,4 L13.65,4 L13.65,2 L7.35,2 L7.35,4 Z M15.75,4 L15.75,0 L5.25,0 L5.25,4 L0,4 L0,6 L3.15,6 L3.15,20 L17.85,20 L17.85,6 L21,6 L21,4 L15.75,4 Z"
              transform="translate(0, 0)"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
