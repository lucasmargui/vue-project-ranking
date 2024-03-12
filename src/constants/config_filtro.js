const itemspayoff = [
  1.0,
  2.0,
  3.0,
  4.0,
  5.0,
  6.0,
  7.0,
  8.0,
  10.0
];

const itemsgain = [
  10,
  20,
  30,
  40,
  50,
  60,
  70,
  80,
  90,
  100
];

const itemstrades = [
  5.0,
  10.0,
  15.0,
  20.0,
  25.0,
  30.0,
  35.0,
  40.0,
  50.0,
  60.0,
  70.0,
  80.0,
  90.0
];

const itemsporcentagem = [
  100.00,
  200.00,
  300.00,
  400.00,
  500.00,
  600.00,
  700.00,
  800.00,
  900.00,
  1000.00,
  1500.00,
  2000.00,
  2500.00,
  3000.00,
  3500.00,
  4000.00,
  5000.00,
  6000.00,
  7000.00

];

const pesopayoff = 0.40;
const pesogain = 0.30;
const pesotrades = 0.15;
const pesoporcentagem = 0.15;
const investimento = 1000.00;
const headers = [
  { title: "Img", key: "src" },
  { title: "Ação", key: "name" },
  { title: "Gain %", key: "gainporcentagem" },
  { title: "Loss %", key: "lossporcentagem" },
  { title: "Qtd Gain", key: "qtdgain" },
  { title: "Qtd Loss", key: "qtdloss" },
  { title: "Payoff", key: "payoff" },
  { title: "Ganhos %", key: "profitporcentagem" },
  { title: "Profit R$", key: "profit" },
  { title: "Nome", key: "nickname" },
  { title: "Condicão", key: "condicao" },
  { title: "Score", key: "score" },
];

const payoff = 3.0;
const trades = 20.0;
const porcentagem = 300;
const gain = 100;


// export utils/refs
export default {
  itemspayoff,
  itemsgain,
  itemstrades,
  itemsporcentagem,
  pesopayoff,
  pesogain,
  pesotrades,
  pesoporcentagem,
  investimento,
  headers,
  payoff,
  trades,
  porcentagem,
  gain

}