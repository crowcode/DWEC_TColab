function Cafetera(){
  capacidadMaxima = 100;
  capacidadActual = 0;
  this.actualizarCantidad = function(cant){

  }
  this.llenarCafetera = function(){
    capacidadActual = capacidadMaxima;
    document.getElementById('totalcant').innerHTML = "Cantidad: " + capacidadActual;
  };
  this.vaciarCafetera = function(){
    capacidadActual = 0;
    document.getElementById('totalcant').innerHTML = "Cantidad: " + capacidadActual;
  };
  this.servirTaza = function(cant){
    if(cant < capacidadActual){
      //Si hay sufieciente para servir las tazas
      capacidadActual -= cant;
    }else{
      //Si no servimos las que se puedan
      capacidadActual = 0;
    }
    document.getElementById('totalcant').innerHTML = "Cantidad: " + capacidadActual;
  }

}

window.onload = function(){
var cafetera = new Cafetera(100,10);
var botones = document.getElementsByTagName('button');
botones[0].addEventListener('click', cafetera.llenarCafetera, false);
botones[1].addEventListener('click', function (){
  var cant = prompt("Introduzca cantidad para servir");
  cafetera.servirTaza(cant);
}, false);
botones[2].addEventListener('click', cafetera.vaciarCafetera,false);
};
