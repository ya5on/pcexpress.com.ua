const apiKey = 'e6ac5221a16aa8bc3f1a08a8424c40b4';//your API key here
const url = 'https://api.novaposhta.ua/v2.0/json/';

const cities = JSON.stringify({"modelName": "Address", "calledMethod": "getCities", "apiKey": apiKey});

function getNPData(url, data) {
  let citiesArr = [];
  let xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let json = JSON.parse(xhr.responseText);

      for (cityId in json.data) {
        citiesArr.push(json.data[cityId]['DescriptionRu']);
      }
    }
  };
  xhr.send(data);
  return citiesArr;
}

let citiesNamesArr = getNPData(url, cities);
console.log(citiesNamesArr);

function down(obj) {
  let reg = new RegExp('^' + obj.value, 'i'),
    t = document.getElementById('cityHint');
  t.innerHTML = '';
  t.style.visibility = "hidden";
  if (obj.value.length > 0)
    for (let i = 0; i < citiesNamesArr.length; i++) {
      if (reg.test(citiesNamesArr[i])) {
        t.innerHTML = citiesNamesArr[i];
        t.style.visibility = "visible";
        break;
      }
    }
}

function copy() {
  let a = document.getElementById('cities').value = document.getElementById('cityHint').innerHTML;
  document.getElementById('cityHint').innerHTML = '';
  document.getElementById("cityHint").style.visibility = "hidden";

  let city = document.getElementById('cities').value;
  console.log(city);
  const warehouses = JSON.stringify({
    'modelName': 'AddressGeneral',
    'calledMethod': 'getWarehouses',
    "methodProperties": {"CityName": city},
    'apiKey': apiKey
  });
  getNPWarehouses(url, warehouses);
}

let citiesElement = document.querySelector("#cities");

if (citiesElement) {
  citiesElement.addEventListener("input", showWarehouses, false);
}
let warehousesElement = document.querySelector("#warehouses");

let cityHint = document.querySelector("#cityHint");
if (cityHint) {
cityHint.addEventListener("click", copy, false);
}
function showWarehouses() {
  down(this);
}

function getNPWarehouses(url, data) {
  warehousesElement.innerHTML = '';
  let citiesArr = [];
  let xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let json = JSON.parse(xhr.responseText);

      for (cityId in json.data) {
        warehousesElement.innerHTML += "<option value='" + json.data[cityId]['DescriptionRu'] + "'>" + json.data[cityId]['DescriptionRu'] + "</option>";
      }

    }
  };
  xhr.send(data);
  console.log(citiesArr);
  return citiesArr;
}
