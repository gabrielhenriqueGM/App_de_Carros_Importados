produto_view();

function telaCadastroCarro(){
 	voltar();
	$("#addEstoque").show();
}

function addAoCarrinho(id, nome){
	$('#idCarro').val(id);
	$('#nomeCarroEscolhido').empty()
	$('#nomeCarroEscolhido').append(nome);
 	voltar();
    $("#addCarrinho").show();    
}

function mostrarProdutos(){
 	//Faz SELECT na tabela produto
 	produto_view();
 	voltar();
	$("#carrosLista").show();
}

function mostrarCarrinho(){
 	//Faz SELECT na tabela carrinho
 	carrinho_view();
 	
 	if(!$("#carrinho").is(':visible')){
		$("#carrinho").show();
 	}else $("#carrinho").hide();
}

function voltar(){
  	//$("#menu").show();
  	$("#addEstoque").hide();
  	$("#addCarrinho").hide();
  	$("#carrosLista").hide();
    $("#carrinho").hide();
}