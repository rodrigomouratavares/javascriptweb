var CampoFiltro = document.querySelector("#filtrar-tabela");

CampoFiltro.addEventListener("input", function(){
    
    console.log(this.value);

    var alunos = document.querySelectorAll(".aluno");

    for (var i = 0; i < alunos.length; i++) {
        var aluno = alunos[i];
        var tdnome = aluno.querySelector(".info-nome");
        var nome = this.textContent;
        
    }
});