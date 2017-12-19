var campoPesquisar = $("#pesquisarNaTabela");
campoPesquisar.on("input", function(){
    var pacientes = $(".paciente");

    if(this.value.length > 0){
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".iNome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i");

            if(!expressao.test(nome)){
                $(paciente).addClass("invisivel");
            }else{
                $(paciente).removeClass("invisivel");
                console.log(paciente);
            }
        }
    }else{
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            $(paciente).removeClass("invisivel");
        }
    }
});
