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