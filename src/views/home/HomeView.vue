<template>
  <v-container class="white--text white--darken-2">
    <v-row class="text-center" justify="center">
      
     
      <TituloComponent />

      <InvestimentoComponent @toogle-parametros="toogleParametrosScore" />
      
      <FiltroComponent v-if="showScoreParametros === true" />

      <ListComponent  :dataSnapshot="dataSnapshot" />
      
    </v-row>
  </v-container>
</template>

<script>

// import fb from '../firebase.js'
import fb from '../../firebase.js'
import { defineComponent } from 'vue';

import data  from '../../repositories/repositories.js';

import FiltroComponent from './compononents/FiltroComponent.vue';
import InvestimentoComponent from './compononents/InvestimentoComponent.vue';
import TituloComponent from './compononents/TituloComponent.vue';
import ListComponent from './compononents/ListComponent.vue';



export default defineComponent({
  components: { TituloComponent, InvestimentoComponent, FiltroComponent, ListComponent },
  name: 'HomeView',
  data(){
        return {           
            showScoreParametros:false,
            dataSnapshot:[]
        }
    },
    methods: {
       toogleParametrosScore(){
          this.showScoreParametros = !this.showScoreParametros
        },
    },
  
    
    async mounted() {

    //   const docSnap = await fb.getDocs(fb.datacollection);
    //   let list = [];
    //   docSnap.forEach(doc => {
    //     let data = doc.data();
    //     data.estatistica.id = doc.id;
    //     data.estatistica.src = 'BOV_' + data.name +'.png'
    //     data.estatistica.name = data.name
    //     data.estatistica.gainporcentagem = ((data.estatistica.qtdgain / data.estatistica.total)*100).toFixed(2);
    //     data.estatistica.lossporcentagem = ((data.estatistica.qtdloss / data.estatistica.total)*100).toFixed(2);
    //     data.estatistica.profit =  (this.investimento * (data.estatistica.profitporcentagem / 100).toFixed(2)) + this.investimento;  
    //     data.estatistica.profitporcentagem = (data.estatistica.profitporcentagem).toFixed(2);
    //     data.estatistica.score = this.calculoScore(data.estatistica); 

    //     let buysignals = this.getSinals(data.buysignals,'e');
    //     let sellsignals = this.getSinals(data.sellsignals,'e');

    //     data.estatistica.condicao = "SINAL DE COMPRA:"+buysignals+"SINAL DE VENDA:"+sellsignals;
        
    //     list.push(data.estatistica);
    //    console.log(doc.id, '=>', doc.data());
    //   });
    //   this.item = list;
    // 

    this.dataSnapshot = data;
    
    
    },



  

}


);





</script>

<style>


.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;

  margin: auto;
}

h1 {
  text-align: center;
  margin-bottom: 15px;
  margin-top: 25px;
}

h3 {
  text-align: center;
  margin-bottom: 30px;
  margin-top: 60px;
}
</style>