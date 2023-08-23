const btnAgregar = document.getElementById("agregar");
const btnLimpiar = document.getElementById("limpiar");
const txbItem = document.getElementById("item");
const contenedor = document.getElementById("contenedor");
let lista = [];

function showItems() {
  contenedor.innerHTML = "";
  lista.forEach(function (item) {
    contenedor.innerHTML += `<li>${item}</li>`;
  });
}

document.addEventListener("DOMContentLoaded", function (event) {
  if (localStorage.getItem("lista") === null) {
    localStorage.setItem("lista", JSON.stringify([]));
  } else {
    lista = JSON.parse(localStorage.getItem("lista"));
    showItems();
  }
});

btnAgregar.addEventListener("click", function () {
  if (txbItem.value === "") {
    alert("Debe ingresar un item");
    return;
  }
  lista.push(txbItem.value);
  txbItem.value = "";
  txbItem.focus();
  showItems();
  localStorage.setItem("lista", JSON.stringify(lista));
});

btnLimpiar.addEventListener("click", function () {
  localStorage.setItem("lista", JSON.stringify([]));
  lista = [];
  showItems();
});
