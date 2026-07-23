let peliculas = [];
let siguiente_id = 1;

const API_URL = "http://localhost:3000/peliculas";

const formulario = document.getElementById("formulario");
const input_id = document.getElementById("id");
const input_titulo = document.getElementById("titulo");
const input_director = document.getElementById("director");
const input_año = document.getElementById("año");
const tabla = document.getElementById("tablaPeliculas");

mostrarPeliculas();

async function mostrarPeliculas() {
    const respuesta = await fetch(API_URL);

    peliculas = await respuesta.json();

    tabla.innerHTML = "";

    peliculas.forEach((pelicula) => {
        tabla.innerHTML += `
            <tr>
                <td>${pelicula.id}</td>
                <td>${pelicula.titulo}</td>
                <td>${pelicula.director}</td>
                <td>${pelicula.año}</td>
                <td>
                    <button onclick="editar(${pelicula.id})">
                        Editar
                    </button>

                    <button onclick="eliminar(${pelicula.id})">
                        Eliminar
                    </button>
                </td>
            </tr>
        `;
    });
}

formulario.addEventListener("submit", async (e) => {
    e.preventDefault();

    const pelicula = {
        titulo: titulo.value,
        director: director.value,
        año: Number(año.value)
    };

    if (id.value === "") {
        await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pelicula)
        });
    } else {
        await fetch(`${API_URL}/${id.value}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pelicula)
        });
    }

    formulario.reset();
    id.value = "";

    await mostrarPeliculas();
});

function editar(idPelicula) {
    const pelicula = peliculas.find(
        (pelicula) => pelicula.id === idPelicula
    );

    if (!pelicula) { return; }

    id.value = pelicula.id;
    titulo.value = pelicula.titulo;
    director.value = pelicula.director;
    año.value = pelicula.año;
}

async function eliminar(idPelicula) {
    await fetch(`${API_URL}/${idPelicula}`, {
        method: "DELETE"
    });

    await mostrarPeliculas();
}

/*

function mostrarPeliculas() {
    tabla.innerHTML = "";
    peliculas.forEach((pelicula) => {
        tabla.innerHTML += `
            <tr>
                <td>${pelicula.id}</td>
                <td>${pelicula.titulo}</td>
                <td>${pelicula.director}</td>
                <td>${pelicula.año}</td>
                <td>
                    <button onclick="editar(${pelicula.id})" style="background-color: orange">
                        Editar
                    </button>
                    <button onclick="eliminar(${pelicula.id})" style="background-color: red">
                        Eliminar
                    </button>
                </td>
            </tr>
        `;
    });
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    if(input_id.value == "") {
        peliculas.push({
            id: siguiente_id++,
            titulo: input_titulo.value,
            director: input_director.value,
            año: Number(input_año.value)
        });
    } else {
        const pelicula = peliculas.find(p => p.id == input_id.value);
        pelicula.titulo = input_titulo.value;
        pelicula.director =  input_director.value;
        pelicula.año = Number(input_año.value);
    }
    formulario.reset();
    input_id.value = "";
    console.log(peliculas);
    mostrarPeliculas();
});

function editar(idPelicula) {
    const pelicula = peliculas.find(p => p.id == idPelicula);
    input_id.value = idPelicula;
    input_titulo.value = pelicula.titulo;
    input_director.value = pelicula.director;
    input_año.value = Number(pelicula.año);
}

function eliminar(idPelicula) {
    peliculas = peliculas.filter(p => p.id != idPelicula);
    mostrarPeliculas();
}
*/