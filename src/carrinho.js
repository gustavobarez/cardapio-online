// Seleciona todos os botões com a classe 'adicionar' e armazena em uma NodeList
const botoesAdicionar = document.querySelectorAll('.adicionar');

// Seleciona o elemento HTML onde a lista de pedidos será exibida
const listaPedido = document.getElementById('lista-pedido');

// Seleciona o elemento HTML onde o total do pedido será exibido
const totalElemento = document.getElementById('total');

// Variável para armazenar o valor total do pedido
let total = 0;

// Itera sobre cada botão de adicionar
botoesAdicionar.forEach((botao) => {
    // Adiciona um evento de clique a cada botão
    botao.addEventListener('click', () => {
        // Obtém o elemento pai do botão clicado, que representa o produto
        const produto = botao.parentElement;

        // Obtém o nome do produto a partir do texto dentro da tag <h3>
        const nome = produto.querySelector('h3').textContent;

        // Obtém o preço do produto a partir do texto dentro da classe '.preco', remove o "R$" e converte para número
        const preco = parseFloat(produto.querySelector('.preco').textContent.replace("R$", "").trim());

        // Cria um novo elemento <li> para representar o item no pedido
        const itemPedido = document.createElement('li');

        // Define o texto do item do pedido com o nome e o preço formatado
        itemPedido.textContent = `${nome} - R$ ${preco.toFixed(1)}`;
        
        // Adiciona o item do pedido à lista de pedidos
        listaPedido.appendChild(itemPedido);

        // Atualiza o valor total do pedido somando o preço do item adicionado
        total += preco;

        // Atualiza o texto do elemento que exibe o total do pedido
        totalElemento.textContent = `Total: R$ ${total.toFixed(1)}`;
    })
});

// Seleciona o botão de finalizar pedido
const botoesFinalizarPedido = document.getElementById('finalizar-pedido');

// Adiciona um evento de clique ao botão de finalizar pedido
botoesFinalizarPedido.addEventListener("click", () =>{
    // Exibe um alerta informando que o pedido foi finalizado e mostra o total
    alert("Pedido finalizado com sucesso" + totalElemento.textContent);

    // Limpa a lista de pedidos
    listaPedido.innerHTML = '';

    // Reseta o valor total exibido para R$ 0,00
    totalElemento.innerHTML = 'Total: R$ 0,00'
})