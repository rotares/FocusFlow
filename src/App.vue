<script setup>
import taskList from './components/taskList.vue'
import taskForm from './components/taskForm.vue'

import { ref } from 'vue'
import { useTaskStore } from './stores/task'
import { storeToRefs } from 'pinia'

const title = ref('FocusFlow')
const store = useTaskStore()

const { maxPower } = store
const { getCurrentPower } = storeToRefs(store)
</script>

<template>
  <div class="min-h-screen bg-slate-900 text-slate-200 font-sans">
    <header class="pt-5">
      <div class="max-w-2xl mx-auto px-6">
        <div class="flex justify-between">
          <h1 class="text-xl font-bold text-white uppercase italic">{{ title }}</h1>
          <!-- информация про энергию и иконка, например 18/20 -->
          <div class="flex items-center font-mono gap-2">
            <span class="text-nowrap">{{ getCurrentPower }} / {{ maxPower }}</span>
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  opacity="0.1"
                  d="M17.7634 10.7614L17.8704 10.5979C17.9261 10.5129 17.8651 10.4 17.7634 10.4H13.5C13.3817 10.4 13.2857 10.3041 13.2857 10.1857V4.23047V4.21257C13.2857 4.14957 13.2038 4.12513 13.1693 4.17784L7.18868 13.3118L7.10336 13.4421C7.05895 13.51 7.10761 13.6 7.18868 13.6H11.4488H11.5027C11.6196 13.6 11.7143 13.6947 11.7143 13.8116V19.6027C11.7143 19.7205 11.8683 19.7647 11.9328 19.6662L17.7634 10.7614Z"
                  fill="#323232"
                ></path>
                <path
                  d="M17.7634 10.7614L17.8704 10.5979C17.9261 10.5129 17.8651 10.4 17.7634 10.4H13.5C13.3817 10.4 13.2857 10.3041 13.2857 10.1857V4.23047V4.21257C13.2857 4.14957 13.2038 4.12513 13.1693 4.17784L7.18868 13.3118L7.10336 13.4421C7.05895 13.51 7.10761 13.6 7.18868 13.6H11.4488H11.5027C11.6196 13.6 11.7143 13.6947 11.7143 13.8116V19.6027C11.7143 19.7205 11.8683 19.7647 11.9328 19.6662L17.7634 10.7614Z"
                  stroke="#323232"
                  stroke-width="2"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div class="h-2 bg-red-400 mx-auto">
        <!-- здесь будет bar -->
      </div>
    </header>
    <main>
      <div class="px-6 py-12 pb-40">
        <taskList></taskList>
      </div>
      <taskForm></taskForm>
    </main>
  </div>
</template>

<style scoped></style>
