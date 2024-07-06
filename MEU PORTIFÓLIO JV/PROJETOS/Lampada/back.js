function interruptor(){
let elemento = document.getElementById("preto")
let corpo = document.getElementById("corpo")
let paragrafo = document.getElementById("interruptor")

if(elemento.src.match("off")){
    elemento.src = "lampada_on-removebg-preview.png"
    corpo.style.background = "yellow"
    paragrafo.style.color = "black"
} else{
    elemento.src = "lampada_off-removebg-preview.png"
    corpo.style.background = "black"
    paragrafo.style.color = "white"
}
}