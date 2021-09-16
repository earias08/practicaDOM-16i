function cambiarTitulo() {
  console.log("Desde la funcion cambiar titulo");
  // traer un elemento o etiqueta del html
  // let tituloH1 = document.querySelector('#titulo');
  // opcion 2 para obtener un elemento del html
  let tituloH1 = document.getElementById("titulo");
  console.log(tituloH1.innerHTML);
  tituloH1.innerHTML = "Un nuevo titulo";
  tituloH1.className = "display-2 text-primary";
}

function verMas() {
  console.log("prueba desde ver mas");
  // buscar el boton
  let btnVerMas = document.getElementById("btnVerMas");
  // crear y agregar un elemento al DOM
  // paso 1 - buscar el elemento padre
  let articulos = document.getElementsByTagName("article");
  console.log(articulos[1]);

  if (btnVerMas.innerHTML === "ver mas...") {
    btnVerMas.innerHTML = "ocultar";
    btnVerMas.className = "btn btn-outline-danger";
    // paso 2 - crear el elemento hijo
    let parrafo = document.createElement("p"); //<p></p>
    console.log(parrafo);
    parrafo.innerHTML =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, aliquid quam mollitia, magni tempore animi vel ab ratione veniam obcaecati est alias in, minus illum necessitatibus ducimus aliquam. Doloribus laborum delectus illum sunt odio sapiente ex repellat reprehenderit inventore eveniet impedit, sequi harum quod non id quae. Culpa omnis nulla fugit eius modi ab error ea distinctio, laboriosam unde eos maxime accusamus dolor mollitia explicabo veniam iure voluptates. Quod, cumque. Illo quisquam molestiae aspernatur, quis maiores sint. Obcaecati ab fugiat, consequuntur iusto nisi cum consectetur veniam omnis, repellendus, non adipisci pariatur dicta! Fugiat placeat incidunt velit laudantium ullam possimus deserunt?";
    parrafo.className = "lead";

    // paso 3 - agregar el nuevo elemento hijo a su respectivo padre
    articulos[1].appendChild(parrafo);
  }else{
      console.log('ahora cambiar el texto del boton por ver mas...');
    //   volver el boton a su estado original ver mas...
    btnVerMas.innerHTML = 'ver mas...';
    btnVerMas.className = 'btn btn-outline-primary';
    // eliminar el parrafo

    console.log(articulos[1].hasChildNodes());
    console.log(articulos[1].children.length);
    console.log(articulos[1].children);
    if(articulos[1].hasChildNodes() && articulos[1].children.length >2){
        // eliminar efectivamente el parrafo
        articulos[1].removeChild(articulos[1].children[2])
    }
  }
}
