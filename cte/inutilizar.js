/*
As orientacoes a seguir foram extraidas do site do NPMJS: https://www.npmjs.com/package/xmlhttprequest
Here's how to include the module in your project and use as the browser-based XHR object.
Note: use the lowercase string "xmlhttprequest" in your require(). On case-sensitive systems (eg Linux) using uppercase letters won't work.
*/
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var request = new XMLHttpRequest();

var token = "Token_enviado_pelo_suporte";

/*
Para ambiente de producao use a URL abaixo:
"https://api.focusnfe.com.br"
*/
var url = "http://homologacao.acrasnfe.acras.com.br/v2/cte/inutilizacao";

/* 
Use o valor 'false', como terceiro parametro para que a requisicao aguarde a resposta da API
Passamos o token como quarto parametro deste metodo, como autenticador do HTTP Basic Authentication.
*/
request.open('POST', url, false, token);

var inutiliza = {
"cnpj": "14674451000119",
"serie": "1",
"numero_inicial": "700",
"numero_final": "703",
"justificativa": "Teste de inutilizacao de nota",
"modelo": 67
};

// Aqui fazermos a serializacao do JSON com os de inutilizacao e enviamos para API.
request.send(JSON.stringify(inutiliza));

// Sua aplicacao tera que ser capaz de tratar as respostas da API.
console.log("HTTP code: " + request.status);
console.log("Corpo: " + request.responseText);