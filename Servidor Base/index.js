const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
const PORT = 3000;

let peliculas = [
    {
        id: 1,
        titulo: "Interestelar",
        director: "Christopher Nolan",
        año: 2014
    },
    {
        id: 2,
        titulo: "La Odisea",
        director: "Christopher Nolan",
        año: 2026
    }
];
let idActual = peliculas.length + 1;

// Sesion 2
// Obtener todas las peliculas
app.get("/peliculas", (req, res) => {
    res.json(peliculas);
});

// Obtener una pelicula por ID 
app.get("/peliculas/:id", (req, res) => {
    const id = Number(req.params.id);
    const pelicula = peliculas.find(pelicula => pelicula.id === id);
    if(!pelicula) return res.status(404).json( { mensaje: "Pelicula no encontrada" });
    res.json(pelicula);
});

// Introducir
app.post("/peliculas", (req, res) => {
    const { titulo, director, año } = req.body;
    if(!titulo || !director || !año) {
        return res.status(400).json({
            mensaje: "Faltan datos de la pelicula"
        });
    }
    const nuevaPelicula = {
        id: idActual++,
        titulo: titulo,
        director: director,
        año: Number(año)
    };
    peliculas.push(nuevaPelicula);
    res.status(201).json({
        mensaje: "Pelicula registrada correctamente",
        pelicula: nuevaPelicula
    });
});

// Actualizar una pelicula
app.put("/peliculas/:id", (req, res) => {
    const id = Number(req.params.id);
    const { titulo, director, año } = req.body;
    if(!titulo || !director || !año) {
        return res.status(400).json({
            mensaje: "Faltan datos de la pelicula"
        });
    }
    const indice = peliculas.findIndex(pelicula => pelicula.id === id);
    if(indice === -1)
        return res.status(404).json({ mensaje: "Pelicula no encontrada" });
    peliculas[indice] = {
        id: id,
        titulo: titulo,
        director: director,
        año: Number(año)
    };
    res.json({
        mensaje: "Pelicula actualizada correctamente",
        pelicula: peliculas[indice]
    });
});

// Eliminar una pelicula
app.delete("/peliculas/:id", (req, res) => {
    const id = Number(req.params.id);
    const indice = peliculas.findIndex(pelicula => pelicula.id === id);
    if(indice === -1)
        return res.status(404).json({ mensaje: "Pelicula no encontrada" });
    const peliculaEliminada = peliculas[indice];
    peliculas.splice(indice, 1);
    res.json({
        mensaje: "Pelicula eliminada correctamente",
        pelicula: peliculaEliminada
    });
});

// Sesion 1
app.get("/", (req, res) => {
    res.send("Bienvenido a mi primer servidor con express");
});

app.get("/pagina", (req, res) => {
    res.send(`
        <style>
        h1 { color: red; }
        </style>
        <h1>Mi pagina</h1>
        <p>Creada con Express</p>
    `);
});

app.get("/saludo/:nombre", (req, res) => {
    const nombre = req.params.nombre;
    res.send("Hola " + nombre);
});

app.get("/par/:numero", (req, res) => {
    const numero = req.params.numero;
    res.send("El numero " + numero + " es un numero " + ((numero % 2 == 0)? "par" : "impar"));
});

app.get("/edad/:edad", (req, res) => {
    const edad = req.params.edad;
    res.send("Eres " + ((edad < 18)? "menor" : "mayor") + " de edad.");
});

app.get("/calculadora/:operacion/:a/:b", (req, res) => {
    const operacion = req.params.operacion;
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    switch(operacion) {
        case "suma":            res.send("Resultado: " + (a + b)); break;
        case "resta":           res.send("Resultado: " + (a - b)); break;
        case "multiplicacion":  res.send("Resultado: " + (a * b)); break;
        case "division":        res.send("Resultado: " + (a / b)); break;
    }
});

app.get("/tabla/:numero", (req, res) => {
    const numero = Number(req.params.numero);
    var tabla = "";
    for(let i = 1; i <= 10; i++) {
        tabla += numero + " x " + i + " = " + (numero * i) + ((i < 10)? ",\n" : '');
    }
    res.send(`<p style="white-space: pre;">${tabla}<\p>`, tabla);
});

app.get("/calificacion/:nota", (req, res) => {
    const nota = Number(req.params.nota);
    switch(true) {
        case (nota >= 90): res.send(nota + " >= 90 -> Excelente"); break;
        case (nota >= 80): res.send(nota + " >= 80 -> Muy bien"); break;
        case (nota >= 70): res.send(nota + " >= 70 -> Aprobado"); break;
        case (nota < 70): res.send(nota + " < 70 -> Reprobado"); break;
    }
});

app.listen(PORT, () => {
    console.log("Servidor iniciado en http://localhost:" + PORT);
});