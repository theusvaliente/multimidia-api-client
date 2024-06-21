<template>
  <div class="card">
         <p class="card-title">{{ cambio.name }}</p>
         <ul class="card-description">
             <li>Moeda Base: {{ cambio.code }}</li>
             <li>Moeda Referencia: {{ cambio.codein }}</li>
             <li>Alta da Moeda: {{ cambio.high }}</li>
    </ul>
     </div>
</template>

<script>
export default {
    name: 'Card',
     props: {
         cambio: {
             type: Object,
             required: true
        }
    },
}
</script>

<style>

</style>