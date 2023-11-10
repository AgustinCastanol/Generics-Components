<script setup>
import { ref } from 'vue';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import configProps from './config/dialogGeneric.entity'
const modal = ref(false);
const props = defineProps(configProps)

//configuracion inicial del componente
const config = ref({
  data:[{
    field: 'name',
    value: 'Name',
    type: 'text',
  }],
  breakpoints:"{ '1199px': '75vw', '575px': '90vw' }",
  onSuccess: () => {modal.value = false}
})
//onClick button
const onClick = () => {
  modal.value = true;
}
//onclick success
const onSuccess = props.data?.onSuccess || config.onSuccess
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