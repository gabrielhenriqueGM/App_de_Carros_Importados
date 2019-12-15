function mostrarInserir(){
 	$("#menu").hide();
    $("#caixaInsercao").show();    
}
function mostrarLista(){
 	$("#menu").hide();
 	$("#carrosLista").show();
}
function mostrarCarrinho(){
 	$("#menu").hide();
 	$("#carrinhoLista").show();
}
 function voltar(){
  	$("#menu").show();
  	$("#carrosLista").hide();
  	$("#caixaInsercao").hide();
  	$("#carrinhoLista").hide();
}