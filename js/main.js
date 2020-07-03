let div = document.querySelector("#calendario")

let calendario = new Calendario();

div.appendChild(calendario.generarHoja());

let bottons = document.querySelector('.button-calendario').querySelectorAll("div")
bottons[0].addEventListener("click",()=>{
    calendario.anterior(div)
})
bottons[1].addEventListener("click", ()=>{
    calendario.siguiente(div)
})