
let phrases = 'ana'


if (phrases == phrases.split("").reverse().join("")) {
  console.log('la Palabra '+ phrases +' Es correcta de atras hacia delante y viseversa: ');
} else {
  console.log('La palabra: ' + phrases +'es correcta al derecho y viseversa');
}
