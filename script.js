const textArea= document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptada){
    let matrizcodigo=[["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i=0; i<matrizcodigo.length; i++){
        if(stringEncriptada.includes(matrizcodigo[i][0])){
                stringEncriptada= stringEncriptada.replaceAll(matrizcodigo[i][0], matrizcodigo[i][1])
        }

    }
    return stringEncriptada
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    
}

function desencriptar(stringDesencriptada){
    let matrizcodigo=[["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i=0; i<matrizcodigo.length; i++){
        if(stringDesencriptada.includes(matrizcodigo[i][1])){
            stringDesencriptada= stringDesencriptada.replaceAll(matrizcodigo[i][1], matrizcodigo[i][0])
        }
    
    }
    return stringDesencriptada
}

function btnCopiar(){
    var contenido = mensaje.value;//Con esto puedes saber el valor que hay en el cajon de texto

    var enlace = document.getElementById("mensaje");//se obtiene todo el cajon de texto con sus propiedades
    var inputfalso = document.createElement("input");//se crea un cajon de texto oculto (virtual)
    inputfalso.setAttribute("value", enlace.value);//se le asigna el texto que encripto que hay en el cajon y lo asigna al cajon falso 
    document.body.appendChild(inputfalso);//asigna al body ese valor
    inputfalso.select();//selecciona todo lo que tenga en el cajon de texto
    document.execCommand("copy");//copia el texto en el portapapeles
    document.body.removeChild(inputfalso);//elimina el cajon de texto virtual que se creo previamente
    alert("¡se copio el texto!");

}
    
