var ButtonSearchStudent = document.querySelector("#buscar-alunos");

ButtonSearchStudent.addEventListener("click", function(){
    console.log("Pesquisando alunos...")
    var xhr = new XMLHttpRequest();
    
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
        if( xhr.status == 200 ){
        resposta = xhr.responseText;
        console.log(typeof resposta);

        var alunos = JSON.parse(resposta);

        alunos.forEach(function(aluno){
            AdicionarAlunoNaTabela(aluno);
        });

    }  else{
        erroAjax.classList.remove("invisivel");

        console.log(xhr.status);
        console.log(xhr.responseText);
    }
    });
    xhr.send();

})