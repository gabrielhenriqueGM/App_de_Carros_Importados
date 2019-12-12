var db = window.openDatabase("Carro", "1.0", "VendaDeCarro", 5000);
db.transaction(createDB, errorDB, successDB);
//document.addEventListener("deviceready", onDeviceReady, false); Descomentar essa linha quand fazer o app


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