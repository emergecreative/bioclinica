window.addEventListener('load',function (){
    let contato = document.getElementById('contato');
    let inicio = document.getElementById('inicio');
    let resultado = document.getElementById('resultado');
	contato.addEventListener('click', function (){
		window.location.href = "contato.html";
    });
    
    inicio.addEventListener('click', function (){
        window.location.href = "index.html";
    });

    resultado.addEventListener('click', function (){
        window.location.href = "http://187.72.113.154:8082/arlaudo/default2.aspx";
    })
});

