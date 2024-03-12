<template>

  <v-col cols="4">
    <v-text-field
      dark
      label="Total Investimento"
      @keyup="atualizarValor"
      prefix="R$"
      v-model="valorLocal"
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
  emits: ['toogleParametros','simula-investimento'], // Definindo os eventos emitidos
  methods:{
    atualizarValor() {
      this.$emit('simula-investimento', this.valorLocal);
    }
  },
   props: {
    valorProp: String
  },
 
 data() {
    return {
      valorLocal: this.valorProp // Defina um valor inicial para o investimento se necessário
    }
  }
});
</script>

<style>

</style>
