/*
As orientacoes a seguir foram extraidas do site do NPMJS: https://www.npmjs.com/package/xmlhttprequest
Here's how to include the module in your project and use as the browser-based XHR object.
Note: use the lowercase string "xmlhttprequest" in your require(). On case-sensitive systems (eg Linux) using uppercase letters won't work.
*/
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var request = new XMLHttpRequest();

var token = "Token_enviado_pelo_suporte";

// Substituir pela sua identificação interna da nota.
var ref = "12345";

/*
Para ambiente de producao use a URL abaixo:
"https://api.focusnfe.com.br"
*/
var url = "https://homologacao.focusnfe.com.br/v2/nfe?ref=" + ref;

/* 
Use o valor 'false', como terceiro parametro para que a requisicao aguarde a resposta da API
Passamos o token como quarto parametro deste metodo, como autenticador do HTTP Basic Authentication.
*/
request.open('POST', url, false, token);

var nfe = {
"natureza_operacao": "Remessa",
"data_emissao": "2018-03-21T11:00:00",
"data_entrada_saida": "2018-03-21T11:00:00",
"tipo_documento": "1",
"finalidade_emissao": "1",
"cnpj_emitente": "51916585000125",
"nome_emitente": "ACME LTDA",
"nome_fantasia_emitente": "ACME LTDA",
"logradouro_emitente": "R. Padre Natal Pigato",
"numero_emitente": "100",
"bairro_emitente": "Santa Felicidade",
"municipio_emitente": "Curitiba",
"uf_emitente": "PR",
"cep_emitente": "82320030",
"inscricao_estadual_emitente": "1234567",
"nome_destinatario": "NF-E EMITIDA EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL",
"cpf_destinatario": "51966818092",
"telefone_destinatario": "1196185555",
"logradouro_destinatario": "Rua S\u00e3o Janu\u00e1rio",
"numero_destinatario": "99",
"bairro_destinatario": "Crespo",
"municipio_destinatario": "Manaus",
"uf_destinatario": "AM",
"pais_destinatario": "Brasil",
"cep_destinatario": "69073178",
"valor_frete": "0.0",
"valor_seguro": "0",
"valor_total": "47.23",
"valor_produtos": "47.23",
"modalidade_frete": "0",
"items": [
  	{
      "numero_item": "1",
      "codigo_produto": "1232",
      "descricao": "Cartu00f5es de Visita",
      "cfop": "6923",
      "unidade_comercial": "un",
      "quantidade_comercial": "100",
      "valor_unitario_comercial": "0.4723",
      "valor_unitario_tributavel": "0.4723",
      "unidade_tributavel": "un",
      "codigo_ncm": "49111090",
      "quantidade_tributavel": "100",
      "valor_bruto": "47.23",
      "icms_situacao_tributaria": "400",
      "icms_origem": "0",
      "pis_situacao_tributaria": "07",
      "cofins_situacao_tributaria": "07"
    }
  ]
};

// Aqui fazermos a serializacao do JSON com os dados da nota e enviamos atraves do metodo usado.
request.send(JSON.stringify(nfe));

// Sua aplicacao tera que ser capaz de tratar as respostas da API.
console.log("HTTP code: " + request.status);
console.log("Corpo: " + request.responseText);
