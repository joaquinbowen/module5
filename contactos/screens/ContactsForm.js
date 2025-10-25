import { View, Text, StyleSheet, Alert } from "react-native"
import { Input, Button } from "@rneui/base"
import { useState } from "react"
import { saveContactRest, updateContactRest } from "../rest_client/contactos"

export const ContactsForm = ({ navigation, route }) => {
    let contactRetrieved = route.params.contactParam;
    let isNew = true;

    if (contactRetrieved != null) {
        isNew = false;
    }
    console.log("isNew:", isNew)
    console.log("ctcRetrieved;", contactRetrieved)

    const [name, setName] = useState(isNew ? null : contactRetrieved.nombre);
    const [surname, setSurname] = useState(isNew ? null : contactRetrieved.apellido);
    const [phoneNumber, setPhoneNumber] = useState(isNew ? null : contactRetrieved.celular);

    console.log(route.params.contactParam)

    const showMessage = () => {
        Alert.alert("Confirmacion", isNew ? "Se creó el contacto" : "Se actualizó el contacto")
        navigation.goBack()
    }

    const createContact = () => {
        console.log("aaaa")
        saveContactRest(
            {
                name: name,
                surname: surname,
                phoneNumber: phoneNumber
            },
            showMessage
        )
    }

    const updateContact = () => {
        console.log("actualizando contacto")
        updateContactRest({
            id: contactRetrieved.id,
            name: name,
            surname: surname,
            phoneNumber: phoneNumber
        }, showMessage)

    }




    return (
        <View style={styles.container}>

            <Input
                value={name}
                placeholder="NOMBRE"
                onChangeText={(txt) => {
                    setName(txt)
                }}
            />
            <Input
                value={surname}
                placeholder="Apellido"
                onChangeText={(txt) => {
                    setSurname(txt)
                }}
            />
            <Input
                value={phoneNumber}
                placeholder="Telefono"
                onChangeText={(txt) => {
                    setPhoneNumber(txt)
                }}
            />
            <Button
                title="GUARDAR"
                onPress={isNew ? createContact : updateContact}
            />
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
