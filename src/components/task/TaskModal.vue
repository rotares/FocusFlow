<script setup>
import TaskFormFields from './TaskFormFields.vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
    default: false,
  },
})

const emits = defineEmits(['update:modelValue'])

const close = () => emits('update:modelValue', false)
</script>

<template>
  <Transition tag="div" name="modal">
    <div
      v-if="props.modelValue"
      @click.self="close"
      class="flex modal top-0 bottom-0 right-0 z-10 left-0 bg-red fixed bg-black/60"
    >
      <div class="modal-content m-auto w-4/5">
        <TaskFormFields @success="close" />
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-enter-from {
  opacity: 0;
}
.modal-leave-active,
.modal-enter-active {
  transition: all 0.5s ease-in-out;
}
.modal-enter-to {
  opacity: 1;
}
.modal-leave-to {
  opacity: 0;
}
</style>
