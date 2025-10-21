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
            fnShowMessage()
            console.log(body)
        }
    )
}