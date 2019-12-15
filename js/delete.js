function delProdCarrinho(idItem){
	parseInt(idItem);
	db.transaction((tx)=>{
		alert("Value "+idItem+"\nTipo "+typeof idItem)
		tx.executeSql('DELETE FROM carrinho WHERE idProduto='+idItem);
	}, errorDB);

	carrinho_view();
}

function deleteItemCarrinho(idItem){
	db.transaction((tx)=>{
		tx.executeSql('DELETE FROM carrinho WHERE idProduto='+idItem+'');
	}, errorDB);
}

function efetuarCompra(){
	db.transaction((tx)=>{
		tx.executeSql('DELETE FROM carrinho', errorDB);
	}, errorDB);	
}