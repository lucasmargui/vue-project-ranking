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


Importando o arquivo de firebase para importar o objeto contendo as duas propriedades datacollections e getDoc para realização da consulta ao Firebase.
```
 import fb from "../../firebase.js";
```

Utilizando a função fb.getDocs para acessar a instância de database gerada fb.datacollection obtendo uma coleção de dados.

```
 async mounted() {
    const docSnap = await fb.getDocs(fb.datacollection);
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
