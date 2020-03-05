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

    let quantidadeCliente = document.querySelector('#quantidade');
    quantidade.push(quantidadeCliente.value);
    quantidadeCliente.value = "";

    mostrar();
}

function apagar(i){
    delete produto[i];
    delete preco[i];
    delete quantidade[i];

    console.log(i);

    mostrar();
}

function mostrar(){
    let table = document.querySelector('#lista');
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }

    for(i in produto){
        let tr = document.createElement('tr');
        
        let tdProduto = document.createElement('td');
        let text1 = document.createTextNode(produto[i]);
        tdProduto.appendChild(text1);
        tr.appendChild(tdProduto);

        let tdPreco = document.createElement('td');
        let text2 = document.createTextNode(preco[i]);
        tdPreco.appendChild(text2);
        tr.appendChild(tdPreco);

        let tdQuantidade = document.createElement('td');
        let text3 = document.createTextNode(quantidade[i]);
        tdQuantidade.appendChild(text3);
        tr.appendChild(tdQuantidade);

        let tdApagar = document.createElement('td');
        let aApagar = document.createElement('a');
        let text4 = document.createTextNode('Apagar');
        aApagar.classList.add('w3-btn');
        aApagar.classList.add('w3-green');
        aApagar.setAttribute('onclick', 'apagar('+i+')');
        aApagar.appendChild(text4);
        tdApagar.appendChild(aApagar);
        tr.appendChild(tdApagar);

        table.appendChild(tr);
    }

}