var CampoFiltro = document.querySelector("#filtrar-tabela");

CampoFiltro.addEventListener("input", function(){
    
    console.log(this.value);

    var alunos = document.querySelectorAll(".aluno");
//se tem algo digitado, fazer a filtragem
    if(this.value.length > 0 ){
      
        for (var i = 0; i < alunos.length; i++) {
            var aluno = alunos[i];
            var tdnome = aluno.querySelector(".info-nome");
            var nome = tdnome.textContent;

            var expressao = new RegExp(this.value,"i")
    
            if (!expressao.test(nome)){
                aluno.classList.add("invisivel"); //criamos a classe invisivel para que desapareça o que não for testado ou chamado.
            }else{
                aluno.classList.remove("invisivel"); //aparece se for igual
            }
            
            
        }
    } //deixando visivel novamente a lista
     else {
        for (var i = 0; i < alunos.length; i++) {
                   var aluno = alunos[i];
                   aluno.classList.remove("invisivel");
        }
    }

});

//