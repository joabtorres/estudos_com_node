var tabela = $("#tabelaPacientes");
tabela.dblclick(function(event){
	window.location.href="/delete/"+document.getElementById('iid').value;
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
       event.target.parentNode.remove();
    }, 500);
});