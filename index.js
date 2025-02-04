// Entrada de dados. Lembre-se: O parseInt(()) é importante para a conversão dos valores de entrada(String) para um valor numérico(int).
const totalSalas = parseInt(gets());

// Arrays pré-definidos de salas com tesouros e monstros
const salasComTesouro = [2, 4, 7];
const salasComMonstro = [3, 6, 8];

// Loop para percorrer cada sala da masmorra
for (let sala = 1; sala <= totalSalas; sala++) {
    // Verifica se a sala contém um tesouro ou um monstro
    const temTesouro = salasComTesouro.includes(sala);
    const temMonstro = salasComMonstro.includes(sala);

    // Exibe as mensagens conforme a condição
    if (temTesouro) {
        print("Tesouro na sala " + sala + "!");
    }
    if (temMonstro) {
        print("Monstro na sala " + sala + "!");
    }
}
