
 var botaoAdd = document.querySelector("#adicionar-aluno");

 botaoAdd.addEventListener("click", function(event){
     event.preventDefault();
     var form = document.querySelector("#form-adiciona");
         //extraindo os valores do FORM


    var aluno = obtemAlunoDoFormulario(form);

    var alunoTr = montaTr(aluno);

    var erros = validaAluno(aluno);


    if(erros.length>0){

        var mensagemErro=document.querySelector("#mensagem-erro");
        mensagemErro.textContent = erros;
        return;
    }
    
    //adicionando os alunos na tabela.
    var tabela = document.querySelector("#tabela-alunos");


  tabela.appendChild(alunoTr);
    form.reset();
 });

 function obtemAlunoDoFormulario(form){
    var aluno = {
        nome:form.nome.value,
        peso:form.peso.value,
        altura:form.altura.value,
        gordura:form.gordura.value,
        imc:calculaImc(form.peso.value, form.altura.value)
    }
return aluno;

 }


 function montaTr(aluno) {

var alunoTr = document.createElement("tr");
    alunoTr.classList.add("aluno");


alunoTr.appendChild(montaTd(aluno.nome, "info-nome"));
alunoTr.appendChild(montaTd(aluno.peso, "info-peso"));
alunoTr.appendChild(montaTd(aluno.altura, "info-altura"));
alunoTr.appendChild(montaTd(aluno.gordura, "info-gordura"));
alunoTr.appendChild(montaTd(aluno.imc, "info-imc"));


    return alunoTr;
 }

 function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;

 }


function validaAluno(aluno) {

    var erros = [];

    if(!validaPeso(aluno.peso)){
        erros.push("peso inválido");
    }  
     
       
    if (!validaAltura(aluno.altura)) {
        erros.push("altura inválida.");
    } 
    
    return erros;
}   

