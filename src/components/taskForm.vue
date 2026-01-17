<script setup>
import { reactive } from 'vue'
import { useTaskStore } from '@/stores/task'

const store = useTaskStore()

const newTask = reactive({
  title: '',
  energy: 1,
})

const powerNums = [1, 2, 3, 4, 5]

const { storeTask } = store
</script>

<template>
  <div class="fixed bottom-0 left-0 right-0 max-w-2xl mx-auto px-6">
    <div
      class="focus-within:border-cyan-500/50 px-6 py-8 mb-10 border bg-slate-900 border-slate-800 rounded-2xl duration-300 transition-all"
    >
      <input
        v-model="newTask.title"
        type="text"
        class="w-full px-1 py-1 outline-none placeholder:text-slate-400 text-slate-100"
        placeholder="What are you focusing today?"
      />
      <div class="flex justify-between pt-5">
        <div class="flex items-center bg-slate-800/50 p-1 rounded-lg border border-slate-700/50">
          <button
            @click="newTask.energy = powerNum"
            :class="[
              newTask.energy === powerNum
                ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20'
                : 'text-slate-500 hover:text-slate-300',
              'px-3 py-1 rounded-md cursor-pointer transition-all duration-200',
            ]"
            v-for="powerNum in powerNums"
          >
            {{ powerNum }}
          </button>
        </div>
        <button
          @click="
            () => {
              storeTask({ ...newTask })
              newTask.title = ''
              newTask.energy = 1
            }
          "
          :class="[
            !newTask.title
              ? 'bg-slate-800 text-slate-600 cursor-not-allowed'
              : 'bg-white text-slate-950 hover:bg-cyan-400 transition-colors  cursor-pointer',
            'px-4 py-2 rounded-lg transition-all duration-200',
          ]"
          :disabled="!newTask.title"
        >
          Добавить
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
