// array de personas y revisiones
const reviews = [
  {
    id: 1,
    name: 'Sandra García',
    trabajo: 'Web developer',
    img: 'images/person-1.jpeg',
    descripcion: "Buen servicio y atención al cliente",
  },
  {
    id: 2,
    name: 'Ana Martín',
    trabajo: 'Web designer',
    img: 'images/person-4.jpeg',
    descripcion: 'Buena relación precio/calidad',
  },
  {
    id: 3,
    name: 'Andrés Montero',
    trabajo: 'Diseñador gráfico',
    img: 'images/person-3.jpeg',
    descripcion: 'Muy contento con la atención recibida',
  },
  {
    id: 4,
    name: 'Carlos Hernández',
    trabajo: 'Desempleado',
    img: 'images/person-2.jpeg',
    descripcion: 'Excepcional servicio de calidad',
  },
  {
    id: 5,
    name: 'Laura Pérez',
    trabajo: 'Diseñadora UX/UI',
    img: 'images/person-5.jpeg',
    descripcion: "Buena app, la recomendaría sin duda",
  },
  {
    id: 6,
    name: 'Carlos Gómez',
    trabajo: 'Desarrollador Full Stack',
    img: 'images/person-6.jpeg',
    descripcion: '¡Genial! volveré a utilizarla',
  },
  {
    id: 7,
    name: 'María Rodríguez',
    trabajo: 'Analista de Datos',
    img: 'images/person-7.jpeg',
    descripcion: 'Es perfecta, justo lo que necesitaba',
  },
  {
    id: 8,
    name: 'Javier Fernández',
    trabajo: 'Ingeniero de Software',
    img: 'images/person-8.jpeg',
    descripcion: 'Muy recomendada para los usuarios',
  },
];


// Guardar los elementos del DOM en constantes

// Opiniones card izquierda
const img = document.getElementById('person-img');
const autor = document.getElementById('autor');
const trabajo = document.getElementById('trabajo');
const info = document.getElementById('info');

// Opiniones card derecha
const imgRigthCard = document.getElementById('person-img-right');
const autorRigthCard = document.getElementById('autor-right');
const trabajoRigthCard = document.getElementById('trabajo-right');
const infoRigthCard = document.getElementById('info-right');

// Botones
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// Iniciar el contador a 0
var contador = 0;

// Cargar el primer item
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[contador];
  const item2 = reviews[contador + 1];

  // Card izquierda
  img.src = item.img;
  autor.textContent = item.name;
  trabajo.textContent = item.trabajo;
  info.textContent = item.descripcion;

  // Card derecha
  imgRigthCard.src = item2.img;
  autorRigthCard.textContent = item2.name;
  trabajoRigthCard.textContent = item2.trabajo;
  infoRigthCard.textContent = item2.descripcion;
});

// Mostar persona guardada como item
function showPerson(person) {
  const item = reviews[person];

  /* Comprobación para si se utiliza random y saliese como opción el último elemento del array, daría error porque intentaría coger el elemento con posición 8. Así nos aseguramos que en caso de coger para el primer bloque el elemento [7] pase en segunda opción al elemento [0]*/

  if (person > reviews.length - 2) {
    person = 0;
    var item2 = reviews[person];
  } else {
    var item2 = reviews[person + 1];
  }

  // Card izquierda
  img.src = item.img;
  autor.textContent = item.name;
  trabajo.textContent = item.trabajo;
  info.textContent = item.descripcion;

  // Card derecha
  imgRigthCard.src = item2.img;
  autorRigthCard.textContent = item2.name;
  trabajoRigthCard.textContent = item2.trabajo;
  infoRigthCard.textContent = item2.descripcion;
}

// Mostrar siguiente persona
nextBtn.addEventListener('click', function () {
  contador += 2;
  // Si contador es mayor que 7 que sería el último elemento del array, tendría que volver a la posición 0.
  if (contador > reviews.length - 1) {
    contador = 0;
  }
  showPerson(contador);
});

// Mostrar persona anterior
prevBtn.addEventListener('click', function () {
  contador -= 2;
  if (contador < 0) {
    contador = reviews.length - 1;
  }
  showPerson(contador);
});

// Mostrar persona aleatoria
randomBtn.addEventListener('click', function () {
  contador = Math.floor(Math.random() * reviews.length);
  showPerson(contador);
});
