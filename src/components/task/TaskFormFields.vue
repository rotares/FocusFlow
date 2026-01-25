<script setup>
import { computed, reactive } from 'vue'
import { useTaskStore } from '@/stores/task'
import { storeToRefs } from 'pinia'

const emits = defineEmits(['success'])

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
  emits('success', false)
}

const isOverflowed = computed(() => getCurrentPower.value + newTask.energy > maxPower)
</script>

<template>
  <div
    class="w-full md:max-w-3xl mx-auto focus-within:border-cyan-500/50 px-6 py-7 mb-2 border bg-slate-900 border-slate-800 rounded-2xl duration-300 transition-all"
  >
    <input
      v-model="newTask.title"
      type="text"
      class="w-full h-11 outline-none placeholder:text-slate-400 text-slate-100"
      placeholder="What are you focusing today?"
    />
    <div class="flex max-[400px]:gap-y-2 max-[420px]:flex-col justify-between pt-3 gap-4">
      <div
        class="flex items-center max-[420px]:justify-center bg-slate-800/50 p-1 rounded-lg border border-slate-700/50"
      >
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
            : 'bg-cyan-400 md:bg-white text-slate-950 active:bg-cyan-400 hover:bg-cyan-400 transition-colors  cursor-pointer',
          'px-12 py-3 rounded-lg transition-all duration-200',
        ]"
        :disabled="!newTask.title || isOverflowed"
      >
        +
      </button>
    </div>
  </div>
</template>

<style scoped></style>
