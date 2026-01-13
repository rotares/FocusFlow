<script setup>
import todoItem from '@/components/todoItem.vue';
import {useTodoStore} from '@/stores/todo'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue';

const store = useTodoStore()

const {todoItems} = storeToRefs(store)

</script>


<template>
  <div class="max-w-2xl mx-auto flex flex-col gap-5">
    <todoItem v-for="item in todoItems" :item="item"></todoItem>
  </div>
</template>

<style scoped>
  
</style>