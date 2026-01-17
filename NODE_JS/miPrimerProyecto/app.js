const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const puerto = 3001;
const { Client } = require("pg")
const createClient = () => {
    return (new Client(
        {
            user: "postgres",
            host: "192.168.1.23",
            database: "contactosNode",
            password: "impacto2580",
            port: 5432
        }
    ));
}
//contacto: id,nombre,apellido,celular
app.use(bodyParser.json())

app.use("/contactos", (request, response, next) => {
    console.log("headers:", request.headers);
    console.log("body:", request.body);
    next();
});


app.get("/contactos", async (request, response) => {
    const client = createClient();
    try {
        await client.connect();
        client.query("select * from contactos").then(
            responseQuery => {
                console.log("Ingresa a get")
                console.log(responseQuery.rows);
                response.send(responseQuery.rows);
            }).catch(
                err => {
                    console.log(err);
                }
            )
    } catch (error) {
        response.status(500).json({ message: "error en la consulta", error });
    }
})


app.post("/contactos", (req, resp) => {
    const client = createClient();
    client.connect();
    client.query('insert into contactos(nombre,apellido,celular) values($1,$2,$3) RETURNING *', [req.body.nombre, req.body.apellido, req.body.celular]).then(
        responseQuery => {
            console.log(responseQuery.rows[0]);
            resp.send(responseQuery.rows[0]);
        }
    ).catch(
        err => {
            console.log(err);
            resp.status(500).json({ message: "error en la consulta", err });
        }
    )
    //resp.send(req.body);
})

app.put("/contactos/:idParam", (req, resp) => {
    const id = req.params.idParam;
    console.log("id: ", id);
    const client = createClient();
    client.connect();
    client.query('update contactos set nombre=$1, apellido=$2 ,celular=$3 where id=$4 RETURNING *', [req.body.nombre, req.body.apellido, req.body.celular, id]).then(
        responseQuery => {
            console.log(responseQuery.rows[0]);
            resp.send(responseQuery.rows[0]);
        }
    ).catch(
        err => {
            console.log(err);
            resp.status(500).json({ message: "error en la consulta", err });
        }
    )
})

app.delete("/contactos/:id", (req, resp) => {
    const id = req.params.id;
    const client = createClient();
    client.connect();
    client.query('delete from contactos where id=$1', [id])
    resp.send({
        id: id
    });
})

app.listen(puerto, () => {
    console.log("Servidor listo en el puerto " + puerto);
})