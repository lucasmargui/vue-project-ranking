function getColor(score) {
    if (score < 50) return "red";
    else if (score > 50 && score < 65) return "orange";
    else return "green";
  };

  function filterOnlyCapsText (value, search) {
      
    return value != null &&
      search != null &&
      typeof value === 'string' &&
      value.toString().indexOf(search) !== -1
  };


  function calculoScore(estatistica) {
    let porcentagemtrades =
      (estatistica.total / estatistica.dadosanalisados) * 100;

    let payoffscore = Math.min(estatistica.payoff, this.payoff);
    let gainscore = Math.min(estatistica.gainporcentagem, this.gain);
    let tradescore = Math.min(porcentagemtrades, this.trades);
    let porcentagemscore = Math.min(
      estatistica.profitporcentagem,
      this.porcentagem
    );

    let relacaopayoff = ((10 / this.payoff) * payoffscore) / 10;
    let relacaogain = ((10 / this.gain) * gainscore) / 10;
    let relacaotrades = ((10 / this.trades) * tradescore) / 10;
    let relacaoporcentagem =
      ((10 / this.porcentagem) * porcentagemscore) / 10;

    let score =
      (relacaopayoff * this.pesopayoff +
        relacaogain * this.pesogain +
        relacaotrades * this.pesotrades +
        relacaoporcentagem * this.pesoporcentagem) *
      100;

    return score.toFixed(2);
  };

 function getSinals(signals, type) {
    let textsignals = "";

    const configMap = {
      1: {
        acudis5: "seq=",
        acudis6: "seq=",
      },
      3: {
        bollinger7: "seq=",
        bollinger8: "seq=",
      },
      4: {
        ema3: "seq=",
        ema4: "seq=",
        ema7: "média longa=",
        ema8: "média longa=",
        ema9: "seq=",
        ema10: "seq=",
      },
      5: {
        macd5: "seq=",
        macd6: "seq=",
        macd7: "seq=",
        macd8: "seq=",
        macd9: "seq=",
        macd10: "seq=",
      },
      8: {
        sma3: "seq=",
        sma4: "seq=",
        sma7: "média longa=",
        sma8: "média longa=",
        sma9: "seq=",
        sma10: "seq=",
      },
      9: {
        stochastic7: "seq=",
        stochastic8: "seq=",
      },
      10: {
        candle1: "seq=",
        candle2: "seq=",
        candle3: "periodo=,posicao=",
        candle4: "periodo=,posicao=",
        candle5: "periodo=,posicao=",
        candle6: "periodo=,posicao=",
        candle7: "periodo=,posicao=",
        candle8: "periodo=,posicao=",
        candle9: "valor=",
        candle10: "valor=",
        candle11: "valor=",
        candle12: "valor=",
      },
      11: {
        dia1: "dia=",
        dia2: "dia=",
        dia3: "dia=,mes=",
        dia4: "dia=,mes=",
        dia5: "diainicio=,mesinicio=,diafim=,mesfim=",
      },
    };

    signals.forEach((signal, index) => {
      if (signal.id !== 13) {
        if (
          signal.id === 1 ||
          signal.id === 3 ||
          signal.id === 4 ||
          signal.id === 5 ||
          signal.id === 8 ||
          signal.id === 9 ||
          signal.id === 10 ||
          signal.id === 11
        ) {
          textsignals +=
            signal.name + "=>" + signal.configselecionado.title + ":";
          const config = configMap[signal.id][signal.configselecionado.id];
          if (config) {
            textsignals += config;
          }
        } else if (signal.id === 6 || signal.id === 7 || signal.id === 9) {
          textsignals +=
            "sobrecomprado=" +
            signal.parametro.sobrecomprado +
            ",sobrevendido=" +
            signal.parametro.sobrevendido +
            ",periodo=" +
            signal.parametro.periodo +
            ",";
        } else if (signal.id === 13) {
          const multicondicoes = getSinals(signal.indicadoresopcao, "ou");
          textsignals += "{" + multicondicoes + "}";
        } else if (signal.id === 14) {
          textsignals += "periodo=" + signal.parametro.periodo;
        }
      }

      if (signals.length === 1 || index === signals.length - 1) {
        type = "";
      }

      textsignals += " " + type + " ";
    });

    textsignals += " ";
    return textsignals;
  };


  export default { getColor, filterOnlyCapsText, getSinals, calculoScore };