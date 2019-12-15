function produto_view(){
	db.transaction(produto_view_db, errorDB, successDB);
}
function produto_view_db(tx) {
	tx.executeSql('SELECT * FROM produto', [], produto_view_data, errorDB);
}
function produto_view_data(tx, results) {
	$("#produtos").empty();
	var len = results.rows.length;
	console.log(results);
	for (var i = 0; i < len; i++) {
		exibeProduto(i, results);
	}
}

function carrinho_view() {
	db.transaction(carrinho_view_db, errorDB, successDB);
}
function carrinho_view_db(tx) {
	tx.executeSql('SELECT C.idProduto, P.nome, P.preco, C.qtdNoCarrinho FROM produto P, carrinho C WHERE P.id=C.idProduto', [], carrinho_view_data, errorDB);
}
function carrinho_view_data(tx, results) {
	$("#carrinhoDeCompras").empty();
	var total=0;
	for (var i = 0; i < results.rows.length; i++) {
		subtot = parseFloat(results.rows.item(i).qtdNoCarrinho)*parseFloat(results.rows.item(i).preco);
		$("#carrinhoDeCompras").append("<tr class='agenda_item_lista'>" +
			"<td><h5>" + results.rows.item(i).nome + "</h5></td>" +
			"<td><h5>" + results.rows.item(i).qtdNoCarrinho + "</h5></td>"+
			"<td><h5>" + results.rows.item(i).preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + "</h5></td>" +
			"<td><h5>" + subtot.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + "</h5></td>"+
			"<td><input type='button' value=' X ' onclick='deleteItemCarrinho("+ results.rows.item(i).idProduto + ")'/></td>" +
			"</tr>");
		total+=parseFloat(results.rows.item(i).qtdNoCarrinho)*parseFloat(results.rows.item(i).preco);
	}
	$('#carrinhoDeCompras').append('<tr>'+
		'<td>   </td>'+
		'<td>   </td>'+
		'<td><strong>Total</strong></td>'+
		'<td><h5>'+total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })+'</h5></td>'+
		'</tr>');
}

function exibeProduto(i, results){
	$("#produtos").append("<tr class='agenda_item_lista'>" +
			"<td><h5>" + results.rows.item(i).nome + "</h5></td>" +
			"<td><h5>" + results.rows.item(i).qtd + "</h5></td>" +
			"<td><h5>" + results.rows.item(i).preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + "</h5></td>" +
			"<td><input type='button' onclick='delProdCarrinho(" + results.rows.item(i).id + ")' value=' X '/></td>" +
			"</tr>");
}
