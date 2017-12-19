var botaoImportar = $("#importarPacientes");
botaoImportar.on("click", function(){
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://localhost:2000/pacientes/");

        $(xhr).on("load", function() {
        var erroAjax = $("#erroAjax");

        if(xhr.status == 200){
            $(erroAjax).addClass("invisivel");
            var resposta  = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
            });
        }else{
            $(erroAjax).removeClass("invisivel");
        }
    });
    xhr.send();
});
