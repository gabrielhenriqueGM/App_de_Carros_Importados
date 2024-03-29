//====================== INICIO INSERT CARRINHO =======================
function carrinho_insert(){
	db.transaction(carrinho_insert_db, errorDB, successDB);
}

function carrinho_insert_db(tx) {
	var idCarro = $("#idCarro").val();
	var qtd = $("#qtdAddCarrinho").val();

	tx.executeSql('SELECT (SELECT COUNT(*) FROM carrinho WHERE idProduto = '+idCarro+') > 0 as tamanho', [], function(tx, results){
		resp = parseInt(results.rows.item(0).tamanho);
		
		tx.executeSql('SELECT qtd FROM produto WHERE id='+idCarro+'', [], function(tx, results){
			qtdEstoque = results.rows.item(0).qtd;
				if(resp>0){
					tx.executeSql('UPDATE carrinho SET qtdNoCarrinho='+qtd+' WHERE idProduto='+idCarro+'');
				}else{
					tx.executeSql('INSERT INTO carrinho(idProduto, qtdNoCarrinho) VALUES('+idCarro+', '+ qtd +')');
				}

				tx.executeSql('UPDATE produto SET qtd='+(qtdEstoque-qtd)+' WHERE id='+idCarro+'');
			
		}, errorDB);
	}, ()=>alert('Achei o erro'));
}

function existe(id){
	var existe;
	db.transaction(function(tx){
		tx.executeSql('SELECT (SELECT COUNT(*) FROM agenda WHERE id = '+id+') > 0 as tamanho;', [], function(tx, results){
			return parseInt(results.rows.item(0).tamanho);
		}, errorDB);
	}, errorDB);
}
//====================== FIM INSERT CARRINHO =======================

function produto_insert(){
	db.transaction(produto_insert_db, errorDB, successDB);
}

function produto_insert_db(tx){
	var nomeProd = $("#nomeCarro").val();
	var qtdProd = $("#qtdCarro").val();
	var valorProd = $("#precoCarro").val();

	tx.executeSql('INSERT INTO produto(nome, qtd, preco) VALUES("'+nomeProd+'", '+ qtdProd +', '+ valorProd +')');
}