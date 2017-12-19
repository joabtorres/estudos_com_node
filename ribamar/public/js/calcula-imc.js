var pacientes = $(".paciente");

for (var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".iPeso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".iAltura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".iImc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if(!pesoEhValido){
        console.log("Peso inválido");
        pesoEhValido = false;
        tdImc.text("Peso inválido");
        paciente.addClass("pacienteInvalido");
    }
    if(!alturaEhValida){
        console.log("Altura inválida");
        alturaEhValida = false;
        tdImc.text("Altura inválida");
        paciente.addClass("pacienteInvalido");
    }

    if(pesoEhValido && alturaEhValida){
        var imc = calculaImc(peso, altura);
        $(tdImc).text(imc);
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso <= 400){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.00){
        return true
    }else{
        return false;
    }
}

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}
