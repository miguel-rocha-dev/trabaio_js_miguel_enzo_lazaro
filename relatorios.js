// Trabalho NP2 — funções de relatórios.
// Os pedidos estão armazenados no array 'pedidos', definido em pedidos.js.

function exibirResumo() {
    // TODO: calcular e exibir total de pedidos, entregues, pendentes e valor total.
    let entregues = 0;
    let pendentes = 0;
    let valorTotal = 0;

    for(let pedido of pedidos){
        valorTotal += pedido.valor;
        if(pedido.entregue){
            entregues++
        }
        else{
            pendentes++
        }
    }
    console.log("=== RESUMO DOS PEDIDOS ===")
    console.log(`Total pedidos: ${totalPedidos}`)
    console.log(`Pedidos entregues: ${entregues}`)
    console.log(`Pedidos pendentes: ${pendentes}`)
    console.log(`Valor tatal: ${valorTotal}`)
    }

function gerarResumoJSON() {
    // TODO: criar o objeto do resumo, converter com JSON.stringify() e exibir.
    let entregues = 0;
    let pendentes = 0;
    let valorTotal = 0;

    for(let pedido of pedidos){
        valorTotal +=pedido.valor;
        if(pedido.entregue){
            entregues++
        }
        else{
            pendentes++
        }
    }
    let resumo = {
        totalPedidos : pedido.length,
        entregues : entregues,
        pendentes : pendentes,
        valorTotal : valorTotal
    }
    let json = JSON.stringify(resumo);
    console.log("=== RESUMO EM JSON ==="  );
    console.log(json);
}
