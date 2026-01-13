<script setup>
import { ref } from 'vue'
import todoList from './components/todoList.vue';
import { useTodoStore } from './stores/todo';
import { storeToRefs } from 'pinia';

const title = ref('FocusFlow')
const store = useTodoStore()

const {power} = storeToRefs(store)

</script>

<template>
  <div class="min-h-screen bg-slate-900/99 text-slate-200 font-sans">
    <header class="pt-5">
      <div class="max-w-2xl mx-auto px-6">
        <div class="flex justify-between gap-10">
          <h1 class="text-xl font-bold text-white uppercase italic">{{ title }}</h1>
          <!-- информация про энергию и иконка, например 18/20 -->
          <div class="flex items-center gap-2 font-mono">
            <span>{{power.currentPower}} / {{power.maxPower}}</span>
            <span></span>
          </div>
        </div>
      </div>
      <div class="h-2 bg-red-400 mx-auto">
        <!-- здесь будет bar -->
      </div>
    </header>
    <main>
      <div class="px-6 py-12 pb-40">
        <todoList></todoList>
      </div>
    </main>
  </div>
</template>

<style scoped>
</style>
