let produto = [];
let preco = [];
let quantidade = [];

function acrescentarProduto(){
    let produtoCliente = document.querySelector('#produto');
    produto.push(produtoCliente.value);
    produtoCliente.value = "";

    let precoCliente = document.querySelector('#valor');
    preco.push(precoCliente.value); 
    precoCliente.value = "";
}