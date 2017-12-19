var botaoAdicionar = $("#adicionarPaciente");
botaoAdicionar.on("click", function(){

    var form = document.querySelector("#formAdiciona");
    var paciente = obtemPacienteDoFormulario(form);
    var erros = validaPaciente(paciente);

    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }else{
      form.submit();
    }

    adicionaPacienteNaTabela(paciente);
    form.reset();
    var mensagensErro = $("#mensagensErro");
    mensagensErro.text("");

});

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = fazTr(paciente);
    var tabela = $("#tabelaPacientes");
    tabela.append(pacienteTr);
}


function validaPaciente(paciente){
    var erros = [];

    if(paciente.nome.length == 0){erros.push("O nome não pode ser nulo");}

    if(paciente.peso.length == 0){erros.push("O peso não pode ser nulo");}

    if(paciente.altura.length == 0){erros.push("A altura não pode ser nula");}

    if(paciente.gordura.length == 0){erros.push("A gordura não pode ser nula");}

    if(!validaPeso(paciente.peso)){erros.push("Peso inválido");}

    if(!validaAltura(paciente.altura)){erros.push("Altura inválida");}

    return erros
}

function exibeMensagensDeErro(erros){
    var ul = $("#mensagensErro");
    ul.text("");

    erros.forEach(function(erro){
        var li = $("<li>").text(erro);
        ul.append(li);
    });
}

function obtemPacienteDoFormulario(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}
function fazTd(dado, classe){
    var td = $("<td>");
    td.addClass("classe");
    td.text(dado);
    return td;
}

function fazTr(paciente){
    var pacienteTr = $("<tr>");
    pacienteTr.addClass("paciente");
    pacienteTr.append(fazTd(paciente.nome, "iNome"));
    pacienteTr.append(fazTd(paciente.peso, "iPeso"));
    pacienteTr.append(fazTd(paciente.altura, "iAltura"));
    pacienteTr.append(fazTd(paciente.gordura, "iGordura"));
    pacienteTr.append(fazTd(paciente.imc, "iImc"));
    return pacienteTr;
}
