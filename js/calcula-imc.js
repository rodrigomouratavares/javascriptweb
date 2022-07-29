var titulo = document.querySelector("#titulo");
titulo.textContent = "Gisele Viviane";

 var alunos = document.querySelectorAll(".aluno");

 for(var i=0; i< alunos.length; i++){
    
    var aluno = alunos[i];
    
 var tdPeso = aluno.querySelector(".info-peso");
 var peso = tdPeso.textContent;

 var tdAltura = aluno.querySelector(".info-altura");
 var altura = tdAltura.textContent;

var tdImc = aluno.querySelector(".info-imc");
var imc = peso / (altura * altura);




var pesoValido = validaPeso(peso);
var alturaValida = validaAltura(altura);

if (!pesoValido) {
    console.log("Peso inválido! \n O peso máximo é 1000kg");
    pesoValido = false;
    tdImc.textContent = "Peso inválido"; 
    aluno.classList.add("aluno-invalido");
    
}

if (!validaAltura) {
    console.log("Altura inválida! \n A altura máxima é 3 metros.")
    alturaValida = false;
    tdImc.textContent = "Altura inválida.";
    aluno.classList.add("aluno-invalido");
}

if (alturaValida && pesoValido){
    var imc = calculaImc(peso,altura);
    tdImc.textContent = imc;
    alturaValida = true;
    pesoValido = true;
 
    
}

function validaPeso(peso) {
    if (peso>=0 && peso<1000) {
        return true;
    } else{
        return false;
    }
}

function validaAltura(altura){
    if(altura>=0 && altura>3){
        return true;

    }else{
        return false;
    }
}
function calculaImc(peso, altura){

var imc=0;

imc = peso / (altura*altura);

return imc.toFixed(2);
}
 }
