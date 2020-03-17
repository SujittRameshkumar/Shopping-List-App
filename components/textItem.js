import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const textItem = props => {
    return (
        <TouchableOpacity activeOpacity ={.3} onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItem} >
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>

    );

};


const styles = StyleSheet.create({

    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#9cf7cb',
        borderColor: 'black',
        borderWidth: 1

    }

});
export default textItem;