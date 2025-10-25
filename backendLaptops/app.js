const express = require("express")
const bodyParser = require("body-parser")
const app = express();
const puerto = 9090;
//objetos : id,marca,procesador,memoria,disco
const lap = [
    { id: 1, marca: "Asus", procesador: "Dual Core", memoria: "8 GB", disco: "2 TB" },
    { id: 2, marca: "Lenovo", procesador: "i3", memoria: "2 GB", disco: "1 TB" },
    { id: 3, marca: "HP", procesador: "i5", memoria: "4 GB", disco: "2 TB" },
    { id: 4, marca: "Dell", procesador: "i9", memoria: "32 GB", disco: "1 TB" },
    { id: 5, marca: "Cnt", procesador: "i11", memoria: "64 GB", disco: "5 TB" }

]

app.listen(puerto, () => {
    console.log(puerto)
})

app.use(bodyParser.json())

app.use("/laptops", (request, response, next) => {
    console.log("headers:", request.headers)
    console.log("body:", request.body)
    next();
})

app.post("/laptops", (request, response) => {
    request.body.id = 45;
    response.send(request.body)
})

app.get("/laptops/:id", (request, response) => {
    const id = request.params.id;
    lpt = { id, marca: "Asus", procesador: "Dual Core", memoria: "8 GB", disco: "2 TB" }
    response.send(lpt)
})

app.get("/laptops", (request, response) => {
    response.send(lap);
})

app.put("/laptops/:id", (request, response) => {
    const id = request.params.id;
    response.send(request.body);
})

app.delete("/laptops/:id", (request, response) => {
    const id = request.params.id;
    response.send({ id: id })
})