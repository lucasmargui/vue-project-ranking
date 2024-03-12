<template>
  <v-col cols="12">
    <v-data-table
      height="400px"
      dark
      :headers="headers"
      :items="dataSnapshot"
      :item-key="dataSnapshot.id"
      class="elevation-1"
      :search="search"
      :custom-filter="filterOnlyCapsText"
      fixed-header
    >
      <template v-slot:top>
        <v-text-field
          append-icon="mdi-magnify"
          v-model="search"
          label="Procurar "
          class="mx-4"
        ></v-text-field>
      </template>
      <template v-slot:[`item.src`]="{ item }">
        <v-avatar size="60">
          <img
            :src="require('../../../assets/images/' + item.src)"
            alt="John"
          />
        </v-avatar>
      </template>
      <template v-slot:[`item.gainporcentagem`]="{ item }">
        <p>
          {{ item.gainporcentagem + "%" }}
        </p>
      </template>
      <template v-slot:[`item.lossporcentagem`]="{ item }">
        <p>
          {{ item.lossporcentagem + "%" }}
        </p>
      </template>

      <template v-slot:[`item.profit`]="{ item }">
        <p>
          {{ "R$ " + item.profit }}
        </p>
      </template>
      <template v-slot:[`item.profitporcentagem`]="{ item }">
        <p>
          {{ item.profitporcentagem + "%" }}
        </p>
      </template>

      <template v-slot:[`item.condicao`]="{ item }">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on">
              Estratégia
            </v-btn>
          </template>
          <span>{{ item.condicao }}</span>
        </v-tooltip>
      </template>

      <template v-slot:[`item.score`]="{ item }">
        <v-chip :color="getColor(item.score)" dark>
          {{ item.score }}
        </v-chip>
      </template>
    </v-data-table>
  </v-col>
</template>



<script>
import { defineComponent } from "vue";
import configfiltro from "../../../constants/config_filtro.js";

import util from "../../../utils/utils.js";

export default defineComponent({
  name: "ListComponent",
  data() {
    return {
      search: "",
      headers: configfiltro.headers,
    };
  },
  methods: {
    getColor(score) {
        return util.getColor(score);
    },

    filterOnlyCapsText (value, search) {
      
      return util.filterOnlyCapsText;

  },
},

  props: {
    dataSnapshot: Array,
  },
});
</script>



<style>
</style>
