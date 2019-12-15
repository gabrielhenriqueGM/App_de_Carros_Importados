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
}

//Cria a tabela se a mesma não existir    
function createDB(tx){
	var inserido=0;
	tx.executeSql('CREATE TABLE IF NOT EXISTS produto(id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(50), qtd INTEGER, preco FLOAT(10))');
	tx.executeSql('CREATE TABLE IF NOT EXISTS carrinho(idProduto INTEGER, qtdNoCarrinho INTEGER, CONSTRAINT fk_id_carro FOREIGN KEY(idProduto) REFERENCES produto(id))');
	
	//Avalia se os produtos padrês já estão inserido
	db.transaction(function(tx){
		tx.executeSql('SELECT (SELECT COUNT(*) FROM produto) > 0 as tamanho', [], function(tx, results){
			inserido = parseInt(results.rows.item(0).tamanho);
			
			if(inserido===0)
			db.transaction((tx)=>{
				tx.executeSql('INSERT INTO produto(nome, qtd, preco) VALUES'+
				'("Ferrary", 10, 1500000),'+
				'("Lamborguine", 5, 100000),'+
				'("Uno Turbo", 4, 5000),'+
				'("Mobi", 2, 7000),'+
				'("Batmovel", 4, 54),'+
				//'("")'+
				'("HotWheels", 100, 14)'), (erro)=>alert("Erro no inser Produto defalaut")
			}, errorDB);

		
		}, errorDB);
	}, errorDB);

	//========== INSERÇÃO DE PRODUTOS PRE DEFINIDOS
	/*
	if(inserido==0){
		alert("Produtos inseridos? "+inserido);
		db.transaction((tx)=>{
				tx.executeSql('INSERT INTO produto(nome, qtd, preco) VALUES'+
					'("Ferrary", 10, 150000),'+
					'("Lamborguine", 5, 100000),'+
					'("Uno Turbo", 4, 5000),'+
					'("Mobi", 2, 7000),'+
					'("Batmovel", 4, 54),'+
					//'("")'+
					'("HotWheels", 100, 15)'
				, errorDB);
			}, errorDB);
	}
	*/
}