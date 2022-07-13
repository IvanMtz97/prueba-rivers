const personas = [
  {
    imagen: "https://i.ytimg.com/vi/DM1qqcmFb9s/maxresdefault.jpg",
    name: "La Paca",
  },
  {
    imagen: "https://pbs.twimg.com/profile_images/2146743867/374830_10150610671831515_132945381514_10995702_1843912217_n_1__400x400.jpg",
    name: "El Tum Tum",
  },
  {
    imagen: "https://pbs.twimg.com/media/A6vn5smCQAAWQU4.jpg",
    name: "Rosa Meleño",
  },
  {
    imagen: "https://images.milenio.com/4KU94hDEaM3jOIHajMzZiwTtRxs=/936x566/uploads/media/2019/06/20/la-verdadera-historia-de-chucky_66_0_1203_748.jpg",
    name: "El Chucky",
  },
  {
    imagen: "https://www.clarin.com/img/2016/03/31/el-actor-que-interpretaba-a___HkSl3vjt4g_340x340.jpg",
    name: "El Quico",
  },
  {
    imagen: "https://ih1.redbubble.net/image.958610475.3519/st,small,507x507-pad,600x600,f8f8f8.u2.jpg",
    name: "El Botas",
  },
];


function dibujarPersonas() {
  const lista = document.getElementById('lista');
  
  for(var i = 0; i < personas.length; i++) {
    const divFila = document.createElement('div');
    divFila.classList = "fila";

    const hijo1 = document.createElement('img');
    hijo1.classList = "imagen";
    hijo1.src = personas[i].imagen;

    const hijo2 = document.createElement('span');
    hijo2.classList = "nombre";
    hijo2.innerHTML = personas[i].name;

    divFila.append(hijo1);
    divFila.append(hijo2);

    lista.append(divFila);
  }
}

dibujarPersonas();
















