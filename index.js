function encriptar(){
    var encript = document.getElementById("Encriptado").value.toLowerCase();

    var textoEncript = encript.replace(/e/img, "enter");
    var textoEncript = textoEncript.replace(/i/img, "imes");
    var textoEncript = textoEncript.replace(/a/img, "ai");
    var textoEncript = textoEncript.replace(/o/img, "ober");
    var textoEncript = textoEncript.replace(/u/img, "ufat");

    document.getElementById("Desencriptado").innerHTML = textoEncript;
    
  document.getElementById("inicio").style.visibility = "hidden";
  document.getElementById("copy").style.visibility = "visible";

}

function desencriptar(){
    var desencript = document.getElementById("Encriptado").value.toLowerCase();

    var textoDesencript = desencript.replace(/enter/img, "e");
    var textoDesencript = textoDesencript.replace(/imes/img, "i");
    var textoDesencript = textoDesencript.replace(/ai/img, "a");
    var textoDesencript = textoDesencript.replace(/ober/img, "o");
    var textoDesencript = textoDesencript.replace(/ufat/img, "u");

    document.getElementById("Desencriptado").innerHTML = textoDesencript;
}

function copy(){
    var content = document.querySelector("#Desencriptado");
    content.select();
    document.execCommand("copy");
}

function boton(){
    const btnSwitch = document.querySelector('#switch');
    btnSwitch.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        btnSwitch.classList.toggle('active');

    });
}