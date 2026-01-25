import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', () => {
  const taskItems = ref([])
  const maxPower = 20
  const currentFilter = ref('all')

  const filters = ['all', 'active', 'completed']

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

  const toggleTaskState = (taskId) => {
    const task = taskItems.value.find((t) => t.id === taskId)
    if (task) {
      task.isCompleted = !task.isCompleted
    }
  }

  const getCurrentPower = computed(() => {
    return taskItems.value.reduce((acc, { energy }) => acc + energy, 0)
  })

  const getFilteredTasks = computed(() => {
    const copy = [...taskItems.value]
    if (currentFilter.value === 'active') return copy.filter((t) => !t.isCompleted)
    else if (currentFilter.value === 'completed') return copy.filter((t) => t.isCompleted)
    else return copy
  })

  return {
    taskItems,
    maxPower,
    getCurrentPower,
    filters,
    storeTask,
    destroyTask,
    setTasks,
    toggleTaskState,
    getFilteredTasks,
    currentFilter,
  }
})
