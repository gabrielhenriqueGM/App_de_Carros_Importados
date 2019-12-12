//====================== INICIO INSERT CARRINHO =======================
function carrinho_insert(){
	db.transaction(carrinho_insert_db, errorDB, successDB);
}

function carrinho_insert_db(tx) {
	let idCarro = $("#agenda_nome").val();
	let qtd = $("#agenda_telefone").val();

	if(existe(idCarro)>0){
		tx.executeSql('REPLACE INTO carrinho(qtdNoCarrinho) VALUES ('+qtd+') WHERE id=idCarro');
	}else{
		tx.executeSql('INSERT INTO carrinho(idProduto, qtdNoCarrinho) VALUES('+idCarro+', '+ qtdNoCarrinho +')');
	}
	agenda_view();
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
	db.transaction(carrinho_insert_db, errorDB, successDB);
}

function produto_insert_db(tx) {
	let nomeProd = $("#agenda_nome").val();
	let qtdProd = $("#agenda_telefone").val();
	let valorProd = $("#agenda_telefone").val();

	tx.executeSql('INSERT INTO produto(nome, qtd, valor) VALUES('+nomeProd+', '+ qtdProd +', '+ valorProd +')');
	
	//agenda_view(); Função para atualizar os a view dos produtos
}