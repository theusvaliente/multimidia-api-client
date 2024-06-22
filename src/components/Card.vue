<template>
  <div class="card">
         <p class="card-title">{{ currency[converted] ? currency[converted].name : '' }}</p>
         <ul class="card-description">
             <li>Moeda Base: {{ currency[converted] ? currency[converted].code : '' }}</li>
             <li>Moeda Referencia: {{ currency[converted] ? currency[converted].codein : '' }}</li>
             <li>Alta da Moeda: {{ currency[converted] ? currency[converted].high : '' }}</li>
    </ul>
     </div>
</template>

<script>
export default {
    name: 'Card',
     props: {
         currency: {
             type: Object,
             required: true
        },
        converted: {
             type: String,
             required: true
        }
    },
}
</script>

<style>
    .lista {
         list-style-type: none
    }
</style>