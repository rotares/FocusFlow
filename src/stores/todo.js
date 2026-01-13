import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', () => {

  //хардкод постов 
  const todoItems = ref([
    {
      id: 1,
      title: 'title',
      isCompleted: false,
      energy: 1
    },
    {
      id: 2,
      title: 'title',
      isCompleted: false,
      energy: 12
    }
  ])

  //энергия
  const power = reactive({
    maxPower: 20,
    currentPower: 0
  })

  return {
    todoItems,
    power
  }
})
