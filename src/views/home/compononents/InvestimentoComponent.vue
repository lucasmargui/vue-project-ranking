<template>

  <v-col cols="4">
    <v-text-field
      dark
      label="Total Investimento"
      @keyup="simulaInvestimento()"
      prefix="R$"
      v-model="investimento"
      color="white"
    ></v-text-field>
  </v-col>
  
  <v-col cols="6">
    <v-btn tile color="primary" @click="$emit('toogle-parametros')">
      <v-icon left> mdi-pencil </v-icon>
      Parâmetros
    </v-btn>
  </v-col>

</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InvestimentoComponent',
  emits: ['toogleParametros'], // Definindo os eventos emitidos
  methods: {
    simulaInvestimento() {
      // Defina sua lógica para simular o investimento aqui
    }
  },
  data() {
    return {
      investimento: '' // Defina um valor inicial para o investimento se necessário
    }
  }
});
</script>

<style>

</style>
