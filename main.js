// Trabalho NP2 — fluxo principal.
// Utilize as funções de pedidos.js e relatorios.js neste arquivo.

function iniciarSistema() {
    // TODO: implementar o menu usando prompt(), estruturas de repetição,
    // condicionais e chamadas às funções dos outros arquivos JavaScript.
    // Opções: 1 cadastrar; 2 listar; 3 buscar; 4 entregar;
    // 5 resumo; 6 resumo em JSON; 0 sair.
    let opcoes = 1;
    while (opcoes !== "0") {
        opcoes = Number(prompt(
            "===== LANCHONETE ===== \n" +
            "1 - Cadastrar\n" +
            "2 - listar\n" +
            "3 - buscar\n" +
            "4 - Entregar\n" +
            "5 - Resumo\n" +
            "6 - Resumo em JSON\n" +
            "0 - Sair\n\n"));

        if(opcoes === 1){
            cadastrarPedido();
        }
        if(opcoes === 2){
            listarPedidos();
        }
        if(opcoes === 3){
            let codigo = Number(prompt("digite o código do produto para a busca"))
            buscarPedido(codigo);
        }
        if(opcoes === 4){
            let codigo = Number(prompt("digite o código do produto para a confirmar a entrega"))
            entregarPedido(codigo);
        }
        if(opcoes === 5){
            exibirResumo();
        }
        if(opcoes === 6){
            gerarResumoJSON();
        }
    }
}
// TODO: chamar iniciarSistema() quando a implementação estiver pronta.
iniciarSistema()
