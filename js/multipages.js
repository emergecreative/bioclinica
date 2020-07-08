window.addEventListener('load',function (){
    let contato = document.getElementById('contato');
    let inicio = document.getElementById('inicio');
	contato.addEventListener('click', function (){
		window.location.href = "contato.html";
    });
    
    inicio.addEventListener('click', function (){
        window.location.href = "index.html";
    });
});

