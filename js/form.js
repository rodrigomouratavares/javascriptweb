//Agora vamos chamar nossa função validaPaciente quando clicarmos no botão adiciona e tratar de exibir a mensagem de erro caso haja alguma:
 var botaoAdd = document.querySelector("#adicionar-aluno");

 botaoAdd.addEventListener("click", function(event){
     event.preventDefault();
     var form = document.querySelector("#form-adiciona");
    //extraindo os valores do FORM
     var aluno = obtemAlunoDoFormulario(form);
  

    //adição
    var erros = validaAluno(aluno);


    if(erros.length>0){

        exibeMensagensDeErros(erros);
        return; 
    } //Aqui vai entrar o código de exibir erros
    
    AdicionarAlunoNaTabela(aluno);

    form.reset();
  
    
   var ApagarCampoAoAdicionar = document.querySelector("#mensagens-erros");
   ApagarCampoAoAdicionar.innerHTML = "";
 });

//funções:
//adiocionar aluno na tabela via AJAX ou não.
function AdicionarAlunoNaTabela(aluno){
    var alunoTr = montaTr(aluno);
    var tabela = document.querySelector("#tabela-alunos");
    tabela.appendChild(alunoTr);
         
}
//Cria a função exibeMensagensDeErro, que recebe o array de erros e cria uma <li> para cada mensagem de erro:
function exibeMensagensDeErros(erros){
 
var ul = document.querySelector("#mensagens-erros");
 //COMO O innerHTML vem antes, ele apaga tudo e roda o que vem em seguida.
 ul.innerHTML = "";
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
       
    });
}

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

//Esta função cria um array e caso encontre algum erro em alguma propriedade do aluno, adiciona ao array de erros a mensagem que será exibida depois.
function validaAluno(aluno) {

    var erros = [];
    
 
    if (aluno.nome.length == 0) {
        erros.push("Por favor, preencha o campo NOME.");
    }


    if(aluno.peso.length == 0){
        erros.push("Por favor, preencha o campo PESO");
    }

        
    if(aluno.gordura.length == 0){
        erros.push("Por favor, preencha o campo GORDURA.");
    }

    if (aluno.altura.length == 0) {
        erros.push("Por favor, preencha o campo ALTURA.");
    }

    if(!validaPeso(aluno.peso)){
        erros.push("peso inválido");
    }  
     
       
    if (!validaAltura(aluno.altura)) {
        erros.push("altura inválida.");
    } 



    return erros;
    
}   
