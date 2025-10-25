const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const puerto = 3001;
//contacto: id,nombre,apellido,celular


app.use(bodyParser.json())

app.use("/contactos", (request, response, next) => {
    console.log("headers:", request.headers);
    console.log("body:", request.body);

    next();
});


app.get("/contactos", (request, response) => {
    const contactos = [
        { id: 1, nombre: "Joaquin", apellido: "Bowen", celular: "0995531178" },
        { id: 2, nombre: "Ana", apellido: "Suarez", celular: "0995553117" },
        { id: 3, nombre: "Enrique", apellido: "Iglesias", celular: "0995531177" }

    ];
    response.send(contactos);
    console.log("Ingresa a get")
})


app.post("/contactos", (req, resp) => {
    req.body.id = 99;
    resp.send(req.body);
})

app.put("/contactos/:idParam", (req, resp) => {
    const id = req.params.idParam;
    console.log("id: ", id);
    resp.send(req.body);
})

app.delete("/contactos/:id", (req, resp) => {
    const id = req.params.id;
    console.log("id:", id);
    resp.send({
        id: id
    });
})

app.listen(puerto, () => {
    console.log("Servidor listo en el puerto " + puerto);
})