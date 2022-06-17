// estas variebles seran las que alamacenen la suma de los arreglos
var sumar = 0;
var sumar1 = 0;

var original = [1, 2, 3, 4, 5, 6];
var parametro = 4;
let aFiltrados=[]
let filtradosMenor =[]

for (let i = 0; i<original.length; i++) {

  let  number = original[i];

  if (number > parametro) {
      aFiltrados.push(number)
    }
  
    // Aplico el ejercisio numero 4 aca mismo con un arreglo filtradosMenor
    
    if(number < parametro){
      filtradosMenor.push(number)
    }
  
}
// esto me suma los numero filtrados
for(let i = 0; i < aFiltrados.length; i++){
  sumar += aFiltrados[i];
}


console.log('arreglo original:');
console.log( original);

console.log('Nuevo arreglo:');
console.log(aFiltrados);
console.log("la suma de los nuermo filtrados es: " + sumar);
console.log('Numeros menor al dato establecido: ')
console.log(filtradosMenor);


