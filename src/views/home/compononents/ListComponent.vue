<template>
  <v-col cols="12">
    <v-data-table
      height="400px"
      dark
      :headers="header"
      :items="dataSnapshot"
      :item-key="dataSnapshot.id"
      class="elevation-1"
      :search="search"
      :custom-filter="filterOnlyCapsText"
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
          <img :src="require('../../../assets/images/' + item.src)" alt="John" />
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

import { defineComponent } from 'vue';
import configfiltro from "../../../constants/config_filtro";

export default defineComponent({
  name: "ListComponent",
  data() {
    return {
      search: "",
      header: configfiltro.header,
    };
  },

  props: {
    dataSnapshot: Array,
  },


  methods: {
        simulaInvestimento: function () {
         
          let newlist = [];
          this.item.forEach(estatistica => {
            estatistica.profit = (this.investimento * (estatistica.profitporcentagem / 100)).toFixed(2);
            estatistica.score = this.calculoScore(estatistica);
            newlist.push(estatistica);
          });
          this.dataSnapshot = newlist;
        },

          filterOnlyCapsText (value, search) {
            return value != null &&
              search != null &&
              typeof value === 'string' &&
              value.toString().indexOf(search) !== -1
          },
        getColor (score) {
            if (score < 50) return 'red'
            else if (score > 50 && score <  65) return 'orange'
            else return 'green'
          },

        calculoScore(estatistica){

          let porcentagemtrades = (estatistica.total/estatistica.dadosanalisados)*100;


          let payoffscore = estatistica.payoff > this.payoff ? this.payoff : estatistica.payoff;
          let gainscore = estatistica.gainporcentagem > this.gain ? this.gain : estatistica.gainporcentagem;      
          let tradescore = porcentagemtrades > this.trades ? this.trades : porcentagemtrades;
          let porcentagemscore = estatistica.profitporcentagem > this.porcentagem ? this.porcentagem : estatistica.profitporcentagem;

          let relacaopayoff = ((10/this.payoff) * payoffscore)/10;
          let relacaogain = ((10/this.gain) * gainscore)/10;
          let relacaotrades = ((10/this.trades) * tradescore)/10;
          let relacaoporcentagem = ((10/this.porcentagem) * porcentagemscore)/10;
          
   

          var score = ((relacaopayoff * this.pesopayoff)+(relacaogain * this.pesogain)+(relacaotrades * this.pesotrades)+(relacaoporcentagem * this.pesoporcentagem)) * 100;


          return score.toFixed(2);

        },

        getSinals(signals,type){
          var i = 1;

          let textsignals = '';

             signals.forEach(signal =>{
               if(signal.id != 13){
                 textsignals += signal.name + "=>" + signal.configselecionado.title + ":";
               }else{
                 textsignals += "Multicondição:";
               }
                
                switch(signal.id) {
                  
                    case 1:
                      
                          switch (signal.configselecionado.id) {
                            
                            case "acudis5":
                              textsignals += ",seq="+signal.parametro.sequencia;
                              break;
                            case "acudis6":
                              textsignals += ",seq="+signal.parametro.sequencia;
                              break;
                          
                            default:
                              break;
                          }
                      break;
                    case 2:
                       
                      break;
                    case 3:
                        textsignals += "desvio="+signal.parametro.desvio+",periodo="+signal.parametro.periodo;
                              switch (signal.configselecionado.id) {
                                
                                case "bollinger7":
                                  textsignals += ",seq="+signal.parametro.sequencia;
                                  break;
                                case "bollinger8":
                                  textsignals += ",seq="+signal.parametro.sequencia;
                                  break;
                              
                                default:
                                  break;
                              }
                      break;
                    case 4:
        
                      textsignals += "E. média="+signal.parametro.periodo + ",";
                          switch (signal.configselecionado.id) {
                            
                            case "ema3":
                              textsignals += "seq="+signal.parametro.sequencia;
                              break;
                            case "ema4":
                              textsignals += "seq="+signal.parametro.sequencia;
                              break;
                            case "ema7":
                             textsignals += "média longa="+signal.parametro.periodolongo;
                              break;
                            case "ema8":
                              textsignals += "média longa="+signal.parametro.periodolongo;
                              break;
                            case "ema9":
                              textsignals += "seq="+signal.parametro.sequencia;
                              break;
                            case "ema10":
                              textsignals += "seq="+signal.parametro.sequencia;
                              break;
                          
                            default:
                              break;
                          }
                      break;
                    case 5:
              
                      textsignals += "M. longa="+signal.parametro.periodolento+",M. rapida="+signal.parametro.periodorapido+",periodo=>"+signal.parametro.periodo + ",";
                          switch (signal.configselecionado.id) {
                            
                            case "macd5":
                              textsignals += "seq="+signal.parametro.sequencia;
                              break;
                            case "macd6":
                              textsignals += "seq="+signal.parametro.sequencia;
                              break;
                            case "macd7":
                              textsignals += "seq="+signal.parametro.sequencia;
                              break;
                            case "macd8":
                              textsignals += "seq="+signal.parametro.sequencia;
                              break;
                            case "macd9":
                              textsignals += "seq="+signal.parametro.sequencia;
                              break;
                            case "macd10":
                              textsignals += "seq="+signal.parametro.sequencia;
                              break;
                          
                            default:
                              break;
                          }
                      break;
                    case 6:
          
                      textsignals += "sobrecomprado="+signal.parametro.sobrecomprado+",sobrevendido="+signal.parametro.sobrevendido+",periodo="+signal.parametro.periodo + ",";
                      break;
                    case 7:
                      textsignals += "sobrecomprado="+signal.parametro.sobrecomprado+",sobrevendido="+signal.parametro.sobrevendido+",periodo="+signal.parametro.periodo + ",";
                      break;
                    case 8:
                
                      textsignals += "S. média="+signal.parametro.periodo + ",";
                          switch (signal.configselecionado.id) {
                            
                            case "sma3":
                              textsignals += "seq="+signal.parametro.sequencia;
                              break;
                            case "sma4":
                              textsignals += "seq="+signal.parametro.sequencia;
                              break;
                            case "sma7":
                             textsignals += "média longa="+signal.parametro.periodolongo;
                              break;
                            case "sma8":
                              textsignals += "média longa="+signal.parametro.periodolongo;
                              break;
                            case "sma9":
                              textsignals += "seq="+signal.parametro.sequencia;
                              break;
                            case "sma10":
                              textsignals += "seq="+signal.parametro.sequencia;
                              break;
                          
                            default:
                              break;
                          }
                      break;
                    case 9:
               
                      textsignals += "sobrecomprado="+signal.parametro.sobrecomprado+",sobrevendido="+signal.parametro.sobrevendido+",periodo="+signal.parametro.periodo + ",";
                      switch (signal.configselecionado.id) {
                            
                            case "stochastic7":
                              textsignals += "seq="+signal.parametro.sequencia;
                              break;
                            case "stochastic8":
                              textsignals += "seq="+signal.parametro.sequencia;
                              break;
                        
                            default:
                              break;
                          }
                      break;
                    case 10:
              
                      switch (signal.configselecionado.id) {
                            
                            case "candle1":
                              textsignals += "seq="+signal.parametro.sequencia;
                              break;
                            case "candle2":
                              textsignals += "seq="+signal.parametro.sequencia;
                              break;
                            case "candle3":
                              textsignals += "periodo="+signal.parametro.periodo+",posicao="+signal.parametro.posicao;
                              break;
                            case "candle4":
                              textsignals += "periodo="+signal.parametro.periodo+",posicao="+signal.parametro.posicao;
                              break;
                            case "candle5":
                              textsignals += "periodo="+signal.parametro.periodo+",posicao="+signal.parametro.posicao;
                              break;
                            case "candle6":
                              textsignals += "periodo="+signal.parametro.periodo+",posicao="+signal.parametro.posicao;
                              break;
                            case "candle7":
                              textsignals += "periodo="+signal.parametro.periodo+",posicao="+signal.parametro.posicao;
                              break;
                            case "candle8":
                              textsignals += "periodo="+signal.parametro.periodo+",posicao="+signal.parametro.posicao;
                              break;
                            case "candle9":
                              textsignals += "valor="+signal.parametro.preco;
                              break;
                            case "candle10":
                              textsignals += "valor="+signal.parametro.preco;
                              break;
                            case "candle11":
                              textsignals += "valor="+signal.parametro.preco;
                              break;
                            case "candle12":
                              textsignals += "valor="+signal.parametro.preco;
                              break;
                        
                            default:
                              break;
                          }
                      break;
                    case 11:
                      
                      switch (signal.configselecionado.id) {
                            
                            case "dia1":
                              textsignals += "dia="+signal.parametro.dia;
                              break;
                             case "dia2":
                              textsignals += "dia="+signal.parametro.dia;
                              break;
                              case "dia3":
                              textsignals += "dia="+signal.parametro.dia + ",mes="+signal.parametro.mes;
                              break;
                             case "dia4":
                              textsignals += "dia="+signal.parametro.dia + ",mes="+signal.parametro.mes;
                              break;
                             case "dia5":
                              textsignals += "diainicio="+signal.parametro.diainicio + ",mesinicio="+signal.parametro.mesinicio+",diafim="+signal.parametro.diainicio + ",mesfim="+signal.parametro.mesfim;
                              break;
                        
                        
                            default:
                              break;
                          }
                      break;
                    case 12:
                 
                    break;
                    case 13:
                           var multicondicoes = this.getSinals(signal.indicadoresopcao,'ou');
                           
                           textsignals += "{"+ multicondicoes+ "}";
                    break;           
                    case 14:
                   
                      switch (signal.configselecionado.id) {
                            
                            case "saida1":
                              textsignals += "periodo="+signal.parametro.periodo;
                              break;
                            case "saida3":
                              textsignals += "stopgain="+signal.parametro.gain;
                              break;
                            case "saida4":
                              textsignals += "stoploss="+signal.parametro.gain;
                              break;
                            case "saida5":
                              textsignals += "fatorAtr="+signal.parametro.fatorAtr;
                              break;
                            case "saida6":
                              textsignals += "fatorAtr="+signal.parametro.fatorAtr;
                              break;
                            case "saida7":
                              textsignals += "periodo="+signal.parametro.periodo;
                              break;
                            case "saida8":
                              textsignals += "periodo="+signal.parametro.periodo;
                              break;
                            case "saida9":
                              textsignals += "periodo="+signal.parametro.periodo;
                              break;
                            case "saida10":
                              textsignals += "periodo="+signal.parametro.periodo;
                              break;
                            case "saida11":
                              textsignals += "periodo="+signal.parametro.periodo;
                              break;
                            case "saida12":
                              textsignals += "periodo="+signal.parametro.periodo;
                              break;
                            case "saida13":
                              textsignals += "periodo="+signal.parametro.periodo;
                              break;
                            case "saida14":
                              textsignals += "periodo="+signal.parametro.periodo;
                              break;
                            case "saida15":
                              textsignals += "periodo="+signal.parametro.periodo;
                              break;
                            case "saida16":
                              textsignals += "periodo="+signal.parametro.periodo;
                              break;
                            case "saida17":
                              textsignals += "periodo="+signal.parametro.periodo;
                              break;
                            case "saida18":
                              textsignals += "periodo="+signal.parametro.periodo;
                              break;
                            case "saida19":
                              textsignals += "periodo="+signal.parametro.periodo;
                              break;

                            default:
                              break;
                          }
                      break;
                
                     
                    
                   
                      // code block
                  }

              console.log(signals.length);
              if(signals.length == 1 || i == signals.length){
                type = '';
              }
              textsignals += ' '+type+' ';
              i++;
            })
          console.log(textsignals);
          textsignals += ' ';
          return textsignals;
        }
      },
  
});
</script>



<style>
</style>
