// Funcion para cifrar la palabra
function cipher(word) {
  // ejecucion si solo es una palabra
  if(typeof(word)==='string'){
    // variable de salida
    var output= '';
    // recorrido en word
    for(i=0; i<word.length;i++){
      // convirtiendo word en lenguaje ascii
      var code= word.charCodeAt(i);
      var code2= word[i];
      // analizando las letras mayusculas A= 65 Y Z= 90
      if((code>= 65) && (code <=90)){
        // ejecutando los 33 espacios y convirtiendo de lenguaje ascii a letra
        code2=String.fromCharCode(((code - 65 +33) % 26) + 65);
      }
      // analizando las letras minusculas
      else if((code>= 97) && (code <=122)){
        code2=String.fromCharCode(((code - 97 +33) % 26) + 97);
      }
      output+=code2
    }
    return output
  }
  else{
    console.log('ingresa una palabra')
  }
}
console.log(cipher('meli'));// tlsp

// funcion para descifrar
function cipher(word) {
  // ejecucion si solo es una palabra
  if(typeof(word)==='string'){
    // variable de salida
    var output= '';
    // recorrido en word
    for(i=0; i<word.length;i++){
      // convirtiendo word en lenguaje ascii
      var code= word.charCodeAt(i);
      var code2= word[i];
      // analizando las letras mayusculas A= 65 Y Z= 90
      if((code>= 65) && (code <=90)){
        // ejecutando los 33 espacios y convirtiendo de lenguaje ascii a letra
        code2=String.fromCharCode(((code - 65 -33) % 26) + 65);
      }
      // analizando las letras minusculas
      else if((code>= 97) && (code <=122)){
        code2=String.fromCharCode(((code - 97 -33) % 26) + 97);
      }
      output+=code2
    }
    return output
  }
  else{
    console.log('ingresa una palabra')
  }
}
console.log(cipher('tlsp'));// meli
