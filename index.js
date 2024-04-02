import beers from "./beers.js";
import frutas from "./data.js";

/**
 *
 *  .1
 */

const printMessage = (message) => {
  console.log(message);
};

/**
 *
 * .2
 */
const createMultiplication = (number1, number2) => number1 * number2;

/**
 *
 * .3
 */

// const newArray = array.map((element) => createMultiplication(element, 2));

// console.log(newArray);

/**
 *
 * .4
 */

const MostAlcoholicBeers = (beers) => {
  const TenMostAlcoholicBeers = beers.sort((a, b) => b.abv - a.abv);

  return TenMostAlcoholicBeers.slice(0, 10);
};
console.log(
  "🚀 ~ MostAlcoholicBeers ~ MostAlcoholicBeers:",
  MostAlcoholicBeers(beers)
);

/**
 *
 * .5
 */

const LestBetterBeers = (beers) => {
  const TenLestBetter = beers.sort((a, b) => a.ibu - b.ibu);

  return TenLestBetter.slice(0, 10);
};
console.log("🚀 ~ LestBetterBeers ~ LestBetterBeers:", LestBetterBeers(beers));

/**
 *
 * .6
 */

const FilterBeerByName = (beers, beerName) => {
  return beers.filter((beer) => beer.name === beerName);
};

console.log(FilterBeerByName(beers, "Buzz"));

/**
 *
 * .7
 */

const FilterBeerByIbu = (beers, Ibu) => {
  return beers.find((beer) => beer.ibu === Ibu);
};

console.log(FilterBeerByIbu(beers, 60));

/**
 *
 * .8
 */

const FindIndexByName = (beers, name) => {
  const indexOfBeer = beers.findIndex((beer) => beer.name === name);

  if (indexOfBeer === -1) {
    return `${name} does not exist.`;
  } else {
    return `index of ${name}: ${indexOfBeer}`;
  }
};
console.log(FindIndexByName(beers, "AB:07"));

/**
 *
 * .9
 */

const FilterArrayBeersByIbu = (beers, ibu) => {
  
    const beersFiltered = beers.filter((beer) => beer.ibu <= ibu);

  let nuevosObjetos = beersFiltered.map(obj => {
    return {
      name: obj.name,
      abv: obj.abv,
      ibu: obj.ibu
    };
  });

  return nuevosObjetos
};

console.log(FilterArrayBeersByIbu(beers, 30));

/**
 * 
 * .10
 */
function sortBeers(beers, propertyName, ascending) {
    beers.sort((a, b) => {
        if (a[propertyName] < b[propertyName]) {
            return ascending ? -1 : 1;
        }
        if (a[propertyName] > b[propertyName]) {
            return ascending ? 1 : -1;
        }
        return 0;
    });

    return beers.slice(0, 10);
}

console.log(sortBeers(beers, 'abv', false));

/**
 * 
 * .11
 */

function renderBeerTable(beerArray, elementId) {
  var tableContainer = document.getElementById(elementId);

  var table = document.createElement('table');

  var headerRow = document.createElement('tr');
  var headers = ['Name', 'ABV', 'IBU'];
  headers.forEach(function(headerText) {
      var header = document.createElement('th');
      header.appendChild(document.createTextNode(headerText));
      headerRow.appendChild(header);
  });
  table.appendChild(headerRow);

  beerArray.forEach(function(beer) {
      var row = document.createElement('tr');
      var columns = ['name', 'abv', 'ibu']
      columns.forEach(function(columnName) {
          var cell = document.createElement('td');
          cell.appendChild(document.createTextNode(beer[columnName]));
          row.appendChild(cell);
      });
      table.appendChild(row);
  });

  tableContainer.appendChild(table);
}

renderBeerTable(beers, 'beerTableContainer');

/**
 * 
 * RETOS DEL REEDME
 */

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
document.querySelector("main").appendChild(contenedorDiv);

// 6.
function crearCard(nombre, foto, descripcion) {
    return `
        <div class="card">
            <img src="${foto}" alt="${nombre}">
            <h2>${nombre}</h2>
            <p>${descripcion}</p>
        </div>
    `;
}

// 7.
function mostrarCards(frutas) {
    var contenedor = document.getElementById("contenedor");
    frutas.forEach(function(fruta) {
        var card = crearCard(fruta.nombre, fruta.foto, fruta.descripcion);
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
