$(document).ready(function () {

    $('div.bgParallax').each(function () {
        var $obj = $(this);

        $(window).scroll(function () {
            var yPos = -($(window).scrollTop() / $obj.data('speed'));

            var bgpos = '50% ' + yPos + 'px';

            $obj.css('background-position', bgpos);

        });
    });
});

$(document).ready(function () {

    var defaults = {
        containerID: 'toTop', // fading element id
        containerHoverID: 'toTopHover', // fading element hover id
        scrollSpeed: 1200,
        easingType: 'linear'
    };


    $().UItoTop({easingType: 'easeOutQuart'});

});

$(document).ready(function ($) {
    $(".scroll").click(function (event) {
        event.preventDefault();
        $('html,body').animate({scrollTop: $(this.hash).offset().top}, 1200);
    });
});

/*********************************************
        VALIDAR FORMULÁRIO
**********************************************/

$(document).ready(function(){
    $("#iAltura").focusout(function(event){
      var peso = document.getElementById('iPeso').value;
      var altura =document.getElementById('iAltura').value;
        if(validaAltura(altura) && validaPeso(peso)){
          var imc = calculaImc(peso, altura);
          document.getElementById('iIMC1').value=imc;
          document.getElementById('iIMC').value=imc;
        }
    })
});
function validarCadastro(){
  var nome = document.getElementById('iNome').value;
  var peso = document.getElementById('iPeso').value;
  var altura =document.getElementById('iAltura').value;
  var corporal = document.getElementById('iGCorporal').value;
  if(validaNome(nome) && validaPeso(peso) && validaAltura(altura) && validaCorporal(corporal)){
    var formulario = document.getElementById('form-add-participantes');
    formulario.submit();
  }else{
    alert('Preencha os campos corretamente conforme apresentados nos exemplos!');
  }
}
function validaNome(nome){
  if(nome.length >0){
    return true;
  }else{
    return false;
  }
}
function validaPeso(peso){
    if(peso > 0 && peso <= 400){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura > 0 && altura <= 3.00){
        return true
    }else{
        return false;
    }
}
function validaCorporal(corporal){
  if(corporal > 0.0  && corporal<=100.0){
    return true;
  }else{
    return false;
  }
}
function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);
    arrendonda = imc.toFixed(2);
    return arrendonda;
}
