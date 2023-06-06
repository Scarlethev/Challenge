let productos = (dataGym.productos)
let galeryHome = document.getElementById("galery-home")
let activities = document.getElementById("activities")
let pass = document.getElementById("pass")
let plans = document.getElementById("plans")
let store = document.getElementById("store")
let locations = document.getElementById("locations")
let contact = document.getElementById("contact")
let registration = document.getElementById("registration-and-reservation")
let tarjetas = document.getElementById("productos")

let selectNav = document.getElementsByClassName("navLink");
var buttonNav = [];

//CARGAR LA PÁGINA EN HOME 
window.addEventListener('DOMContentLoaded', function () {
  imprimir('');
});

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
      categories(productos)
      display(productos)
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
      printForm();
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
      printLogin();
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
            <h5 class="card-title text-white text-center">${array[i].titulo}</h5>
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

// FUNCIÓN IMPRIMIR FORMULARIO
function printForm() {
  contact.innerHTML = `
      <section class="containerContacto my-5" id="containerContacto">
          <h3>CONTACTANOS</h3>
          <div class="contact-wrapper animated bounceInUp my-5">
              <div class="contact-form">
                  <form id="contactForm" action="">
                      <p>
                          <label for="nombreApellido">Nombre y Apellido</label>
                          <input type="text" id="nombreApellido" name="nombreApellido">
                      </p>
                      <p>
                          <label for="email">Email</label>
                          <input type="email" id="email" name="email">
                      </p>
                      <p>
                          <label for="telefono">Numero de telefono</label>
                          <input type="tel" id="telefono" name="telefono">
                      </p>
                      <p class="block">
                          <input type="submit" id="buttonForm" class="button_contact" value="ENVIAR">
                      </p>
                  </form>
              </div>
              <div class="contact-info">
                  <h4>Mas Info</h4>
                  <p> Ubicacion: </p>
                  <p>Capital Federal</p>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105085.75690524078!2d-58.51775584746096!3d-34.605933995200715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1685996822488!5m2!1ses-419!2sar" class="tag-map" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
          </div>
      </section>
  `;

  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    actionForm(event);
  });
}

// SWAL ALERT FORMULARIO DE CONTACTO
function actionForm(event) {
  event.preventDefault();

  const formData = {
    nombre: event.target.elements["nombreApellido"].value,
    correo: event.target.elements["email"].value,
    telefono: event.target.elements["telefono"].value,
  };

  console.log(formData);

  // Vaciar los campos del formulario
  event.target.elements["nombreApellido"].value = "";
  event.target.elements["email"].value = "";
  event.target.elements["telefono"].value = "";

  swal({
    title: `Gracias ${formData.nombre} por dejarnos tus datos. A la brevedad nos contactaremos.`,
    icon: "success",
    button: "Continuar",
  });
}


// FUNCIÓN IMPRESIÓN DEL LOGIN
function printLogin() {
  registration.innerHTML = `
      <section class="login" id="login">
          <div class="text-center pt-5 my-5">
              <h4>INGRESA PARA RESERVAR TU CLASE O RESGÍSTRATE</h4>
          </div>

          <div class="containerLogin">
              <div class="ingresar">
                  <form action="" id="formularioSocio">
                      <label for="usuario" class="text-danger">USUARIO</label>
                      <input type="text" name="usuario" id="usuario" class="border border-warning mb-2">
                      <label for="password" class="text-danger">CONTRASEÑA</label>
                      <input type="password" name="password" id="password" class="border border-warning">
                      <p class="block my-4 h2">
                          <input type="button" class="btn btn-group-toggle btn-danger ingreso" value="Enviar">
                      </p>
                  </form>
              </div>

              <div class="registrar gap-4">
                  <h4 class="text-danger">Registrate</h4>
                  <input type="text" name="nombre" id="nombre" value="" placeholder="Ingresa tu nombre" class="border border-warning">
                  <input type="text" name="apellido" id="apellido" value="" placeholder="Ingresa tu apellido" class="border border-warning">
                  <input type="email" name="email" id="email" value="" placeholder="Ingresa tu dirección de correo" class="border border-warning">
                  <input type="password" name="contraseña" id="contraseña" value="" placeholder="Ingresa tu clave" class="border border-warning">
                  <p class="block my-4">
                  <input type="button" class="btn btn-group-toggle btn-danger registro" value="Registrate">
                  </p>
              </div>
          </div>
      </section>
  `;

  let ingresoButtons = document.getElementsByClassName("ingreso");
  Array.from(ingresoButtons).forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      actionIngreso(event);
    });
  });

  let registroButtons = document.getElementsByClassName("registro");
  Array.from(registroButtons).forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      actionRecord(event);
      actionRegistro(event)
    });
  });
}

function actionRecord(event) {
  event.preventDefault();

  const nombreInput = document.getElementById("nombre");
  const apellidoInput = document.getElementById("apellido");
  const emailInput = document.getElementById("email");
  const contraseñaInput = document.getElementById("contraseña");

  const dataRecord = {
    nombre: nombreInput.value,
    apellido: apellidoInput.value,
    correo: emailInput.value,
    contraseña: contraseñaInput.value,
  };

  console.log(dataRecord);

  // Vaciar los campos del formulario de registro
  nombreInput.value = "";
  nombreInput.setAttribute("placeholder", "Ingresa tu nombre");
  apellidoInput.value = "";
  apellidoInput.setAttribute("placeholder", "Ingresa tu apellido");
  emailInput.value = "";
  emailInput.setAttribute("placeholder", "Ingresa tu dirección de correo");
  contraseñaInput.value = "";
  contraseñaInput.setAttribute("placeholder", "Ingresa tu clave");
}

function actionIngreso(event) {
  swal({
    title: "Has ingresado correctamente",
    icon: "success",
    button: "Continuar",
  });
}

function actionRegistro(event) {
  swal({
    title: "Te has registrado correctamente",
    icon: "success",
    button: "Continuar",
  });
}



// FUNCION SEARCH
var inputSearch = document.getElementById("buscador");

inputSearch.addEventListener("keyup", function (event) {
  var datoInput = event.target.value;
  var datosOrdenados = datoInput.trim().toLowerCase();
  var filtrado = productos.filter(producto => producto.titulo.toLowerCase().includes(datosOrdenados));

  if (filtrado.length === 0) {
    // No se encontraron resultados
    tarjetas.innerHTML =
      `<div class="ceroSearch">
                <img class="imgCero" src="./imagenes/nofoundmin.png" alt="SinResultados">
            </div>`;
  } else {
    // Imprimir los resultados filtrados
    display(filtrado);
  }
});

// CREACION DE CHECKBOX DINAMICAS
function categories(array) {
  let categories = array.map(category => category.categoria)
  let unique = [...new Set(categories)]

  let checkboxes = unique.map(category =>
    `<div>
            <input type="checkbox" value="${category}">
            <label> ${category}</label>
        </div>`
  ).join("");

  document.getElementById("checkbox").innerHTML = checkboxes;
  checkboxListener();
}

// FUNCION DE FILTRADO CHECKBOX PAISES 
function checkboxListener() {
  var checkboxes = document.getElementById("checkbox");
  var checkbox = checkboxes.querySelectorAll('input[type="checkbox"]');

  for (var i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener("click", function () {
      var arrayCheckbox = [];
      for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
          arrayCheckbox.push(checkbox[i].value);
        }
      }
      console.log(arrayCheckbox);
      filtrosCombinados();
    });
  }
}

// FUNCION DE FILTROS COMBINADOS
function filtrosCombinados() {
  var searchValue = inputSearch.value.trim().toLowerCase();
  var checkboxValues = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value);

  var filtrados = productos.filter(producto => {
    var tituloIncluido = producto.titulo.toLowerCase().includes(searchValue);
    var categoriaIncluida = checkboxValues.includes(producto.categoria);
    if (searchValue && checkboxValues.length > 0) {
      return tituloIncluido && categoriaIncluida;
    } else if (searchValue) {
      return tituloIncluido;
    } else if (checkboxValues.length > 0) {
      return categoriaIncluida;
    } else {
      return true;
    }
  });

  if (filtrados.length === 0) {
    // No se encontraron resultados
    tarjetas.innerHTML =
      `<div class="ceroSearch">
                <img class="imgCero" src="./imagenes/nofoundmin.png" alt="SinResultados">
            </div>`;
  } else {
    // Imprimir los resultados filtrados
    display(filtrados);
  }
}

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






