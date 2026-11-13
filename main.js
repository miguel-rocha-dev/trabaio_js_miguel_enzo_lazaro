// Trabalho NP2 — fluxo principal.
// Utilize as funções de pedidos.js e relatorios.js neste arquivo.

function iniciarSistema() {
    // TODO: implementar o menu usando prompt(), estruturas de repetição,
    // condicionais e chamadas às funções dos outros arquivos JavaScript.
    // Opções: 1 cadastrar; 2 listar; 3 buscar; 4 entregar;
    // 5 resumo; 6 resumo em JSON; 0 sair.
    let opcoes = " ";
        while (opcoes !== "0") {
        opcoes = prompt(
        "===== LANCHONETE ===== \n" +
        "1 - Cadastrar\n" +
        "2 - listar\n" +
        "3 - buscar\n" +
        "4 - Entregar\n" +
        "5 - Resumo\n" +
        "6 - Resumo em JSON\n" +
        "0 - Sair\n\n");

        if(opcoes == 0 || opcoes === 0){
            break
        }
            
        if(opcoes !== 1 && opcoes !== 2){
            continue
        }

        if(opcoes === "1"){
            console.log(cadastrarPedido());
        }
        if(opcoes === "2"){
            console.log(listarPedidos());
        }
        if(opcoes === "3"){
            console.log(buscarPedido(codigo));
        }
        if(opcoes === "4"){
            console.log(entregarPedido(codigo));
        }
        if(opcoes === "5"){
            console.log(exibirResumo());
        }
        if(opcoes === "6"){
            console.log(gerarResumoJSON());
        }
}
}
// TODO: chamar iniciarSistema() quando a implementação estiver pronta.
console.log(iniciarSistema);
