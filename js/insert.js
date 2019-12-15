//====================== INICIO INSERT CARRINHO =======================
function carrinho_insert(){
	db.transaction(carrinho_insert_db, errorDB, successDB);
}

function carrinho_insert_db(tx) {
	var idCarro = $("#idCarro").val();
	var qtd = $("#qtdAddCarrinho").val();

	alert(idCarro+" "+qtd);
	alert(existe(idCarro));

	if(existe(idCarro)>0){
		tx.executeSql('REPLACE INTO carrinho(qtdNoCarrinho) VALUES ('+qtd+') WHERE id='+idCarro);
	}else{
		tx.executeSql('INSERT INTO carrinho(idProduto, qtdNoCarrinho) VALUES('+idCarro+', '+ qtd +')');
	}
	//agenda_view();
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
	alert("KAJSD");
	//db.transaction(carrinho_insert_db, errorDB, successDB);
}

function produto_insert_db(tx){
	var nomeProd = $("#nomeCarro").val();
	var qtdProd = $("#qtdCarro").val();
	var valorProd = $("#precoCarro").val();

	alert(nomeProd+"\n"+qtdProd+"\n"+valorProd);

	tx.executeSql('INSERT INTO produto(nome, qtd, preco) VALUES("'+nomeProd+'", '+ qtdProd +', '+ valorProd +')');
	
	voltar();
}