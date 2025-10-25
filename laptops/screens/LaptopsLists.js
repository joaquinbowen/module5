import { StyleSheet, View, Text, FlatList, TouchableHighlight } from "react-native";
import { Button, FAB } from "@rneui/base";
import { getAllLaptops } from "../rest_client/laptops"
import { useState } from "react";
import { ListItem } from '@rneui/themed';

export const LaptopsList = ({ navigation }) => {
    const [laptopsList, setLaptopsList] = useState([]);

    const fnRefreshList = (laptops) => {
        setLaptopsList(laptops)
    }

    const LaptopItem = ({ laptop }) => {
        return (
            <TouchableHighlight onPress={() => { navigation.navigate("LaptopsFormNav", { LaptopParam: laptop }) }}>
                <ListItem>
                    <ListItem.Content>
                        <ListItem.Title>{laptop.marca}  </ListItem.Title>
                        <ListItem.Subtitle>{laptop.procesador} {laptop.memoria} {laptop.disco} </ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            </TouchableHighlight>
        );
    }

    return (
        <View style={styles.container} >
            <Text>Lista de Laptops</Text>
            <Button
                title="Consultar laptops"
                onPress={() => {
                    getAllLaptops(fnRefreshList)
                }}
            />
            <FlatList
                data={laptopsList}
                renderItem={({ item }) => {
                    return (
                        <LaptopItem laptop={item} ></LaptopItem>
                    )
                }}

            />
            <FAB
                title="+"
                onPress={() => {
                    navigation.navigate("LaptopsFormNav", {})
                }}
            />


        </View>)

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: "column",//pricipal eje vertical
        alignItems: 'stretch',//secundario horizontal
        justifyContent: 'flex-start',
        padding: 20
    },
});