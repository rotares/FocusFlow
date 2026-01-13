<script setup>
import taskItem from '@/components/taskItem.vue';
import {useTaskStore} from '@/stores/task'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue';

const store = useTaskStore()
const {taskItems} = storeToRefs(store)

</script>

<template>
  <div class="max-w-2xl mx-auto flex flex-col gap-5">
    <taskItem v-for="task in taskItems" :task="task"></taskItem>
  </div>
</template>

<style scoped>
  
</style>