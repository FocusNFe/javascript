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
var url = "https://homologacao.focusnfe.com.br/v2/nfce?ref=" + ref;

/* 
Use o valor 'false', como terceiro parametro para que a requisicao aguarde a resposta da API
Passamos o token como quarto parametro deste metodo, como autenticador do HTTP Basic Authentication.
*/
request.open('POST', url, false, token);

var nfce = {
"natureza_operacao":"VENDA AO CONSUMIDOR",
"data_emissao":"2018-03-21T11:52:00-03:00",
"tipo_documento":"1",
"presenca_comprador":"1",
"consumidor_final":"1",
"finalidade_emissao":"1",
"cnpj_emitente":"51916585000125",
"nome_destinatario":"",
"cpf_destinatario":"",
"informacoes_adicionais_contribuinte":"RETIRADA POR CONTA DO DESTINATÁRIO",
"valor_produtos":"1.00",
"valor_desconto":"0.00",
"valor_total":"1.00",
"forma_pagamento":"0",
"icms_valor_total":"0",
"modalidade_frete": "9",
"items":[
    {"numero_item":"1",
     "codigo_ncm":"84713012",
     "codigo_produto":"999",
     "descricao":"NOTA FISCAL EMITIDA EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL",
     "quantidade_comercial":"1.00",
     "quantidade_tributavel":"1.00",
     "cfop":"5102",
     "valor_unitario_comercial":"1.00",
     "valor_unitario_tributavel":"1.00",
     "valor_bruto":"1.00",
     "unidade_comercial":"un",
     "unidade_tributavel":"un",
     "icms_origem":"2",
     "icms_situacao_tributaria":"102",
     "icms_aliquota":"0",
     "icms_base_calculo":"0",
     "icms_modalidade_base_calculo":"3"
    }        
  ],
    "formas_pagamento":[
        {"forma_pagamento":"1",
         "valor_pagamento":"1.00"
        }
    ]
};

// Aqui fazermos a serializacao do JSON com os dados da nota e enviamos atraves do metodo usado.
request.send(JSON.stringify(nfce));

// Sua aplicacao tera que ser capaz de tratar as respostas da API.
console.log("HTTP code: " + request.status);
console.log("Corpo: " + request.responseText);
