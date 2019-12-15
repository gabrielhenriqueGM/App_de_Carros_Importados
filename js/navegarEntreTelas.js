function mostrarInserir(){
 	$("#menu").hide();
    $("#caixaInsercao").show();  
}

function addCarrinho(){
 	$("#menu").hide();
    $("#addCarrinho").show();    
}

function mostrarLista(){
 	//Faz SELECT na tabela produto
 	produto_view();

 	$("#menu").hide();
 	$("#carrosLista").show();

}
function mostrarCarrinho(){
 	//Faz SELECT na tabela carrinho
 	carrinho_view();

 	$("#menu").hide();
 	$("#carrinho").show();

}
 function voltar(){
  	$("#menu").show();
  	$("#carrosLista").hide();
  	$("#caixaInsercao").hide();
  	$("#carrinho").hide();
    $("#addCarrinho").hide();
}