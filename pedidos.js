// Pedidos fictícios para iniciar os testes. Novos pedidos devem ser adicionados a este array.
let pedidos = [
    { codigo: 101, cliente: "Ana", valor: 25.50, entregue: false },
    { codigo: 102, cliente: "Bruno", valor: 18.00, entregue: true },
    { codigo: 103, cliente: "Carla", valor: 32.90, entregue: false }
];

// Implemente abaixo as operações de gerenciamento dos pedidos.
function cadastrarPedido() {
    while(true){
        let codigo = Number(prompt("digite o código do produto que você quer adicionar"))
        if(codigo%1 != 0){
            break
        }
        window.alert("O número deve ser inteiro!")
        let nomeCliente = prompt("digite o nome do cliente")
        let valorPedido = Number(prompt("Digite o valor do pedido"))
        let pedidoEntregue = false // pedido acabou de ser criado, não tem como já ter sido entregue
        let objeto = {
            codigo: codigo,
            cliente: nomeCliente,
            valor: valorPedido,
            entregue: pedidoEntregue
        }
        pedidos.push(objeto)
    }
    window.alert("Pedido criado com sucesso!")


    // TODO: solicitar os dados, validar e adicionar um novo pedido ao array.
}

function listarPedidos() {
    let cont = 0
    for(let pedido of pedidos){
        cont++
        console.log(`pedido ${cont}º`)
        console.log(`Código do pedido: ${pedido.codigo}`)
        console.log(`Nome do cliente: ${pedido.cliente}º`)
        console.log(`Valor do pedido ${pedido.valor}º`)
        if(pedido.entregue){
            console.log("Pedido entregue!")
        }
        else{
            console.log("Pedido não entregue!")
        }
        
    }
    // TODO: listar os pedidos cadastrados.
}

function buscarPedido(codigo) {
    // TODO: retornar o pedido correspondente ao código, se existir.
}

function entregarPedido(codigo) {
    // TODO: alterar a situação de entrega do pedido encontrado.
}
