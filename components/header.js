import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const headerSection = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}> Shopping List </Text>
        </View>
    )
}

const styles = StyleSheet.create({
title: {
        paddingBottom: 10,
        fontSize: 40,
        fontWeight: 'bold'
        
  },
  header: {
        alignItems: 'center'
  }
})

export default headerSection;