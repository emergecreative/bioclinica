

// título do submenu

let servico = 

window.addEventListener('load', function (){
    document.getElementById('text-title').innerText=document.title.split(" | ")[0];
    document.getElementById('contato-automatico').innerText = "Alguma dúvida sobre " + document.title.split(" | ")[0] + "? Entre em contato com a gente que te respondemos assim que possível."
});