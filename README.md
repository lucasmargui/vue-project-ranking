<H1 align="center">Projeto Ranking Estratégias</H1>
<p align="center">🚀 Projeto de criação de projeto utilizando Vue para referências futuras</p>

## Requisitos
- Vue
- Vue Router
- Vuetify


## Projeto

Criação do projeto selecionando a configuração Babel e Router.

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

Acesse a interface de linha de comando (CLI) do projeto criado e acesse as configurações do Software Development Kit (SDK).

<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Projeto_Ranking_Estrategias/assets/157809964/f6b21387-deef-457b-9393-9b9d27873334" style="width:90%">
</div>
<br>

Crie o arquivo firebase.js e empregue as configurações geradas no contexto do projeto.

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

O código em questão exporta um objeto que contém duas propriedades (datacollection e getDocs) como o valor padrão do módulo atual.

- datacollection: representa uma instância de banco de dados que pode ser utilizada como referência.
- getDocs: é uma função responsável por realizar uma consulta para obter todos os documentos presentes na instância do banco de dados.



<br>

## App

Componente raiz de nível superior que serve como o ponto de entrada principal para a aplicação Vue. Este arquivo contém a estrutura básica da aplicação Vue e é frequentemente usado para definir a estrutura geral da interface do usuário, incluindo a barra de navegação, layout principal e outros componentes principais

## constants

- config_filtro.js : Arquivo que contém um conjunto de parâmetros utilizados no processo de filtragem.
- config_headers.js : Arquivo que contém um conjunto de parâmetros utilizados no processo de criação de cabeçalhos para tabela.
- config_investimento.js : Arquivo que contém um conjunto de parâmetros utilizados no processo de filtragem.

## repositories

O diretório "repositories" geralmente contém as classes ou módulos responsáveis por interagir com o banco de dados ou qualquer outra fonte de dados externa. Nessa caso está simulando um conjunto de dados.


## views

### home

HomeView: Em resumo, este código define um componente Vue chamado "HomeView" que renderiza vários componentes personalizados e utiliza o framework Vuetify para o layout e estilo. Ele também inclui lógica para manipular eventos e dados.

- Instanciando a variável dataSnapshot para armazenar a coleção de dados provenientes do Firebase.
- Declarando a variável showScoreParametros para controlar a exibição ou ocultação dos filtros.
- Inicializando a variável investimentosDefault, a qual será empregada para efetuar o cálculo na função calculoscore, localizada no utilitário "utils".

<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Projeto_Ranking_Estrategias/assets/157809964/6b193fb0-4b31-4cb0-935c-c690be054247" style="width:50%">
</div>



Importa-se o arquivo do Firebase para obter o objeto que contém duas propriedades, "datacollections" e "getDoc", que serão utilizadas para realizar consultas ao Firebase.
```
 import fb from "../../firebase.js";
```

#### function async mounted()

<details>
  <summary>Clique para mostrar detalhes sobre a função </summary>

Utilizando o método fb.getDocs para obter acesso à instância do banco de dados fb.datacollection e recuperar uma coleção de dados.
```
 async mounted() {
    const docSnap = await fb.getDocs(fb.datacollection);
```

Realizando iteração sobre cada documento contido em docSnap, alterando suas propriedades e agregando-os a uma lista modificada.

```
 let list = [];
 docSnap.forEach(doc => {
      let data = doc.data();
      ....
      list.push(data.estatistica);
```

Associando a lista de dados alterada à variável dataSnapshot.

```
this.dataSnapshot = list;
```
<br>

</details>

------------------------------------

#### function simulaInvestimento(investimentoModificado)

<details>
  <summary>Clique para mostrar detalhes sobre a função </summary>

Função simulaInvestimento para realizar a atualização dos valores na coluna "Profit R$", seguindo as especificações técnicas definidas.

```
 simulaInvestimento(investimentoModificado) {
```


<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Projeto_Ranking_Estrategias/assets/157809964/0fbffc57-1901-42eb-b6da-022b7459692c" style="width:90%">
</div>

<br>

</details>

------------------------------------

#### function toogleParametrosScore()

<details>
  <summary>Clique para mostrar detalhes sobre a função </summary>

Função toogleParametrosScore para exibir os filtros.

```
 toogleParametrosScore() 
```
<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Projeto_Ranking_Estrategias/assets/157809964/9e2dc674-4d37-4caa-9a97-ea614695faf0" style="width:70%">
</div>


<br>

</details>

------------------------------------

#### Atualizando Objeto investimentoDefault

<details>
  <summary>Clique para mostrar detalhes sobre atualizar valores do objeto </summary>

<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Projeto_Ranking_Estrategias/assets/157809964/4be61c9b-ddbc-4f47-84ad-ad5471830530" style="width:70%">
</div>

Criando o objeto de configuração.

<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Projeto_Ranking_Estrategias/assets/157809964/ff8ea07b-39ef-4c48-b51c-0244a697ff9a" style="width:50%">
</div>

Importando o objeto de configuração.

```
import investimentoOpcoes from "../../constants/config_investimento.js";
```

Atribuindo o objeto criado como default.

```
investimentoDefault: investimentoOpcoes,
```

Passando o objeto através de props para os componentes InvestimentoComponent e FiltroComponent

<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Projeto_Ranking_Estrategias/assets/157809964/139f6b9a-d910-45ff-a5ce-129f9701cfe0" style="width:50%">
</div>


Transmitindo o objeto por meio de propriedades (props) para os componentes InvestimentoComponent e FiltroComponent.

```
 props: {
    investimentoDefault: Object,
  },
```

Definindo variáveis para serem utilizadas como ligação de modelo (v-model) nos campos de entrada de texto e seleção.

<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Projeto_Ranking_Estrategias/assets/157809964/eb4c2a7f-ecab-42dd-810a-a8a7958d4374" style="width:50%">
</div>

Ativando a função quando ocorre a alteração do valor do v-model.

```
 @keyup="atualizarValor"
```

Instanciando um novo objeto denominado investimentoDefault com os valores atualizados do modelo-v para serem enviados de volta ao componente pai.

<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Projeto_Ranking_Estrategias/assets/157809964/fd424f0b-8067-401c-b8d3-2e9db654b75b" style="width:50%">
</div>


Implementação de uma função que facilita a comunicação de um componente filho com seu componente pai através do envio de um evento personalizado contendo o valor 'investimentoOpcoes', o qual será utilizado para atualizar a propriedade 'investimentoDefault' no componente pai 'HomeView'.

```
this.$emit("simula-investimento", investimentoOpcoes);
```

Quando um evento personalizado é recebido, será acionada a função simulaInvestimento, passando o objeto investimentoOpcoes como argumento.

```
@simula-investimento="simulaInvestimento"
```

Uma função que recebe como parâmetro o investimentoModificado, o qual representa o valor do objeto investimentoOpcoes.

```
simulaInvestimento(investimentoModificado)
```

Atualiza investimentoDefault.

```
this.investimentoDefault = investimentoModificado;
```

</details>

------------------------------------



## Resultado

<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Projeto_Ranking_Estrategias/assets/157809964/94d197b6-cded-4d68-8416-f6621160f224" style="width:100%">
</div>




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
