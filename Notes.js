// ScrollView- allows views to be scrollable
//     Cons: it renders all items at one time, even the items not viewable

import { TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, ShadowPropTypesIOS, TouchableWithoutFeedback } from "react-native"

// Flatlist -handles infinite lists
    <FlatList data ={textsList} renderItem={itemData => 
      <View style = {styles.listItem} key={text}>
          <Text>{text}</Text>
        </View> }/>
    //1. requires 'data' array of items you want to display
    //2. renderItem gets rid of map Key-Value logic from ScrollView

    Touchable;
    TouchableHighlight;
    TouchableOpacity;
    TouchableWithoutFeedback;
    TouchableNativeFeedback;
      <TouchableHighlight onPress={props.functionName}></TouchableHighlight>