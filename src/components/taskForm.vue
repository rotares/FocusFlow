<script setup>
import { computed, reactive, ref } from 'vue'
import { useTaskStore } from '@/stores/task'
import { storeToRefs } from 'pinia'

const store = useTaskStore()
const powerNums = [1, 2, 3, 4, 5]

const newTask = reactive({
  title: '',
  energy: 1,
})

const { getCurrentPower } = storeToRefs(store)
const { storeTask, maxPower } = store

const onSumbit = () => {
  storeTask(newTask)
  Object.assign(newTask, { title: '', energy: 1 })
}

const isOverflowed = computed(() => getCurrentPower.value + newTask.energy > maxPower)
</script>

<template>
  <div class="fixed bottom-0 left-0 right-0 p-6 bg-linear-to-t from-slate-900 via-[#0f172a] to-transparent">
    <div
      class="max-w-3xl mx-auto"
    >
    <div class="focus-within:border-cyan-500/50 px-6 py-7 mb-2 border bg-slate-900 border-slate-800 rounded-2xl duration-300 transition-all">
      <input
        v-model="newTask.title"
        type="text"
        class="w-full h-11 outline-none placeholder:text-slate-400 text-slate-100"
        placeholder="What are you focusing today?"
      />
      <div class="flex justify-between pt-3">
        <div class="flex items-center bg-slate-800/50 p-1 rounded-lg border border-slate-700/50">
          <button
            @click="newTask.energy = powerNum"
            :class="[
              newTask.energy === powerNum
                ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20'
                : 'text-slate-500 hover:text-slate-300',
              'h-11 md:h-9.5 aspect-square rounded-md cursor-pointer transition-all duration-200',
            ]"
            v-for="powerNum in powerNums"
            :key="powerNum"
          >
            {{ powerNum }}
          </button>
        </div>
        <button
          @click="onSumbit()"
          :class="[
            !newTask.title || isOverflowed
              ? 'bg-slate-800 text-slate-600 cursor-not-allowed'
              : 'bg-white text-slate-950 hover:bg-cyan-400 transition-colors  cursor-pointer',
            'px-4 py-3 rounded-lg transition-all duration-200',
          ]"
          :disabled="!newTask.title || isOverflowed"
        >
          Добавить
        </button>
      </div>
    </div>
    </div>
  </div>
</template>

<style scoped></style>
