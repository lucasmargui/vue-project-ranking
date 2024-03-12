<template>
  <v-container>
        <v-row>
          <v-col cols="12" md="3">
            <v-row>
              <v-col cols="12" md="10">
                <v-select
                  :items="itemspayoff"
                  dark
                  v-model="payoff"
                  label="Payoff"
                  @change="$emit('simula-investimento')"
                ></v-select>
              </v-col>
              <v-col cols="12" md="2">
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on" dark>
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                  </template>
                  <span
                    >Payoff esperado para atingir pontuação máxima em relação ao
                    peso Ex: {{ payoff }} => resultado de {{ payoff }} para
                    1</span
                  >
                </v-tooltip>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="3">
            <v-row>
              <v-col cols="12" md="10">
                <v-select
                  :items="itemsgain"
                  dark
                  v-model="gain"
                  label="Gain %"
                  @change="$emit('simula-investimento')"
                ></v-select>
              </v-col>
              <v-col cols="12" md="2">
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on" dark>
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                  </template>
                  <span
                    >% de gain esperado para atingir pontuação máxima em relação
                    ao peso</span
                  >
                </v-tooltip>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="3">
            <v-row>
              <v-col cols="12" md="10">
                <v-select
                  :items="itemstrades"
                  dark
                  v-model="trades"
                  label="Trades %"
                  @change="$emit('simula-investimento')"
                ></v-select>
              </v-col>
              <v-col cols="12" md="2">
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on" dark>
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                  </template>
                  <span
                    >Trades esperados em relação aos dados analisados para
                    atingir pontuação máxima em relação ao peso. Ex:{{
                      trades
                    }}
                    => {{ trades }}% de trades realizados em relaçao aos dados
                    retornam pontuaçao máxima</span
                  >
                </v-tooltip>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="3">
            <v-row>
              <v-col cols="12" md="10">
                <v-select
                  :items="itemsporcentagem"
                  dark
                  v-model="porcentagem"
                  label="Ganhos em %"
                  @change="$emit('simula-investimento')"
                ></v-select>
              </v-col>
              <v-col cols="12" md="2">
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on" dark>
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                  </template>
                  <span
                    >Ganhos esperados para atingir pontuação máxima em relação
                    ao peso. Ex:{{ porcentagem }} => {{ porcentagem }}% ou mais
                    retornam pontuaçao máxima</span
                  >
                </v-tooltip>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="3">
            <v-row>
              <v-col cols="12" md="10">
                <v-text-field
                  dark
                  v-model="pesopayoff"
                  label="Peso payoff"
                  @keyup="$emit('simula-investimento')"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="2">
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on" dark>
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                  </template>
                  <span
                    >Peso payoff Ex: {{ pesopayoff }} => {{ pesopayoff * 100 }}%
                    de peso no cálculo do score</span
                  >
                </v-tooltip>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="3">
            <v-row>
              <v-col cols="12" md="10">
                <v-text-field
                  dark
                  v-model="pesogain"
                  label="Peso gain"
                  @keyup="$emit('simula-investimento')"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="2">
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on" dark>
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                  </template>
                  <span
                    >Peso gain Ex: {{ pesogain }} => {{ pesogain * 100 }}% de
                    peso no cálculo do score</span
                  >
                </v-tooltip>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="3">
            <v-row>
              <v-col cols="12" md="10">
                <v-text-field
                  dark
                  v-model="pesotrades"
                  label="Peso trades"
                  @keyup="$emit('simula-investimento')"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="2">
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on" dark>
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                  </template>
                  <span
                    >Peso trades Ex: {{ pesotrades }} => {{ pesotrades * 100 }}%
                    de peso no cálculo do score</span
                  >
                </v-tooltip>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="3">
            <v-row>
              <v-col cols="12" md="10">
                <v-text-field
                  dark
                  v-model="pesoporcentagem"
                  label="Peso ganhos"
                  @keyup="$emit('simula-investimento')"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="2">
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on" dark>
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                  </template>
                  <span
                    >Peso ganhos Ex: {{ pesoporcentagem }} =>
                    {{ pesoporcentagem * 100 }}% de peso no cálculo do
                    score</span
                  >
                </v-tooltip>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
import configfiltro from "../../../constants/config_filtro";
import { defineComponent } from 'vue';

export default defineComponent({
  name: "FiltroComponent",
  emits: ['simula-investimento'], // Definindo os eventos emitidos
  data() {
    return {
      payoff: configfiltro.payoff,
      trades: configfiltro.trades,
      porcentagem: configfiltro.porcentagem,
      gain: configfiltro.gain,
      itemspayoff: configfiltro.itemspayoff,
      itemsgain: configfiltro.itemsgain,
      itemstrades: configfiltro.itemstrades,
      itemsporcentagem: configfiltro.itemsporcentagem,
      pesopayoff: configfiltro.pesopayoff,
      pesogain: configfiltro.pesogain,
      pesotrades: configfiltro.pesotrades,
      pesoporcentagem: configfiltro.pesoporcentagem,
      investimento: configfiltro.investimento,
      header: configfiltro.header,
    };
  },

});
</script>

<style>
</style>