<H1 align="center">Projeto Ranking Estratégias</H1>
<p align="center">🚀 Projeto de criação de projeto utilizando Vue para referências futuras</p>

## Requisitos
- Vue
- Vue Router
- Vuetify


## Projeto

Criação do projeto selecionando a configuração Babel e Router

```
vue create vue-ranking
```

Adicionando Vuetify 3 ao projeto

```
vue add vuetify
```

Adicionando Firebase ao projeto 

```
npm add firebase
```

Integrando Firebase ao projeto utilizando Vuefire

```
npm i vuefire firebase
```


## firebase.js

Acesse o console do projeto criado e acesse a configuração do SDK

<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Projeto_Ranking_Estrategias/assets/157809964/f6b21387-deef-457b-9393-9b9d27873334" style="width:90%">
</div>
<br>

Crie o arquivo firebase.js e utilize as configurações geradas no projeto

<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Projeto_Ranking_Estrategias/assets/157809964/6b0e010e-1b56-4fb8-9e34-68cd96ff1049" style="width:90%">
</div>

<br>



```
export default {
    datacollection,
    getDocs
  }
```

Código que exporta um objeto contendo duas propriedades (datacollection e getDocs) como o valor padrão do módulo atual.

- datacollection : uma instância de database para ser usada como referência
- geDocs: uma função que faz uma consulta por todos os documentos presentes na instância da database



<br>

## App

Componente raiz de nível superior que serve como o ponto de entrada principal para a aplicação Vue. Este arquivo contém a estrutura básica da aplicação Vue e é frequentemente usado para definir a estrutura geral da interface do usuário, incluindo a barra de navegação, layout principal e outros componentes principais

## constants

- config_filtro.js : Documento que armazena um conjunto de parâmetros empregados no processo de filtragem utilizados no componente FiltroComponent em HomeView

## repositories

O diretório "repositories" geralmente contém as classes ou módulos responsáveis por interagir com o banco de dados ou qualquer outra fonte de dados externa. Nessa caso está simulando um conjunto de dados.


## views

### home

- HomeView: Em resumo, este código define um componente Vue chamado "HomeView" que renderiza vários componentes personalizados e utiliza o framework Vuetify para o layout e estilo. Ele também inclui lógica para manipular eventos e dados.

Criando a variável dataSnapshot que receberá a coleção de dados de Firebase

<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Projeto_Ranking_Estrategias/assets/157809964/ed72e669-ff7f-4054-b21b-bb662ed1859b" style="width:90%">
</div>



Importando o arquivo de firebase para importar o objeto contendo as duas propriedades datacollections e getDoc para realização da consulta ao Firebase.
```
 import fb from "../../firebase.js";
```

#### function async mounted()

Utilizando a função fb.getDocs para acessar a instância de database fb.datacollection obtendo uma coleção de dados.
```
 async mounted() {
    const docSnap = await fb.getDocs(fb.datacollection);
```

Acessando cada documento de docSnap, modificando suas propriedades e adicionando numa lista modificada.

```
 let list = [];
 docSnap.forEach(doc => {
      let data = doc.data();
      ....
      list.push(data.estatistica);
```

Atribuindo a lista modificada de dados á variável dataSnapshot

```
this.dataSnapshot = list;
```

#### function  simulaInvestimento(investimentoModificado)

Função simulaInvestimento para atualizar os valores da coluna "Profit R$"
```
 simulaInvestimento(investimentoModificado) {
```

<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Projeto_Ranking_Estrategias/assets/157809964/0fbffc57-1901-42eb-b6da-022b7459692c" style="width:90%">
</div>


#### toogleParametrosScore()

Função toogleParametrosScore para exibir os filtros
```
 toogleParametrosScore() 
```
<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Projeto_Ranking_Estrategias/assets/157809964/9e2dc674-4d37-4caa-9a97-ea614695faf0" style="width:70%">
</div>

<br>

#### Atualizando Objeto investimentoDefault

<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Projeto_Ranking_Estrategias/assets/157809964/4be61c9b-ddbc-4f47-84ad-ad5471830530" style="width:70%">
</div>

Criando o objeto de configuração 

<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Projeto_Ranking_Estrategias/assets/157809964/ff8ea07b-39ef-4c48-b51c-0244a697ff9a" style="width:50%">
</div>

Importando o objeto de configuração 

```
import investimentoOpcoes from "../../constants/config_investimento.js";
```

Atribuindo o objeto criado como default

```
investimentoDefault: investimentoOpcoes,
```

Passando o objeto através de props para os componentes InvestimentoComponent e FiltroComponent

<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Projeto_Ranking_Estrategias/assets/157809964/139f6b9a-d910-45ff-a5ce-129f9701cfe0" style="width:50%">
</div>


Declarando que está recebendo o valor através de props no componente

```
 props: {
    investimentoDefault: Object,
  },
```

Declarando variáveis para utilizar como v-model nos campos de texto e select

<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Projeto_Ranking_Estrategias/assets/157809964/eb4c2a7f-ecab-42dd-810a-a8a7958d4374" style="width:50%">
</div>


Acionando a função ao alterar o valor de v-model

```
 @keyup="atualizarValor"
```

Criando um novo objeto investimentoDefault com os novos valores de v-model para retornar para o componente pai

<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Projeto_Ranking_Estrategias/assets/157809964/fd424f0b-8067-401c-b8d3-2e9db654b75b" style="width:50%">
</div>


Função que permite que um componente filho envie um evento personalizado para seu componente pai com o valor investimentoOpcoes que irá atualizar investimentoDefault no componente pai HomeView

```
this.$emit("simula-investimento", investimentoOpcoes);
```

Ao receber o evento personalizado ira acionar simulaInvestimento passando como parametro o objeto investimentoOpcoes como argumento da função

```
@simula-investimento="simulaInvestimento"
```

função que recebe como parametro investimentoModificado que é o valor do objeto investimentoOpcoes

```
simulaInvestimento(investimentoModificado)
```

Atualiza investimentoDefault
```
this.investimentoDefault = investimentoModificado;
```






## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
