function telaCadastroCarro(){
 	/*
 	$("#menu").hide();
   $("#addEstoque").show();
	*/
 	voltar();
	$("#addEstoque").show();
    //if(!$("#addEstoque").is(':visible')){
	    //Deixa somente o carrinho aparecento
}

function addAoCarrinho(){
 	voltar();
    $("#addCarrinho").show();    
}

function mostrarProdutos(){
 	//Faz SELECT na tabela produto
 	produto_view();
 	/*
 	$("#menu").hide();
 	$("#carrosLista").show();
	*/

 	voltar();
	$("#carrosLista").show();
 	//if(!$("#carrosLista").is(':visible')){
	    //Deixa somente o carrinho aparecento

}

function mostrarCarrinho(){
 	//Faz SELECT na tabela carrinho
 	carrinho_view();
 	
 	if(!$("#carrinho").is(':visible')){
	    //Deixa somente o carrinho aparecento
		$("#carrinho").show();
 	}else voltar();
}

function voltar(){
  	//$("#menu").show();
  	$("#addEstoque").hide();
  	$("#addCarrinho").hide();
  	$("#carrosLista").hide();
    $("#carrinho").hide();
}