function mostrarInserir(){
 	$("#menu").hide();
    $("#caixaInsercao").show();    
}

function addCarrinho(){
 	$("#menu").hide();
    $("#addCarrinho").show();    
}

function mostrarLista(){
 	$("#menu").hide();
 	$("#carrosLista").show();
}
function mostrarCarrinho(){
 	$("#menu").hide();
 	$("#carrinho").show();

 	//Faz SELECT na tabela carrinho
 	carrinho_view();
}
 function voltar(){
  	$("#menu").show();
  	$("#carrosLista").hide();
  	$("#caixaInsercao").hide();
  	$("#carrinho").hide();
    $("#addCarrinho").hide();
}