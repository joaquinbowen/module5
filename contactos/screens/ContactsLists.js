import { View, Text, StyleSheet, FlatList, TouchableHighlight } from "react-native"
import { Button, FAB } from "@rneui/base";
import { getAllContacts } from "../rest_client/contactos"
import { useState, useEffect } from "react";
import { ListItem } from '@rneui/themed';

export const ContactsList = (props) => {
    const [contactsList, setContactsList] = useState([]);


    useEffect(() => {
        console.log("use effect")
        getAllContacts(fnRefreshList);
    }, [])
    const ContactItem = ({ contact }) => {
        return (
            <TouchableHighlight onPress={() => { props.navigation.navigate("ContactsFormNav", { contactParam: contact }) }} >
                <ListItem>
                    <ListItem.Content>
                        <ListItem.Title>{contact.nombre} {contact.apellido} </ListItem.Title>
                        <ListItem.Subtitle>{contact.celular} </ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            </TouchableHighlight>
        )
    }

    const fnRefreshList = (contacts) => {
        setContactsList(contacts)
        console.log(contacts)
    }
    return (
        <View style={styles.container}>

            <FlatList
                data={contactsList}
                renderItem={({ item }) => {
                    return (
                        <ContactItem contact={item} />
                    )
                }}
            />
            <FAB
                title="+"
                onPress={() => {
                    props.navigation.navigate("ContactsFormNav", {})
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
