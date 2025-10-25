import { View, Text, StyleSheet, Alert } from "react-native"
import { Input, Button } from "@rneui/base"
import { useState } from "react"
import { saveLaptopRest } from "../rest_client/laptops"

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

    const showMessage = () => {
        Alert.alert("Confimarcion", isNew ? "SE CREÓ LA LAPTOP" : "Laptop Actualizada")
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
        saveLaptopRest(({
            id: laptopRetrieved.id,
            marca: marca,
            procesador: procesador,
            memoria: memoria,
            disco: disco
        }), showMessage
        )
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
