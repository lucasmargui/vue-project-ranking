<H1 align="center">Ranking Strategies</H1>
<p align="center">🚀 Project creation using Vue for future references</p>

## Requirements
- Vue
- Vue Router
- Vuetify


<div align="center">
 <img src="https://github.com/lucasmargui/Vue_Projeto_Ranking_Estrategias/assets/157809964/94d197b6-cded-4d68-8416-f6621160f224" style="width:100%">
</div>



## Project

Project creation by selecting the Babel and Router configuration.

```
vue create vue-ranking
```

Adding Vuetify 3 to the project

```
vue add vuetify
```

Adding Firebase to the project

```
npm add firebase
```

Integrating Firebase into the project using Vuefire

```
npm i vuefire firebase
```


## firebase.js

Access the command line interface (CLI) of the created project and access the Software Development Kit (SDK) settings.

<div align="center">
 <img src="https://github.com/lucasmargui/Vue_Projeto_Ranking_Estrategias/assets/157809964/f6b21387-deef-457b-9393-9b9d27873334" style="width:90%">
</div>
<br>

Create the firebase.js file and use the generated configurations in the project context.

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

The code in question exports an object that contains two properties (datacollection and getDocs) as the default value of the current module.

- datacollection: represents a database instance that can be used as a reference.
- getDocs: is a function responsible for performing a query to obtain all documents present in the database instance.



<br>

## App

Top-level root component that serves as the main entry point for the Vue application. This file contains the basic structure of the Vue application and is often used to define the overall structure of the user interface, including the navigation bar, main layout, and other main components.

## constants

- config_filtro.js: File that contains a set of parameters used in the filtering process.
- config_headers.js: File that contains a set of parameters used in the process of creating table headers.
- config_investimento.js: File that contains a set of parameters used in the filtering process.

## repositories

The "repositories" directory generally contains the classes or modules responsible for interacting with the database or any other external data source. In this case, you are simulating a set of data.


##views

### home

HomeView: In short, this code defines a Vue component called "HomeView" that renders several custom components and uses the Vuetify framework for layout and styling. It also includes logic for handling events and data.

- Instantiating the dataSnapshot variable to store the collection of data coming from Firebase.
- Declaring the showScoreParameters variable to control the display or hiding of filters.
- Initializing the investmentsDefault variable, which will be used to perform the calculation in the calculationscore function, located in the "utils" utility.

<div align="center">
 <img src="https://github.com/lucasmargui/Vue_Projeto_Ranking_Estrategias/assets/157809964/6b193fb0-4b31-4cb0-935c-c690be054247" style="width:50%">
</div>



The Firebase file is imported to obtain the object that contains two properties, "datacollections" and "getDoc", which will be used to perform Firebase queries.
```
 import fb from "../../firebase.js";
```

#### function async mounted()

<details>
 <summary>Click to show details about the function </summary>

Using the fb.getDocs method to gain access to the fb.datacollection database instance and retrieve a collection of data.
```
 async mounted() {
 const docSnap = await fb.getDocs(fb.datacollection);
```

Iterating over each document contained in docSnap, changing its properties and adding them to a modified list.

```
 let list = [];
 docSnap.forEach(doc => {
 let data = doc.data();
 ....
 list.push(data.statistica);
```

Associating the changed data list with the dataSnapshot variable.

```
this.dataSnapshot = list;
```
<br>

</details>

------------------------------------

#### function simulateInvestment(investmentModified)

<details>
 <summary>Click to show details about the function </summary>

SimulateInvestment function to update the values ​​in the "Profit R$" column, following the defined technical specifications.

```
 simulateInvestment(investmentModified) {
```


<div align="center">
 <img src="https://github.com/lucasmargui/Vue_Projeto_Ranking_Estrategias/assets/157809964/0fbffc57-1901-42eb-b6da-022b7459692c" style="width:90%">
</div>

<br>

</details>

------------------------------------

#### function toogleParametersScore()

<details>
 <summary>Click to show details about the function </summary>

ToogleParametrosScore function to display the filters.

```
 toogleParametersScore()
```
<div align="center">
 <img src="https://github.com/lucasmargui/Vue_Projeto_Ranking_Estrategias/assets/157809964/9e2dc674-4d37-4caa-9a97-ea614695faf0" style="width:70%">
</div>


<br>

</details>

------------------------------------

#### Updating InvestmentDefault Object

<details>
 <summary>Click to show details about updating object values ​​</summary>

<div align="center">
 <img src="https://github.com/lucasmargui/Vue_Projeto_Ranking_Estrategias/assets/157809964/4be61c9b-ddbc-4f47-84ad-ad5471830530" style="width:70%">
</div>

Creating the configuration object.

<div align="center">
 <img src="https://github.com/lucasmargui/Vue_Projeto_Ranking_Estrategias/assets/157809964/ff8ea07b-39ef-4c48-b51c-0244a697ff9a" style="width:50%">
</div>

Importing the configuration object.

```
import investmentOpcoes from "../../constants/config_investimento.js";
```

Assigning the created object as default.

```
investmentDefault: investmentOptions,
```

Passing the object through props to the InvestimentoComponent and FiltroComponent components

<div align="center">
 <img src="https://github.com/lucasmargui/Vue_Projeto_Ranking_Estrategias/assets/157809964/139f6b9a-d910-45ff-a5ce-129f9701cfe0" style="width:50%">
</div>


Passing the object through properties (props) to the InvestimentoComponent and FiltroComponent components.

```
 props: {
 investmentDefault: Object,
 },
```

Defining variables to be used as model binding (v-model) in text input and selection fields.

<div align="center">
 <img src="https://github.com/lucasmargui/Vue_Projeto_Ranking_Estrategias/assets/157809964/eb4c2a7f-ecab-42dd-810a-a8a7958d4374" style="width:50%">
</div>

Activating the function when the v-model value changes.

```
 @keyup="updateValue"
```

Instantiating a new object called investmentDefault with the updated v-model values ​​to be sent back to the parent component.

<div align="center">
 <img src="https://github.com/lucasmargui/Vue_Projeto_Ranking_Estrategias/assets/157809964/fd424f0b-8067-401c-b8d3-2e9db654b75b" style="width:50%">
</div>


Implementation of a function that facilitates communication between a child component and its parent component by sending a custom event containing the value 'investimentoOpcoes', which will be used to update the 'investimentoDefault' property in the parent component 'HomeView'.

```
this.$emit("simulate-investment", investmentOpcoes);
```

When a custom event is received, the simulaInvestimento function will be triggered, passing the investmentOpcoes object as an argument.

```
@simula-investimento="simulaInvestimento"
```

A function that receives the modified investment as a parameter, which represents the value of the investmentOpcoes object.

```
simulateInvestment(investmentModified)
```

Updates investmentDefault.

```
this.investimentoDefault = investmentModified;
```

</details>

------------------------------------




## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serves
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


