/*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:

- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;

- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/

<!doctype html>
<html>
    <head>
        <style>
            .botao{
                width: 50px;
                height: 50px;
            }

   

        </style>
          <meta charset="utf-8">
    </head>
    <body>
        <input disabled type="text"  data-js="resultado">
        <br>
        <br>
        <button type="button" class="botao botaoN" data-js="zero">0</button>
        <button type="button" class="botao botaoN" data-js="um">1</button>
        <button type="button" class="botao botaoN" data-js="dois">2</button>
        <button type="button" class="botao botaoN" data-js="tres">3</button>
        <button type="button" class="botao botaoN" data-js="quatro">4</button>
        <button type="button" class="botao botaoN" data-js="cinco">5</button>
        <button type="button" class="botao botaoN" data-js="seis">6</button>
        <button type="button" class="botao botaoN" data-js="sete">7</button>
        <button type="button" class="botao botaoN" data-js="oito">8</button>
        <button type="button" class="botao botaoN" data-js="nove">9</button>

        <br>
        <button type="button" class="botao botaoO" data-js="soma">+</button>
        <button type="button" class="botao botaoO" data-js="subtracao">-</button>
        <button type="button" class="botao botaoO" data-js="multiplicacao">*</button>
        <button type="button" class="botao botaoO" data-js="divisao">/</button>

        <br>
        <button type="button" class="botao" data-js="igual" style="height: 50px; width: 200px; font-size: 2.0em;">=</button>
        <br>
        <button type="button" class="botao" data-js="resetar">CE</button>

      <script src="challenge23.js"></script>
    </body>

</html>


(function(win, doc){
    var $inputResultado = doc.querySelector("[data-js='resultado']");
    $inputResultado.value = 0;
    var botoesNumeros = doc.querySelectorAll(".botaoN");
    var botoesOperadores = doc.querySelectorAll(".botaoO");
    var botaoReset = doc.querySelector("[data-js='resetar']");
    var botaoIgual = doc.querySelector("[data-js='igual']");
    
    function verificaSeTemOperador(){
        return $inputResultado.value.match(/[\+\-\/\*]\s$/);
    }

    function somar(operacao)
    {
        var array = operacao.match(/\d+\s\+\s\d+/g);
        array.forEach(function(item){
            var arrayOperacao = item.split(' ');
            var resultado = +arrayOperacao[0] + +arrayOperacao[2];
            var regex = new RegExp(arrayOperacao[0] + " \\+ " + arrayOperacao[2], "g");
            $inputResultado.value = $inputResultado.value.replace(regex, resultado);
        });
        
    }
        
    function multiplicar(operacao)
    {
        var array = operacao.match(/\d+\s\*\s\d+/g);
        array.forEach(function(item){
            var arrayOperacao = item.split(' ');
            var resultado = +arrayOperacao[0] * +arrayOperacao[2];
            var regex = new RegExp(arrayOperacao[0] + " \\* " + arrayOperacao[2], "g");
            $inputResultado.value = $inputResultado.value.replace(regex, resultado);
        });
    }
        
    function dividir(operacao)
    {
        var array = operacao.match(/\d+\s\/\s\d+/g);
        array.forEach(function(item){
            var arrayOperacao = item.split(' ');
            var resultado = +arrayOperacao[0] / +arrayOperacao[2];
            var regex = new RegExp(arrayOperacao[0] + " \\/ " + arrayOperacao[2], "g");
            $inputResultado.value = $inputResultado.value.replace(regex, resultado);
        });
        
    }
        
    function subtrair(operacao)
    {
        var array = operacao.match(/\d+\s\-\s\d+/g);
        array.forEach(function(item){
            var arrayOperacao = item.split(' ');
            var resultado = +arrayOperacao[0] - +arrayOperacao[2];
            var regex = new RegExp(arrayOperacao[0] + " \\- " + arrayOperacao[2] , "g");
            $inputResultado.value = $inputResultado.value.replace(regex, resultado);
        });
    }

    botaoReset.addEventListener("click", function(){
        $inputResultado.value = 0;
    });
    botaoIgual.addEventListener("click", function(){
        if(verificaSeTemOperador()){
            $inputResultado.value = $inputResultado.value.replace(/[\+\-\/\*]\s$/, "");
        }
    if($inputResultado.value.match(/\*/g))
        multiplicar($inputResultado.value);
    if($inputResultado.value.match(/\//g))
        dividir($inputResultado.value);
    if($inputResultado.value.match(/\-/g))
        subtrair($inputResultado.value);
    if($inputResultado.value.match(/\+/g))
        somar($inputResultado.value);

    });

    Array.prototype.forEach.call(botoesNumeros, function(item){
        item.addEventListener("click", function(){
            if($inputResultado.value.match(/[\+\-\/\*]\s0$/) || $inputResultado.value.match(/^0/)){
                $inputResultado.value =  item.textContent != 0 ? $inputResultado.value.replace(/\d$/, item.textContent): $inputResultado.value;
            }
            else{
                $inputResultado.value += item.textContent;
            }
            
        });
    });
    Array.prototype.forEach.call(botoesOperadores, function(item){
        item.addEventListener("click", function(){
            if(verificaSeTemOperador()){
            $inputResultado.value = $inputResultado.value.replace(/[\+\-\/\*]\s$/, item.textContent + " ");
            }
            else{
                $inputResultado.value += " " + item.textContent + " ";
            }

        });
    });
})(window, document);
