import React, { useState } from 'react';
import { View, Button, StyleSheet, TextInput, Modal } from 'react-native'


const textInputComponent = props => {
    const [enteredText, setEnteredText] = useState('');

    const textHandler = (enteredText) => {
        setEnteredText(enteredText);
    };

    const addTextHandler = () => {
        props.onAddText(enteredText);
        setEnteredText('');
    };

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Type Here"
                    style={styles.textInput}
                    onChangeText={textHandler}
                    value={enteredText} />
                <View style = {styles.buttonContainer}>
                    <View style = {styles.button}>
                         <Button title="CANCEL" color="red" onPress={props.onCancel} />
                    </View>
                    <View style = {styles.button}>
                        <Button title="ADD" onPress={addTextHandler} />
                    </View>
                </View>

            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '60%',
        justifyContent: 'space-between'


    },
    button: {
        width: '40%'
    }

});

export default textInputComponent;