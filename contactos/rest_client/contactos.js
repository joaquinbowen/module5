const IP = "192.168.1.23";
const PORT = "3001";
const URL = "http://" + IP + ":" + PORT + "/"

export const getAllContacts = (fnRefreshList) => {
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    console.log(URL + "contactos")
    fetch(
        URL + "contactos"
    ).then(
        (response) => {
            return response.json()
        }
    ).then(
        (body) => {
            fnRefreshList(body);
        }
    )
}