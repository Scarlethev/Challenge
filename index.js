let productos = (dataGym.productos)
let galeryHome = document.getElementById("galery-home")
let activities = document.getElementById("activities")
let pass = document.getElementById("pass")
let plans = document.getElementById("plans")
let store = document.getElementById("store")
let locations = document.getElementById("locations")
let contact = document.getElementById("contact")
let registration = document.getElementById("registration-and-reservation")

let selectNav = document.getElementsByClassName("navLink");
var buttonNav = [];

//FUNCIÓN PARA CAMBIAR DE PÁGINA

for (var i = 0; i < selectNav.length; i++) {
  const element = selectNav[i];
  buttonNav.push(selectNav[i].innerText);
  element.addEventListener("click", function (e) {
    imprimir(e.target.id);
  });
}

function imprimir(id) {

  switch (id) {

    case "planes":
      galeryHome.style.display = "none";
      activities.style.display = "none";
      pass.style.display = "none";
      plans.style.display = "flex";
      store.style.display = "none";
      locations.style.display = "none";
      contact.style.display = "none";
      registration.style.display = "none";
      break;

    case "tienda":
      galeryHome.style.display = "none";
      activities.style.display = "none";
      pass.style.display = "none";
      plans.style.display = "none";
      store.style.display = "flex";
      locations.style.display = "none";
      contact.style.display = "none";
      registration.style.display = "none";
      break;

    case "sedes":
      galeryHome.style.display = "none";
      activities.style.display = "none";
      pass.style.display = "none";
      plans.style.display = "none";
      store.style.display = "none";
      locations.style.display = "flex";
      contact.style.display = "none";
      registration.style.display = "none";
      break;


    case "contacto":
      galeryHome.style.display = "none";
      activities.style.display = "none";
      pass.style.display = "none";
      plans.style.display = "none";
      store.style.display = "none";
      locations.style.display = "none";
      contact.style.display = "flex";
      registration.style.display = "none";
      break

    case "login":
      galeryHome.style.display = "none";
      activities.style.display = "none";
      pass.style.display = "none";
      plans.style.display = "none";
      store.style.display = "none";
      locations.style.display = "none";
      contact.style.display = "none";
      registration.style.display = "flex";
      break;

    default:
      galeryHome.style.display = "flex";
      activities.style.display = "flex";
      pass.style.display = "flex";
      plans.style.display = "none";
      store.style.display = "none";
      locations.style.display = "none";
      contact.style.display = "none";
      registration.style.display = "none";
      categories(productos)
      display(productos)
      break;
  }
}

function display(array) {
  console.log(array)

  let html = "";
  for (var i = 0; i < array.length; i++) {
    html +=
      `
          <div class="col-lg-3 col-md-6 col-sm-6 d-flex">
          <div class="card w-100 my-5 shadow-2-strong">
           <img src="${array[i].imagen}" style="aspect-ratio: 1 / 1" />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${array[i].titulo}</h5>
            <p class="card-text">$${array[i].precio}</p>
            <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
              <a href="#!" class="btn btn-danger shadow-0 me-1">Detalle</a>
              <a href="#!" class="btn btn-light border px-2 pt-2 icon-hover"><i class="fas fa-heart fa-lg text-secondary px-1"></i></a>
            </div>
          </div> 
          </div>
          </div>
      `
  }

  tarjetas.innerHTML = html;

}


// FORMULARIO DE RESERVA- CAPTURE DE DATOS

let form = document.querySelector("form")
const modal = document.querySelector('#modal')
const cerrar = document.querySelector('.close')
form.addEventListener("submit", (event) => {
  actionForm(event)
  modal.style.display = "block"
})

function modalForm() {
  modal.style.display = "none";
  location.reload()
}
cerrar.addEventListener("click", modalForm);

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none"
  }
})

function actionForm(evento) {
  evento.preventDefault()
  let formDatos = {
    nombreYapellido: evento.target[0].value,
    direccionDeEmail: evento.target[1].value,
    telefono: evento.target[2].value,
    dni: evento.target[3].value
  }
  console.log(formDatos);
}


function backHome() {
  setState("paginaANavegar", "index")
  ChangeTemplateLayaout()
}

// CHECKBOX DINAMICAS

//FUNCION SEARCH

input.addEventListener("keyup", function (event) {

  var datoInput = event.target.value;
  let datoLimpio = datoInput.trim().toLowerCase();
  console.log(datoLimpio)

  //  let filtrado= arrayAFiltrar.filter(vino => vino.Nombre.toLowerCase().includes(datoLimpio))

  // pintarHTML(filtrado)

  filtrosCombinados()
})



//CREACION DE CHECKBOX DINAMICAS

function categories(array) {
  let categories = array.map(category => category.categoria)
  let unica = new Set(categories)
  let lastCategories = [...unica]


  //FILTROS UVAS

  let categorias = ""
  lastCategories.map(category =>
    categorias +=
    `<div>
      <input type="checkbox" value="${category}">
      <label> ${category}</label>
      <div>
  `
  )
  document.getElementById("checkbox").innerHTML = categorias

  checkboxListener()

}


// FUNCION DE FILTRADO CHECKBOX PAISES 

function checkboxListener() {

  var checkboxes = document.getElementById("checkbox");
  var checkbox = checkboxes.querySelectorAll('input[type="checkbox"]');

  for (var i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener("click", function () {
      arrayCheckbox = [];
      for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
          arrayCheckbox.push(checkbox[i].value)
        }
      }
      console.log(arrayCheckbox)
      filtrosCombinados()
    })
  }
}

// function filtrosCombinados() {

//   var  = [];

//   if (datoLimpio !== "" && arrayCheckbox.length > 0) {
//       arrayCheckbox.map(bandera => {
//           vinosPorBanderas.push(...arrayAFiltrar.filter(vino =>
//               vino.nombre.toLowerCase().includes(datoLimpio) && vino.pais === bandera))
//       })

//   }

//   else if (datoLimpio !== "" && arrayCheckbox.length == 0) {
//       vinosPorBanderas = arrayAFiltrar.filter(vino => vino.nombre.toLowerCase().includes(datoLimpio))
//   }

//   else if (datoLimpio === "" && arrayCheckbox.length > 0) {

//       arrayCheckbox.map(category =>
//           vinosPorBanderas.push(...arrayAFiltrar.filter(vino => vino.pais === category))
//       )
//   }

//   else {
//       vinosPorBanderas = arrayAFiltrar

//   }


//   vinosPorBanderas.length > 0 ?
//       pintarHTML(vinosPorBanderas) :
//       tarjetasVinos.innerHTML = `<h1 class="ceroResult" >No se encontraron eventos para tu busqueda </h1>`

// }

// LOGICA DEL LOGIN

let usuario = document.getElementById("usuario");
console.log(usuario)

formularioSocio.addEventListener("submit", (event) => {
  actionFormDos(event)
})

function actionFormDos(evento) {
  evento.preventDefault()
  formDatosDos = {
    usuario: evento.target[0].value,
    clave: evento.target[1].value,
  }
  console.log(formDatosDos);
  if (formDatosDos.usuario == "scarlethev" && formDatosDos.clave == "1234") {
    console.log("Bienvenida")
  }
}






