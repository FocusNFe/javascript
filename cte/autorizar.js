/*
As orientacoes a seguir foram extraidas do site do NPMJS: https://www.npmjs.com/package/xmlhttprequest
Here's how to include the module in your project and use as the browser-based XHR object.
Note: use the lowercase string "xmlhttprequest" in your require(). On case-sensitive systems (eg Linux) using uppercase letters won't work.
*/
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var request = new XMLHttpRequest();

var token = "Token_enviado_pelo_suporte";

// Substituir pela sua identificação interno do CTe.
var ref = "12345";

/*
Para ambiente de producao use a URL abaixo:
"https://api.focusnfe.com.br"
*/
var url = "https://homologacao.focusnfe.com.br/v2/cte_os?ref=" + ref;

/* 
Use o valor 'false', como terceiro parametro para que a requisicao aguarde a resposta da API.
Passamos o token como quarto parametro deste metodo, como autenticador do HTTP Basic Authentication.
*/
request.open('POST', url, false, token);

var cte = {  
   "bairro_emitente":"S\u00e3o Cristov\u00e3o",
   "bairro_tomador":"Bacacheri",
   "cep_emitente":"99880077",
   "cep_tomador":"88991188",
   "cfop":"5353",
   "cnpj_emitente":"51916585000125",
   "cnpj_tomador":"51966818092777",
   "codigo_municipio_emitente":"2927408",
   "codigo_municipio_envio":"5200050",
   "codigo_municipio_fim":"3100104",
   "codigo_municipio_inicio":"5200050",
   "codigo_municipio_tomador":"4106902",
   "codigo_pais_tomador":"1058",
   "complemento_emitente":"Andar 19 - sala 23",
   "data_emissao":"2018-06-18T09:17:00",
   "descricao_servico":"Descricao do seu servico aqui",
   "documentos_referenciados":[  
      {  
         "data_emissao":"2018-06-10",
         "numero":"1",
         "serie":"1",
         "subserie":"1",
         "valor":"1.00"
      }
   ],
   "funcionario_emissor":"Nome do funcionario que fez a emissao",
   "icms_aliquota":"17.00",
   "icms_base_calculo":"1.00",
   "icms_situacao_tributaria":"00",
   "icms_valor":"0.17",
   "indicador_inscricao_estadual_tomador":"9",
   "inscricao_estadual_emitente":"12345678",
   "logradouro_emitente":"Aeroporto Internacional de Salvador",
   "logradouro_tomador":"Rua Jo\u00e3o Dalegrave",
   "modal":"02",
   "municipio_emitente":"Salvador",
   "municipio_envio":"Abadia de Goi\u00e1s",
   "municipio_fim":"Abadia dos Dourados",
   "municipio_inicio":"Abadia de Goi\u00e1s",
   "municipio_tomador":"Curitiba",
   "natureza_operacao":"PREST. DE SERV. TRANSPORTE A ESTAB. COMERCIAL",
   "nome_emitente":"ACME LTDA",
   "nome_fantasia_emitente":"ACME",
   "nome_fantasia_tomador":"Nome do tomador do servico aqui",
   "nome_tomador":"NF-E EMITIDA EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL",
   "numero_emitente":"S/N",
   "numero_fatura":"1",
   "numero_tomador":"1",
   "pais_tomador":"BRASIL",
   "quantidade":"1.00",
   "seguros_carga":[  
      {  
         "nome_seguradora":"Nome da seguradora aqui",
         "numero_apolice":"12345",
         "responsavel_seguro":4
      }
   ],
   "telefone_emitente":"4133336666",
   "tipo_documento":0,
   "tipo_servico":6,
   "uf_emitente":"BA",
   "uf_envio":"GO",
   "uf_fim":"MG",
   "uf_inicio":"GO",
   "uf_tomador":"PR",
   "valor_desconto_fatura":"0.00",
   "valor_inss":"0.10",
   "valor_liquido_fatura":"1.00",
   "valor_original_fatura":"1.00",
   "valor_receber":"1.00",
   "valor_total":"1.00",
   "valor_total_tributos":"0.00"
};

// Aqui fazermos a serializacao do JSON com os dados do CTe e enviamos para API.
request.send(JSON.stringify(cte));

// Sua aplicacao tera que ser capaz de tratar as respostas da API.
console.log("HTTP code: " + request.status);
console.log("Corpo: " + request.responseText);
