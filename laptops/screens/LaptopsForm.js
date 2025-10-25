import { View, Text, StyleSheet, Alert } from "react-native"
import { Input, Button } from "@rneui/base"
import { useState } from "react"
import { saveLaptopRest, updateLaptopRest, deleteLaptopRest } from "../rest_client/laptops"

export const LaptopsForm = ({ navigation, route }) => {
    let laptopRetrieved = route.params.LaptopParam;
    let isNew = true

    if (laptopRetrieved != null) {
        isNew = false
    }


    const [marca, setMarca] = useState(!isNew ? laptopRetrieved.marca : null);
    const [procesador, setProcesador] = useState(!isNew ? laptopRetrieved.procesador : null);
    const [memoria, setMemoria] = useState(!isNew ? laptopRetrieved.memoria : null);
    const [disco, setDisco] = useState(!isNew ? laptopRetrieved.disco : null);

    const showMessage = (message) => {
        Alert.alert("Confimarcion", message)
        navigation.goBack()
    }

    const createLaptop = () => {
        console.log("entra a guardar")
        saveLaptopRest(({
            marca: marca,
            procesador: procesador,
            memoria: memoria,
            disco: disco
        }), showMessage
        )
    }

    const updateLaptop = () => {
        console.log("entra a actualizar")
        updateLaptopRest(({
            id: laptopRetrieved.id,
            marca: marca,
            procesador: procesador,
            memoria: memoria,
            disco: disco
        }), showMessage
        )
    }

    const deleteLaptop = () => {
        deleteLaptopRest(
            { id: laptopRetrieved.id }, showMessage
        )
    }

    const confirmDelete = () => {
        Alert.alert("CONFIRMACION", "ESTA SEGURO DE ELIMINAR", [
            {
                text: "CANCELAR"
            },
            {
                text: "ACEPTAR",
                onPress: deleteLaptop
            }
        ])
    }

    return (
        <View style={styles.container} >
            <Input
                value={marca}
                placeholder="MARCA"
                onChangeText={(txt) => {
                    setMarca(txt);
                }}
            />
            <Input
                value={procesador}
                placeholder="PROCESADOR"
                onChangeText={(txt) => {
                    setProcesador(txt);
                }}
            />
            <Input
                value={memoria}
                placeholder="MEMORIA"
                onChangeText={(txt) => {
                    setMemoria(txt);
                }}
            />
            <Input
                value={disco}
                placeholder="DISCO"
                onChangeText={(txt) => {
                    setDisco(txt)
                }}
            />
            <Button
                title="GUARDAR"
                onPress={isNew ? createLaptop : updateLaptop}
            />
            {
                isNew ? <View></View> : <Button title="ELIMINAR" onPress={confirmDelete} />
            }
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
