  /*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."

  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */
(function(win, doc){

    var $botao = elementoDom("[data-js='botao']");
    var $status = elementoDom("[data-js='status']");
    var $cidade = elementoDom("[data-js='cidade']");
    var $estado = elementoDom("[data-js='estado']");
    var $bairro = elementoDom("[data-js='bairro']");
    var $logradouro = elementoDom("[data-js='logradouro']");
    var $cep2 = elementoDom("[data-js='cep2']");

    function elementoDom(Str){
        return doc.querySelector(Str);
    }



    function getCEP(){
        return doc.querySelector("[data-js='cep']").value;
    }

    function limparCep(cep){
        var regex = /\d+/g;
        return cep.match(regex).join("");
    }



    $botao.addEventListener("click", function(event){
        event.preventDefault();
        var ajax = new  XMLHttpRequest();
        var endereco = "https://viacep.com.br/ws/[CEP]/json/";
        var regex = /\[CEP\]/g;
        endereco = endereco.replace(regex, limparCep(getCEP()));
        ajax.open("GET", endereco)
        ajax.send(null);

        ajax.addEventListener("readystatechange", function(){
            $status.textContent = "Buscando informações para o CEP " + getCEP() + "...";
            
            if(ajax.status == 200 && ajax.readyState == 4){   
                var dados = JSON.parse(ajax.responseText);
                if(dados.localidade != undefined){
                    $status.textContent = "ENDEREÇO REFERENTE AO CEP: " + getCEP();       
                    $cidade.value = dados.localidade;
                    $estado.value = dados.uf;
                    $bairro.value = dados.bairro;
                    $cep2.value = dados.cep;
                    $logradouro.value = dados.logradouro;
                 }
                 else{
                    $status.textContent = "Não encontramos o endereço para o CEP: " + getCEP();
                 }
            }
            else{
                $status.textContent = "Não encontramos o endereço para o CEP: " + getCEP();
            }

        });
        
    })
    



})(window, document);
