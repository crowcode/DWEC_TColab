function Cafetera(){
  capacidadMaxima = 100;
  capacidadActual = 0;

  this.llenarCafetera = function(){
    capacidadActual = capacidadMaxima;
    document.getElementById('totalcant').innerHTML = "Cantidad: " + capacidadActual;
  };
  this.vaciarCafetera = function(){
    capacidadActual = 0;
    document.getElementById('totalcant').innerHTML = "Cantidad: " + capacidadActual;
  };
  this.servirTaza = function(cant){
    if(cant <= capacidadActual){
      //Si hay suficiente.
      capacidadActual -= cant;
    }else{
      //Si no, servimos lo que se pueda.
      capacidadActual = 0;
    }

    document.getElementById('totalcant').innerHTML = "Cantidad: " + capacidadActual;
  }

}

window.onload = function(){
  var cafetera = new Cafetera(); //Creamos objeto
  var botones = document.getElementsByTagName('button');
  botones[0].addEventListener('click', cafetera.llenarCafetera, false);//Añadimos los listener a los botones
  botones[1].addEventListener('click', function (){
    var cant = prompt("Introduzca cantidad para servir");
    //Validamos si es un número o no
    if(!isNaN(cant) && cant>=0){
      cafetera.servirTaza(cant);
    }else{
      alert("Inserte un número positivo como cantidad");
    }
  }, false);
  botones[2].addEventListener('click', cafetera.vaciarCafetera,false);
};
