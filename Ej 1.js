//Pila
var famosos = [];

function Stack(){
var nombre = new Nombre();

nombre.push("Michael");
nombre.push("John");
nombre.push("Carlos");
nombre.push("Pedro");
nombre.push("Elvis");

var apellido = new Apellido();
apellido.push("Jackson");
apellido.push("Lennon");
apellido.push("Gardel");
apellido.push("Infante");
apellido.push("Prestley");


famosos = nombre.pop() + " " + apellido.pop();
console.log (famosos);

};

Stack();
