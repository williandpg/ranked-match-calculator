let saldoVitorias = partidas(150, 50);
let nivel = nivelJogador(saldoVitorias);

function partidas (vitorias, derrotas) {
  let saldo = vitorias - derrotas;
  return saldo;
}

function nivelJogador (saldoVitorias) {
  if (saldoVitorias < 10) {
    return nivelJogador = "Ferro";
  } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
    return nivelJogador = "Bronze";
  } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
    return nivelJogador = "Prata";
  } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
    return nivelJogador = "Ouro";
  } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
    return nivelJogador = "Diamante";
  } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
    return nivelJogador = "Lendário";
  } else {
    return nivelJogador = "Imortal";
  }
}

console.log(`O Herói tem de saldo ${saldoVitorias} e está no nível ${nivel}.`);