/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';


import TextItem from './components/textItem';
import TextInputComponent from './components/textInput';
import HeaderSection from './components/header';

const App: () => React$Node = () => {

  const [textsList, setTextsList] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);


  const addTextHandler = (textTitle) => {
    setTextsList(currentTextList => [...currentTextList,
    { id: Math.random().toString(), value: textTitle }]);
    setIsAddMode(false);
  };

  const removeTextHandler = textId => {
    setTextsList(currentTextList => {
      return currentTextList.filter((text) => text.id != textId);
    })
  }

  const cancelTextAdditionHandler = () => {
    setIsAddMode(false);
  }
  return (
    <View style={styles.screen}>
      <HeaderSection/> 
      <Button title ="Add To List" onPress={() => setIsAddMode(true)}/>
      <TextInputComponent visible = {isAddMode} onAddText={addTextHandler} onCancel={cancelTextAdditionHandler} />
      <FlatList
        keyExtractor={(item) => item.id}
        data={textsList}
        renderItem={itemData =>
          <TextItem
            id={itemData.item.id}
            onDelete={removeTextHandler}
            title={itemData.item.value} />}
      />
    </View>
  );
}



const styles = StyleSheet.create({
  screen: {
    padding: 30,
  },

});

export default App;
