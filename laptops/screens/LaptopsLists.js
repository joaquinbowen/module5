import { StyleSheet, View, Text, FlatList } from "react-native";
import { Button } from "@rneui/base";
import { getAllLaptops } from "../rest_client/laptops"
import { useState } from "react";
import { ListItem } from '@rneui/themed';

export const LaptopsList = () => {
    const [laptopsList, setLaptopsList] = useState([]);

    const fnRefreshList = (laptops) => {
        setLaptopsList(laptops)
    }

    const LaptopItem = ({ laptop }) => {
        return (
            <ListItem>
                <ListItem.Content>
                    <ListItem.Title>{laptop.marca}  </ListItem.Title>
                    <ListItem.Subtitle>{laptop.procesador} {laptop.memoria} {laptop.disco} </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
    }

    return (
        <View>
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


        </View>)
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
