/*
As orientacoes a seguir foram extraidas do site do NPMJS: https://www.npmjs.com/package/xmlhttprequest
Here's how to include the module in your project and use as the browser-based XHR object.
Note: use the lowercase string "xmlhttprequest" in your require(). On case-sensitive systems (eg Linux) using uppercase letters won't work.
*/
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var request = new XMLHttpRequest();

var token = "Token_enviado_pelo_suporte";

// Substituir pela sua identificação interna da nota
var ref = "12345";

/*
Para ambiente de producao use a URL abaixo:
"https://api.focusnfe.com.br"
*/
var url = "http://homologacao.acrasnfe.acras.com.br/v2/nfse?ref=" + ref;

/* 
Use o valor 'false', como terceiro parametro para que a requisicao aguarde a resposta da API
Passamos o token como quarto parametro deste metodo, como autenticador do HTTP Basic Authentication.
*/
request.open('POST', url, false, token);

var nfse = {  
   "data_emissao":"2018-03-21",
   "prestador":{  
      "cnpj":"51916585000125",
      "inscricao_municipal":"12345",
      "codigo_municipio":"3518800"
   },
   "tomador":{  
      "cnpj":"07504505000132",
      "razao_social":"Acras Tecnologia da Informacao LTDA",
      "email":"contato@acras.com.br",
      "endereco":{  
         "logradouro":"Rua Filho da Rocha Bage",
         "numero":"750",
         "complemento":"Sala 07",
         "bairro":"Alto da Rua XV",
         "codigo_municipio":"4106902",
         "uf":"PR",
         "cep":"80045165"
      }
   },
   "servico":{  
      "aliquota":3,
      "discriminacao":"Nota fiscal referente a servicos prestados",
      "iss_retido":"false",
      "item_lista_servico":"1401",
      "codigo_tributario_municipio": "452000100",
      "valor_servicos":1.0
   }
};

// Aqui fazermos a serializacao do JSON com os dados da nota e enviamos atraves do metodo usado.
request.send(JSON.stringify(nfse));

// Sua aplicacao tera que ser capaz de tratar as respostas da API.
console.log("HTTP code: " + request.status);
console.log("Corpo: " + request.responseText);