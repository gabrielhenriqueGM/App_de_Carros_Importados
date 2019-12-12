produto_view();

function produto_view() {
	db.transaction(produto_view_db, errorDB, successDB);
}
function produto_view_db(tx) {
	tx.executeSql('SELECT * FROM produto', [], produto_view_data, errorDB);
}
function produto_view_data(tx, results) {
	$("#agenda_listagem").empty();
	var len = results.rows.length;
	console.log(results);
	for (var i = 0; i < len; i++) {
		$("#produtos").append("<tr class='agenda_item_lista'>" +
			"<td><h5>" + results.rows.item(i).nome + "</h5></td>" +
			"<td><h5>" + results.rows.item(i).qtd + "</h5></td>" +
			"<td><h5>" + results.rows.item(i).valor + "</h5></td>" +
			/*"<td><input type='button' class='btn btn-lg btn-danger' value=' X ' onclick='agenda_delete(" + results.rows.item(i).id + ")'>" +
			"<td><input type='button' class='btn btn-lg btn-warning' value=' E ' onclick='agenda_update_abrir_tela("
				+results.rows.item(i).id+",\""
				+ results.rows.item(i).nome+"\", "
				+ results.rows.item(i).tel
				+");'/>"
				+"</td>"*/
			"</tr>");
	}
}