function deleteItemCarrinho(idItem){
	db.transaction((tx)=>{
		tx.executeSql('DELETE FROM carrinho WHERE idProduto='+idItem+'');
	}, errorDB);

	carrinho_view();
}

function efetuarCompra(){
	db.transaction((tx)=>{
		tx.executeSql('DELETE FROM carrinho');
	}, errorDB);

	voltar();
	mostrarProdutos();
}