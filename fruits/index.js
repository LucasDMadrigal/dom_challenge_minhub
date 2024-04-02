
/**
 * 
 * RETOS DEL REEDME
 */
import frutas from "./data.js";

// 1.
var titulo = document.getElementById("titulo");

// 2.
var tituloPrincipal = "Frutas";
titulo.textContent = tituloPrincipal;

// 3.
var elementosNaranja = document.querySelectorAll("header, footer");
elementosNaranja.forEach(function(elemento) {
    elemento.style.backgroundColor = "orange";
});

// 4.
var parrafoFooter = document.querySelector("footer p");
parrafoFooter.textContent += " Lucas Madrigal -  Cohort 54";

// 5.
var contenedorDiv = document.createElement("div");
contenedorDiv.id = "contenedor";
contenedorDiv.classList.add("flex", "flex-wrap", "gap-4", "grid-cols-3", "grid-rows-3")
document.querySelector("main").appendChild(contenedorDiv);

// 6.
function crearCard(fruta) {
    return `
        
<div class="h-64 w-1/5 p-2 flex flex-col border-solid border-2 border-gray-400 rounded-lg items-center max-md:w-4/5 ">

<img class="w-32 h-2/4 object-cover" src="${fruta.foto}" alt="${fruta.nombre}">

<h3 class="font-serif p-3"><strong>${fruta.nombre}</strong></h3>

<p class="text-xs font-serif p-1">${fruta.descripcion}</p>

</div>
    `;
}

// 7.
function mostrarCards(frutas) {
    var contenedor = document.getElementById("contenedor");
    frutas.forEach(function(fruta) {
        var card = crearCard(fruta);
        contenedor.innerHTML += card;
    });
}

mostrarCards(frutas);

// 8.
var listaDiv = document.createElement("div");
listaDiv.id = "lista";
document.querySelector("main").appendChild(listaDiv);

// 9.
var tituloLista = document.createElement("h2");
tituloLista.textContent = "Frutas Dulces";
document.getElementById("lista").appendChild(tituloLista);

// 10.
function crearListaDesordenada(frutas) {
    var lista = document.createElement("ul");
    frutas.forEach(function(fruta) {
        if (fruta.esDulce) {
            var listItem = document.createElement("li");
            listItem.textContent = fruta.nombre;
            lista.appendChild(listItem);
        }
    });
    return lista;
}

// 11.
var listaFrutasDulces = crearListaDesordenada(frutas);
document.getElementById("lista").appendChild(listaFrutasDulces);


// let crearCard = objeto =>

// <div class="h-64 w-1/5 p-2 flex flex-col border-solid border-2 border-gray-400 rounded-lg items-center max-md:w-4/5 ">

// <img class="w-32 h-2/4 object-cover" src="${objeto.foto}" alt="${objeto.nombre}">

// <h3 class="font-serif p-3"><strong>${objeto.nombre}</strong></h3>

// <p class="text-xs font-serif p-1">${objeto.descripcion}</p>

// </div>";