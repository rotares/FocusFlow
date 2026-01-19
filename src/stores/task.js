import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', () => {
  const taskItems = ref([])
  const maxPower = 20

  const setTasks = (tasks) => {
    taskItems.value = tasks
  }

  const storeTask = (task) => {
    const newTask = {
      id: Date.now(),
      isCompleted: false,
      ...task,
    }
    taskItems.value.push(newTask)
    return newTask
  }

  const destroyTask = (task) => {
    taskItems.value = taskItems.value.filter((t) => t.id !== task.id)
    return task
  }

  const getCurrentPower = computed(() => {
    return taskItems.value.reduce((acc, { energy }) => acc + energy, 0)
  })

  return {
    taskItems,
    maxPower,
    getCurrentPower,
    storeTask,
    destroyTask,
    setTasks,
  }
})
