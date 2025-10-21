import { View, Text, StyleSheet, Alert } from "react-native"
import { Input, Button } from "@rneui/base"
import { useState } from "react"
import { saveContactRest } from "../rest_client/contactos"

export const ContactsForm = ({ navigation }) => {
    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    const [phoneNumber, setPhoneNumber] = useState();


    const showMessage = () => {
        Alert.alert("Confirmacion", "Se creó el contacto")
    }

    const saveContact = () => {
        console.log("aaaa")
        navigation.goBack()
        saveContactRest(
            {
                name: name,
                surname: surname,
                phoneNumber: phoneNumber
            },
            showMessage
        )
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
                onPress={saveContact}
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
