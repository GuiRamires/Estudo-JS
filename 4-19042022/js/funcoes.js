//verificar qual a pagina que ira abrir este arquivo 
//javascript
//pega a url completa do navegado
var pagina = windons.location



pagina = pagina(pagina.length - 1);
console.log(pagina);

if(pagina == "home.html"){
     /*
     acessar a caixa(imput) chamada números , capturar 
     esses números e ultilizar a funções maior para 
     encontrar o maior valor entre eles.
     */

     //referenciar um elemento de input de tela home 
     const txtN = document.getElementById("texN");
     //aplicar um evento chamado onblur, ou seja ,
     // quando a caixa perder o foco
     txtN.onblur = function(){
         //vamos capturar o valor contido em 
         //txtN , ou seja os números dentro
         //desta caixa e alocar em um array
         var valores = txtN.values.split(",");
         alert(maior(valores));
     }

}
 var m = numeros[0];