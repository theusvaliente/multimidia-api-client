<template>
  <div class="card">
         <p class="card-title">{{ gocoffee.nome }}</p>
         <ul class="card-description">
             <li>Aniversario: {{ gocoffee.aniversario }}</li>
             <li>CPF: {{ gocoffee.cpf }}</li>
             <li>Café Preferido: {{ gocoffee.cafepreferido }}</li>
    </ul>
     </div>
</template>

<script>
export default {
    name: 'CardLocal',
     props: {
         gocoffee: {
             type: Object,
             required: true
        }
    },
}
</script>

<style>

</style>