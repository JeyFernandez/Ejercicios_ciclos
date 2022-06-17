
var personas = [
  { nombre: 'Pedro', sexo: 'M' },
  { nombre: 'Josseling', sexo: 'F' },
  { nombre: 'Jose', sexo: 'M' },
  { nombre: 'Juana', sexo: 'F' },
];

var new_personas = [];

for (var i = 0; i < personas.length; i++) {

  if (personas[i].sexo == 'M') {
    new_personas.push({nombre: 'Sr. ' + personas[i].nombre});
  } else {
    new_personas.push({nombre: 'Srta. ' + personas[i].nombre});
  }
}

console.log('Arreglo', personas);
console.log('Nuevo Arreglo', new_personas);
