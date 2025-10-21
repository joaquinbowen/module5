import { View, Text, StyleSheet, Alert } from "react-native"
import { Input, Button } from "@rneui/base"
import { useState } from "react"
import { saveLaptopRest } from "../rest_client/laptops"

export const LaptopsForm = ({ navigation }) => {
    const [marca, setMarca] = useState();
    const [procesador, setProcesador] = useState();
    const [memoria, setMemoria] = useState();
    const [disco, setDisco] = useState();

    const showMessage = () => {
        Alert.alert("Confimarcion", "SE CREÓ LA LAPTOP")
    }

    const saveLaptop = () => {
        console.log("entra a guardar")
        navigation.goBack()
        saveLaptopRest(({
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
                onPress={saveLaptop}
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
