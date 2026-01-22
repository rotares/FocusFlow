<script setup>
import TaskItem from '@/components/TaskItem.vue'
import { useTaskStore } from '@/stores/task'
import { storeToRefs } from 'pinia'
const store = useTaskStore()
const { taskItems } = storeToRefs(store)
</script>

<template>
  <Transition name="taskArea" mode="out-in">
    <TransitionGroup
      v-if="taskItems.length > 0"
      name="taskList"
      tag="ul"
      class="flex flex-col gap-5 pb-45 max-[400px]:pb-60 relative"
    >
      <li v-for="task in taskItems" :key="task.id">
        <TaskItem :task="task"></TaskItem>
      </li>
    </TransitionGroup>
    <div
      v-else
      class="group max-sm:h-40 h-60 xl:h-70 transition-all rounded-2xl flex items-center justify-center border-2 border-dashed border-slate-700"
    >
      <p
        class="group-hover:text-cyan-400 duration-200 text-slate-500 text-base text-shadow-2xs text-shadow-slate-500"
      >
        You have no tasks
      </p>
    </div>
  </Transition>
</template>

<style scoped>
.taskArea-enter-from {
  opacity: 0;
}
.taskArea-enter-to {
  opacity: 1;
  background-color: inherit;
}
.taskArea-enter-active,
.taskArea-leave-active {
  transition: all 0.5s ease;
}
.taskArea-enter-from,
.taskArea-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

.taskList-move {
  opacity: 0;
}
.taskList-move,
.taskList-enter-active,
.taskList-leave-active {
  transition: all 0.5s ease;
}

.taskList-enter-from,
.taskList-leave-to {
  opacity: 0;
}

.taskList-leave-active {
  width: 100%;
  position: absolute;
}
</style>
