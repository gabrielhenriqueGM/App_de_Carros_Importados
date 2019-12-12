var db = window.openDatabase("Carro", "1.0", "VendaDeCarro", 5000);
db.transaction(createDB, errorDB, successDB);
//document.addEventListener("deviceready", onDeviceReady, false);


function onDeviceReady() {
	db.transaction(createDB, errorDB, successDB);
}


// Trata erro de criação do Banco de Dados
function errorDB(err) {
	alert("Erro: " + err.message);
	console.log(err)
}


// Executa se criou o Banco de Dados com sucesso
function successDB() {
	alert("Deu tudo bem");
}


//Cria a tabela se a mesma não existir    
function createDB(tx) {
	var inserido=0;
	tx.executeSql('CREATE TABLE IF NOT EXISTS produto(id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(50), qtd INTEGER, valor FLOAT(10))');
	
	db.transaction(function(tx){
		tx.executeSql('SELECT (SELECT COUNT(*) FROM produto WHERE id = 1) > 0 as tamanho;', [], function(tx, results){
			inserido = parseInt(results.rows.item(0).tamanho);
		}, errorDB);
	}, errorDB);

	//========== INSERÇÃO DE PRODUTOS PRE DEFINIDOS
	if(inserido=0){
		tx.executeSql('INSERT INTO produto(nome, qtd, valor) VALUES'+
			'("Ferrary", 10, 1500000),'+
			'("Lamborguine", 5, 100000),'+
			'("Uno Turbo", 4, 5000),'+
			'("Mobi", 2, 7000),'+
			'("Batmovel", 4, 54),'+
			//'("")'+
			'("HotWheels", 100, 15)'
		);
	}
	
	tx.executeSql('CREATE TABLE IF NOT EXISTS carrinho(idProduto INTEGER, qtdNoCarrinho INTEGER, CONSTRAINT fk_id_carro FOREIGN KEY(idProduto) REFERENCES produto(id))');
}

function carrinho_insert(){
	db.transaction(carrinho_insert_db, errorDB, successDB);
}

//====================== INICIO INSERT CARRINHO =======================
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

/*
(tx) {
	var nome = $("#agenda_nome").val();
	var tel = $("#agenda_telefone").val();
	tx.executeSql('INSERT INTO Agenda (nome, tel) VALUES ("' + nome + '", "' + tel + '")');
	agenda_view();

}

function agenda_delete(agenda_id) {
	/*
	navigator.notification.confirm(
                'Você conseguiu!!!', //Mensagem
                onCofirm, //Retorno pra verificar a ordem do botão escolhido
                'Fim de Jogo', // Titulo
                ['Reiniciar', 'Sair', 'Ok'] //Limnha de Botões
            );
    *//*
	if(confirm("Deseja excluit?")){
		$("#agenda_id_delete").val(agenda_id);
		db.transaction(agenda_delete_db, errorDB, successDB);
	}
}

function agenda_delete_db(tx) {
	var agenda_id_delete = $("#agenda_id_delete").val();
	tx.executeSql("DELETE FROM agenda WHERE id=" + agenda_id_delete);
	agenda_view();

}

function agenda_update_abrir_tela(id, nome, tel){
	$("#tela_padrao").hide();//Esconde a tela inicial
	$("#tela_edicao").show();//Mostra a tela de edicao

	alert(nome+" "+tel);
	window.setTimeout(function(){
		document.getElementById('agenda_nome_update').value = nome;
		document.getElementById('agenda_telefone_update').value = tel;
	}, 0);
	

	var agenda_nome_update = $("#agenda_item"+id+" .agenda_info h3").html();
	var agenda_nome_update = $("#agenda_tem_"+id+" .agenda_info h5").html();

	$("#agenda_id_update").val(id);
	$("#agenda_nome_update").val(agenda_nome_update);
	$("#agenda_telefone_update").val(agenda_nome_update);
}

function agenda_update_fechar_tela(){
	$("#tela_padrao").show();//Esconde a tela inicial
	$("#tela_edicao").hide();//Mostra a tela de edicao
}

function agenda_update(){
	db.transaction(agenda_update_db, errorDB, successDB);
}

function agenda_update_db(tx){
	var agenda_id_novo = $("#agenda_id_update").val();
	var agenda_nome_novo = $("#agenda_nome_update").val();
	var agenda_telefone_novo = $("#agenda_telefone_update").val();
	
	tx.executeSql('UPDATE Agenda SET nome = "'+agenda_nome_novo+'", tel = "'+agenda_telefone_novo+'" WHERE id = "'+agenda_id_novo+'"');

	agenda_update_fechar_tela();
	agenda_view();
}

function agenda_view() {
	db.transaction(agenda_view_db, errorDB, successDB);
}
function agenda_view_db(tx) {
	tx.executeSql('SELECT * FROM Agenda', [], agenda_view_data, errorDB);
}
function agenda_view_data(tx, results) {
	$("#agenda_listagem").empty();
	var len = results.rows.length;

	for (var i = 0; i < len; i++) {
		$("#agenda_listagem").append("<tr class='agenda_item_lista'>" +
			"<td><h5>" + results.rows.item(i).nome + "</h5></td>" +
			"<td><h5>" + results.rows.item(i).tel + "</h5></td>" +
			"<td><input type='button' class='btn btn-lg btn-danger' value=' X ' onclick='agenda_delete(" + results.rows.item(i).id + ")'>" +
			"<td><input type='button' class='btn btn-lg btn-warning' value=' E ' onclick='agenda_update_abrir_tela("
				+results.rows.item(i).id+",\""
				+ results.rows.item(i).nome+"\", "
				+ results.rows.item(i).tel
				+");'/>"
				+"</td>"
			+"</tr>");
	}
}

*/