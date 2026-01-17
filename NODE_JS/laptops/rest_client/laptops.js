const IP = "192.168.1.23";
const PORT = "9090";
const URL = "http://" + IP + ":" + PORT + "/"

export const getAllLaptops = (fnRefreshList) => {
    console.log(":v")
    fetch(
        URL + "laptops"
    ).then(
        (response) => {
            return response.json()
        }
    ).then(
        (body) => {
            fnRefreshList(body)
        }
    )
}

export const saveLaptopRest = (laptop, fnShowMessage) => {
    console.log(".¿")
    const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            marca: laptop.marca,
            procesador: laptop.procesador,
            memoria: laptop.memoria,
            disco: laptop.disco
        })
    }
    fetch(
        URL + "laptops",
        config
    ).then(
        (response) => {
            return response.json()
        }
    ).then(
        (body) => {
            console.log("entra al then")
            fnShowMessage("SE HA CREADO LA LAPTOP")
            console.log(body)
        }
    )
}

export const updateLaptopRest = (laptop, fnShowMessage) => {
    console.log(".¿")
    const config = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: laptop.id,
            marca: laptop.marca,
            procesador: laptop.procesador,
            memoria: laptop.memoria,
            disco: laptop.disco
        })
    }
    fetch(
        URL + "laptops/" + laptop.id,
        config
    ).then(
        (response) => {
            return response.json()
        }
    ).then(
        (body) => {
            console.log("entra al then")
            fnShowMessage("SE HA ACTUALIZADO LA LAPTOP")
            console.log(body)
        }
    )
}

export const deleteLaptopRest = (laptop, fnShowMessage) => {
    console.log(".¿")
    const config = {
        method: "DELETE"
    }
    fetch(
        URL + "laptops/" + laptop.id,
        config
    ).then(
        (response) => {
            return response.json()
        }
    ).then(
        (body) => {
            console.log("entra al then")
            fnShowMessage("SE HA ELIMINADO LA LAPTOP")
            console.log(body)
        }
    )
}