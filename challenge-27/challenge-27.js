/*
Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
métodos semelhantes aos que existem no array, mas que sirvam para os
elementos do DOM selecionados.
Crie os seguintes métodos:
- forEach, map, filter, reduce, reduceRight, every e some.

Crie também métodos que verificam o tipo do objeto passado por parâmetro.
Esses métodos não precisam depender de criar um novo elmento do DOM, podem
ser métodos estáticos.

Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
no objeto, como nos exemplos abaixo:
DOM.isArray([1, 2, 3]); // true
DOM.isFunction(function() {}); // true
DOM.isNumber('numero'); // false

Crie os seguintes métodos para verificação de tipo:
- isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
O método isNull deve retornar `true` se o valor for null ou undefined.
*/


(function(win, doc){

    function DOM(elemento){
        this.element = doc.querySelectorAll(elemento);
    }
    DOM.prototype.on = function on(evento, callback){
        Array.prototype.forEach.call(this.element, function(item){
             item.addEventListener(evento, callback, false);
         });
    }
    DOM.prototype.off = function off(evento, callback){
        Array.prototype.forEach.call(this.element, function(item){
            item.removeEventListener(evento, callback);
        });
    }
    DOM.prototype.get = function get(){
        return this.element;
    }
    DOM.prototype.forEach = function forEach(callback){
        Array.prototype.forEach.call(this.element, callback);
    }
    DOM.prototype.map = function map(callback){
        Array.prototype.map.call(this.element, callback);
    }
    DOM.prototype.filter = function filter(callback){
        Array.prototype.filter.call(this.element, callback);
    }
    DOM.prototype.reduce = function filter(callback){
        Array.prototype.reduce.call(this.element, callback);
    }
    DOM.prototype.reduceRight = function reduceRight(callback){
        Array.prototype.reduceRight.call(this.element, callback);
    }
    DOM.prototype.every = function every(callback){
        Array.prototype.every.call(this.element, callback);
    }
    DOM.prototype.some = function some(callback){
        Array.prototype.some.call(this.element, callback);
    }

    function getTipo(elemento){
        return Object.prototype.toString.call(elemento);
    }
    var $a = new DOM('[data-js="link"]');
    $a.on('click', function(e) {
      e.preventDefault();
      console.log('clicou');
    });

    DOM.isArray = function(elemento){
        return getTipo(elemento) == '[object Array]';
    }

    DOM.isFunction = function(elemento){
        return getTipo(elemento) == '[object Function]';
    }

    DOM.isObject = function(elemento){
        return getTipo(elemento) == '[object Object]';
    }
    DOM.isNumber = function(elemento){
        return getTipo(elemento) == '[object Number]';
    }

    DOM.isString = function(elemento){
        return getTipo(elemento) == '[object String]';
    }
    DOM.isBoolean = function(elemento){
        return getTipo(elemento) == '[object Boolean]';
    }
    DOM.isNull = function(elemento){
        return getTipo(elemento) =='[object Null]' || getTipo(elemento) == '[object Undefined]';
    }

    console.log(DOM.isNull(null));


    
    console.log('Elementos selecionados:', $a.get());
    console.log('$a é filho de body?', $a.get()[0].parentNode === document.body);

})(window, document);
