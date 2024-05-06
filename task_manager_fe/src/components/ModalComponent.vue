<template>
    <div v-if="isOpen" class="modal-overlay">
      <div class="modal">
        <header class="modal-header">
          <slot name="header">Default Header</slot>
          <button @click="closeModal" class="modal-close-button">X</button>
        </header>
        <section class="modal-body">
          <slot>Default Body</slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer">Default Footer</slot>
        </footer>
      </div>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue';
  import { useEventListener } from '@vueuse/core';
  
  export default {
    name: 'ModalComponent',
    props: {
      modelValue: {
        type: Boolean,
        required: true,
      },
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
      const isOpen = computed({
        get: () => props.modelValue,
        set: (value) => emit('update:modelValue', value),
      });
  
      const closeModal = () => {
        isOpen.value = false;
      };
  
      useEventListener('click', (event) => {
        if (event.target === event.currentTarget) {
          closeModal();
        }
      });
  
      return {
        isOpen,
        closeModal,
      };
    },
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal {
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    padding: 20px;
    max-width: 80%;
    width: 500px;
  }
  
  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .modal-close-button {
    background-color: transparent;
    border: none;
    font-size: 1.5em;
    cursor: pointer;
  }
  </style>