<template>
  <div class="card">
         <p class="card-title">{{ gocoffee.nome }}</p>
         <ul>
             <li class="lista">Aniversario: {{ gocoffee.aniversario }}</li>
             <li class="lista">CPF: {{ gocoffee.cpf }}</li>
             <li class="lista">Café Preferido: {{ gocoffee.cafe_preferido }}</li>
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
    .lista {
         list-style-type: none
    }
</style>