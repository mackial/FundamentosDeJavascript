function Persona(nombre, apellido, edad, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.altura = altura
}

Persona.prototype.saludar = function() {
    console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)
}
Persona.prototype.esAlto = function() {
    return this.altura >= 1.8
}


var sacha = new Persona('Sacha', 'Lifszyc', 27, 1.72)
var erika = new Persona('Erika', 'Luna', 24, 1.57)
var marcial = new Persona('Marcial', 'Ambriz', 23, 1.82)

//sacha.saludar()