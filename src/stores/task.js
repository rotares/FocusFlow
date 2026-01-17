import { ref, computed, reactive, onMounted, watch } from 'vue'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', () => {
  const taskItems = ref([])
  const maxPower = 20

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

  const getTasksFromLocalStorage = () => {
    const getJsonTasks = JSON.parse(localStorage.getItem('tasks'))
    if(getJsonTasks !== null && (typeof getJsonTasks === 'object' && Object.keys(getJsonTasks).length > 0)) {
      taskItems.value = getJsonTasks
    }
  }

  const getCurrentPower = computed(() => {
    return taskItems.value.reduce((acc, { energy }) => acc + energy, 0)
  })

  watch(taskItems, (newVal, oldVal) => {
    const setJsonTasks = JSON.stringify(newVal)
    localStorage.setItem('tasks', setJsonTasks)
  }, { deep: true })

  onMounted(getTasksFromLocalStorage)

  return {
    taskItems,
    maxPower,
    getCurrentPower,
    storeTask,
    destroyTask,
  }
})
