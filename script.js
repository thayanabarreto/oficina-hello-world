console.log("Entrei")

var titulo = document.querySelector ("h1")
console.log (titulo)

var subtitulo = document.querySelector ("h2")
console.log(subtitulo)

var button = document.querySelector ("button")
console.log(button)

var input = document.querySelector ("input")
console.log(input)

function clicar(){
    event.preventDefault()
    subtitulo.innerHTML = input.value
} 