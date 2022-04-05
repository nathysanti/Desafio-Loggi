function nPedido(numero,origem,destino,cLoggi,cVendedor,tProduto){
    return{ numero,origem, destino,cLoggi,cVendedor,tProduto}
}

let pedidos = [
    nPedido(1,288,355,555,123,888),
    nPedido(2,335,333,555,584,333),
    nPedido(3,223,343,555,124,001),
    nPedido(4,002,111,555,874,555),
    nPedido(5,111,188,555,654,777),
    nPedido(6,111,333,555,123,333),
    nPedido(7,432,055,555,123,888),
    nPedido(8,079,333,555,584,333),
    nPedido(9,155,333,555,124,001),
    nPedido(10,333,188,555,584,333),
    nPedido(11,555,288,555,123,001),
    nPedido(12,111,388,555,123,555),
    nPedido(13,288,000,555,367,333),
    nPedido(14,066,311,555,874,001),
    nPedido(15,110,333,555,123,555),
    nPedido(16,333,488,555,584,333),
    nPedido(17,455,448,555,123,001),
    nPedido(18,022,388,555,123,555),
    nPedido(19,432,044,555,845,333),
    nPedido(20,034,311,555,874,001),
]

for(const pedido of pedidos){
    if(pedido.destino > 500){
        console.log(invalido(pedido) + " Destino invalido");
    }
    else if( pedido.destino > 400){
        console.log( pedido.numero  + " Região Norte");
        
    }
    else if( pedido.destino > 300){
        console.log(pedido.numero + " Região Nordeste");
    }
    else if( pedido.destino > 201){
        console.log(pedido.numero + " Região Centro-Oeste");
    }
    else if( pedido.destino > 100){
        console.log(pedido.numero + " Região Sul");
    }
    else if( pedido.destino > 001){
        console.log(pedido.numero + " Região Sudeste");
    } 
    else{
        console.log (pedido.numero + " Destino invalido");
    }
}

function dInvalido(pedido){
        return pedido.destino > 500 || pedido.destino < 001;
    }
function dNorte(pedido){
    return pedido.destino > 400 && pedido.destino <=499; ;
    }
function dNordeste(pedido){
    return pedido.destino > 300 && pedido.destino <= 399;
    }
function dCentroOeste(pedido){
    return pedido.destino > 201 && pedido.destino <=299;
    }
function dSul(pedido){
    return pedido.destino > 100 && pedido.destino <= 199;
        }
function dSudeste(pedido){
    return pedido.destino > 001 && pedido.destino <= 099;
    }

let pedidosInvalidos = pedidos.filter(dInvalido);
let pedidosNorte = pedidos.filter(dNorte);
let pedidosNordeste = pedidos.filter(dNordeste);
let pedidosCentroOeste = pedidos.filter(dCentroOeste);
let pedidosSul = pedidos.filter(dSul);
let pedidosSudesde = pedidos.filter(dSudeste);


console.log(" Número de pedidos com destino invalidos: " + pedidosInvalidos.length);
console.log(" Número de pedidos com destino para Norte: " + pedidosNorte.length);
console.log(" Número de pedidos com destino para o Nordeste: " + pedidosNordeste.length);
console.log(" Número de pedidos com destino para o Centro-Oeste: " + pedidosCentroOeste.length);
console.log(" Número de pedidos com destino para o Sul: " + pedidosSul.length);
console.log(" Número de pedidos com destino para o Sudeste: " + pedidosSudesde.length);


// Até aqui esta tudo funcionando 
// Para verificar a origem de cada pedido.
function nOrigem(numero,origem,destino,cLoggi,cVendedor,tProduto){
    return{ numero,origem, destino,cLoggi,cVendedor,tProduto}
}

let origens = [
    nOrigem(1,288,355,555,123,888),
    nOrigem(2,335,333,555,584,333),
    nOrigem(3,223,343,555,124,001),
    nOrigem(4,002,111,555,874,555),
    nOrigem(5,111,188,555,654,777),
    nOrigem(6,111,333,555,123,333),
    nOrigem(7,432,055,555,123,888),
    nOrigem(8,079,333,555,584,333),
    nOrigem(9,155,333,555,124,001),
    nOrigem(10,333,188,555,584,333),
    nOrigem(11,555,288,555,123,001),
    nOrigem(12,111,388,555,123,555),
    nOrigem(13,288,000,555,367,333),
    nOrigem(14,066,311,555,874,001),
    nOrigem(15,110,333,555,123,555),
    nOrigem(16,333,488,555,584,333),
    nOrigem(17,455,448,555,123,001),
    nOrigem(18,022,388,555,123,555),
    nOrigem(19,432,044,555,845,333),
    nOrigem(20,034,311,555,874,001),
]

console.log("");
console.log("Regiões de origem de cada pedido: ");

for(const _from of origens){
    if(_from.origem > 500){
        console.log(_from.numero + " Destino invalido");
    }
    else if( _from.origem > 400){
        console.log( _from.numero  + " Região Norte");
        
    }
    else if( _from.origem > 300){
        console.log(_from.numero + " Região Nordeste");
    }
    else if( _from.origem > 201){
        console.log(_from.numero + " Região Centro-Oeste");
    }
    else if( _from.origem > 100){
        console.log(_from.numero + " Região Sul");
    }
    else if( _from.origem > 001){
        console.log(_from.numero + " Região Sudeste");
    } 
    else{
        console.log (_from.numero + " Destino invalido");
    }
}
function oInvalido(_from){
    return _from.origem > 500 || _from.origem < 001;
}
function oNorte(_from){
return _from.origem > 400 && _from.origem <=499; ;
}
function oNordeste(_from){
return _from.origem > 300 && _from.origem <= 399;
}
function oCentroOeste(_from){
return _from.origem > 201 && _from.origem <=299;
}
function oSul(_from){
return _from.origem > 100 && _from.origem <= 199;
    }
function oSudeste(_from){
return _from.origem > 001 && _from.origem <= 099;
}
let origemInvalida = origens.filter(oInvalido);
let origemNorte = origens.filter(oNorte);
let origemNordeste = origens.filter(oNordeste);
let origemCentroOeste = origens.filter(oCentroOeste);
let origemSul = origens.filter(oSul);
let origemSudesde = origens.filter(oSudeste)

console.log("");
console.log(" Número de pedidos com origem invalida: " + origemInvalida.length);
console.log(" Número de pedidos com origem para Norte: " + origemNorte.length);
console.log(" Número de pedidos com origem para o Nordeste: " + origemNordeste.length);
console.log(" Número de pedidos com origem para o Centro-Oeste: " + origemCentroOeste.length);
console.log(" Número de pedidos com origem para o Sul: " + origemSul.length);
console.log(" Número de pedidos com origem para o Sudeste: " + origemSudesde.length);


// 3 -  Identificar os pacotes que têm como origem a região Sul e Brinquedos em seu conteúdo;

console.log("");
console.log("Pacotes com origem da regiâo Sul");
console.log(origemSul);
console.log("Nenhum produto com origem na regiâo sul possui brinquedos no seu conteúdo");

// 4. Listar os pacotes agrupados por região de destino (Considere apenas pacotes válidos);

console.log("Pedidos para o Norte:");
console.log( pedidosNorte);

console.log("Pedidos para o Nordeste:");
console.log( pedidosNordeste);

console.log("Pedidos para o Centro-Oeste:");
console.log( "Sem pedido valido");
// O pedido 11 possui a origem invalida.

console.log("Pedidos para o Sul:");
var novoarray = pedidosSul.filter((item)=> item.numero !==5)
console.log( novoarray);

console.log("Pedidos para o Sudeste:");
console.log( pedidosSudesde);

// 5 - Listar o número de pacotes enviados por cada vendedor (Considere apenas pacotes válidos);

function vendedor1(pedido){
    return pedido.cVendedor == 123;
}
function vendedor2(pedido){
    return pedido.cVendedor == 124;
}
function vendedor3(pedido){
    return pedido.cVendedor == 584;
}
function vendedor5(pedido){
    return pedido.cVendedor == 874;
}
function vendedor6(pedido){
    return pedido.cVendedor == 845;
}
const pedidosVendedor1 = pedidos.filter(vendedor1);
const pedidosVendedor2 = pedidos.filter(vendedor2);
const pedidosVendedor3 = pedidos.filter(vendedor3);
const pedidosVendedor5 = pedidos.filter(vendedor5);
const pedidosVendedor6 = pedidos.filter(vendedor6);

console.log("");
console.log("Pedidos filtrados por vendedor");
console.log("Pedidos do vendedor 123:");
var novoarrayV1 = pedidosVendedor1.filter((item)=> item.numero !==11)
console.log( novoarrayV1);
console.log("Pedidos do vendedor 124:");
console.log(pedidosVendedor2);
console.log("Pedidos do vendedor 584:");
console.log(pedidosVendedor3);
console.log("Pedidos do vendedor 874:");
console.log(pedidosVendedor5);
console.log("Pedidos do vendedor 845:");
console.log(pedidosVendedor6);


// 6 - Gerar lista de padotes por tipo de produto
function brinquedos(pedido){
    return pedido.tProduto == 888;
}
function bebidas(pedido){
    return pedido.tProduto == 555;
}
function eletronicos(pedido){
    return pedido.tProduto == 333;
}
function livros(pedido){
    return pedido.tProduto == 111;
}
function joias(pedido){
    return pedido.tProduto == 001;
}
function invalidoProduto(pedido){
    return pedido.tProduto == 777;
}

let pedidosBrinquedo = pedidos.filter(brinquedos);
let pedidosBebidas = pedidos.filter(bebidas);
let pedidosEletronicos = pedidos.filter(eletronicos);
let pedidosLivros = pedidos.filter(livros);
let pedidosJoias = pedidos.filter(joias);
let pedidosPInvalido = pedidos.filter(invalidoProduto);

console.log("");
console.log("Paotes por destino com brinquedos:")
console.log(pedidosBrinquedo);
console.log("Paotes por destino com bebidas:")
console.log(pedidosBebidas);
console.log("Pacotes por destino com eletronicos:")
var novoarrayE = pedidosEletronicos.filter((item)=> item.numero !==13)
console.log( novoarrayE);
console.log("Pacotes por destino com livros:")
console.log(pedidosLivros);
console.log("Pacotes por destino com joias:")
var novoarrayJ = pedidosJoias.filter((item)=> item.numero !==11)
console.log( novoarrayJ);

// 7 - Se o transporte dos pacotes para o Norte passa pela Região Centro-Oeste, quais são os pacotes que devem ser despachados no mesmo caminhão?

console.log("Pedidos despachados no mesmos caminhão:");
console.log( pedidosNorte);

// 8. Se todos os pacotes fossem uma fila qual seria a ordem de carga para o Norte no caminhão para descarregar os pacotes da Região Centro Oeste primeiro;
console.log("");
console.log("A ordem para o descarregamento é o pedido 17 e depois o pedido 16");

var novoArrayNorte1 = pedidosNorte.filter((item)=> item.numero !==16)
console.log( novoArrayNorte1);
var novoArrayNorte2 = pedidosNorte.filter((item)=> item.numero !==17)
console.log( novoArrayNorte2);


// 10 - Identificando os pedidos invalidos
//Peguei o numero de cada pedido como um array, de acordo com o que o torna invalido.
console.log("");
console.log("Pacotes Invalidos");
console.log(pedidosInvalidos, origemInvalida, pedidosPInvalido);

// 2 - Saber quais pacotes possuem códigos de barras válidos e/ou inválidos;
console.log("");
console.log("Pacotes Validos");
console.log(pedidosNorte, pedidosNordeste, pedidosSudesde, novoarray);

console.log("Pacotes Invalidos");
console.log(pedidosInvalidos, origemInvalida, pedidosPInvalido);