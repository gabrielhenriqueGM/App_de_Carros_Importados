function telaCadastroCarro(){
 	$("#menu").hide();
    $("#addEstoque").show();  
}

function addAoCarrinho(){
 	$("#menu").hide();
    $("#addCarrinho").show();    
}

function mostrarProdutos(){
 	//Faz SELECT na tabela produto
 	produto_view();

 	$("#menu").hide();
 	$("#carrosLista").show();

}

function mostrarCarrinho(){
 	//Faz SELECT na tabela carrinho
 	carrinho_view();
 	
 	if(!$("#carrinho").is(':visible')){
		$("#menu").hide();
		$("#carrinho").show();
 	}else{
 		$("#menu").show();
		$("#carrinho").hide();
 	}

}

function voltar(){
  	$("#menu").show();
  	$("#addEstoque").hide();
  	$("#addCarrinho").hide();
  	$("#carrosLista").hide();
    $("#carrinho").hide();
}