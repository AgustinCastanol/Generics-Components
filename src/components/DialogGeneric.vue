<script setup>
import { ref } from 'vue';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';

const modal = ref(false);
const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  visible: {
    type: Boolean,
    required: true
  },
  header:{
    type: String,
    required: false
  },
  onClick: {
    type: Function,
    required: false
  },
  onClose: {
    type: Function,
    required: false
  },
  breakpoints: {
    type: Object,
    required: false
  },
  customHeader:{
    type:Boolean,
    required:false
  },
  buttonLabel:{
    type:String,
    required:false
  },
  customFooter:{
    type:Boolean,
    required:false
  },
  style:{
    type:Object,
    required:false
  },
  modal:{
    type:Boolean,
    required:false
  }
})
const config = ref({
  data:[{
    field: 'name',
    value: 'Name',
    type: 'text',
  }],
  breakpoints:"{ '1199px': '75vw', '575px': '90vw' }",
})
const onClick = () => {
  modal.value = true;
}
console.log(props)
</script>
<template>
  <Button
    v-model:visible="modal"
    :onClick="onClick"
    :label="props.data.buttonLabel||'Open Dialog'"
    />
  <Dialog
    v-model:visible="modal"
    :breakpoints="props.data.breakpoints || config.breakpoints"
    :header="!props.data.customHeader?props.data.header:null"
    v-bind:modal="props.data.modal||true"
    style="{width: 50vw}"
  >
  <template #header v-if="props.data.customHeader">
    <slot name="header"></slot>
  </template>
    <form>
      conttenido
    </form>
  <template #footer v-if="props?.data.customFooter">
    <slot name="footer"></slot>
  </template>
  </Dialog>
</template>