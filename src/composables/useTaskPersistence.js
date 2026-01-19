import { useTaskStore } from '@/stores/task'
import { watch, onMounted } from 'vue'

export function useTaskPersistence() {
  const taskStore = useTaskStore()

  const loadFromLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem('tasks'))
    if (data !== null && typeof data === 'object' && Object.keys(data).length > 0) {
      taskStore.setTasks(data)
    }
  }

  watch(
    () => taskStore.taskItems,
    (newVal) => {
      const data = JSON.stringify(newVal)
      localStorage.setItem('tasks', data)
    },
    { deep: true },
  )

  onMounted(loadFromLocalStorage)

  return {
    loadFromLocalStorage,
  }
}
