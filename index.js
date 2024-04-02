import beers from "./beers.js";

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

const array = [ 1,2,3,4,5,6,7,8,9 ]
const newArray = array.map(createMultiplication);

console.log(newArray);

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
