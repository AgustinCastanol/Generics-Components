<script setup>
import DialogGeneric from './components/DialogGeneric.vue';
import {ref} from 'vue'
const data = ref({
  visible: false,
  header: 'Header',
  onClick: () => {},
  onClose: () => {},
  breakpoints: {
    '960px': '75vw',
    '640px': '100vw'
  },
  customHeader: false,
  layoutHeader: 'dialog-header',
  buttonLabel: 'Open',
  customFooter: false,
  layoutFooter: 'dialog-footer',
  style: {},
  modal: true,
  data:[{
    field: 'field',
    value: 'value',
    type:'text'
  }]
})
</script>

<template>
<DialogGeneric
  :data="data"
  :header="header"
  :breakpoints="breakpoints"
  :customHeader="customHeader"
  :layoutHeader="layoutHeader"
  :buttonLabel="buttonLabel"
  :customFooter="customFooter"
  :layoutFooter="layoutFooter"
  :style="style"
  :modal="modal"
  :visible="visible"
  @click="onClick"
  @close="onClose"
/>
</template>

<style lang="scss">
</style>
