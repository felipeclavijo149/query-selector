const formulario = document.querySelector("#formulario");
const resultado = document.querySelector("#resultado");
const aprendizguardado = document.querySelector("#aprendizguardado");

formulario.addEventListener("submit", function(event){
    event.preventDefault();
    
    const datos= new FormData(formulario);
    const aprendiz={};

    for(const [campo,valor] of datos.entries()){
        aprendiz[campo]=valor;
    };

    aprendiz.acepta=datos.has("acepta")? "si":"no";

    localStorage.setItem("aprendiz",JSON.stringify(aprendiz));

    mostraraprendiz(aprendiz);
});

function mostraraprendiz(aprendiz){
    resultado.innerHTML="";

    for (const campo in aprendiz){
        resultado.innerHTML+=`<p> ${campo} ${aprendiz[campo]} </p>`
    }
    formulario.reset();
    alert("Aprendiz Registrado exitosamente");
};

if(aprendizguardado){
    mostraraprendiz(JSON.parse(aprendizguardado));
}