import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    center:{
        alignItems:'center',
    },
});

export const HelloWorldTest = ()=>{
    const Hello = (
        <View
            style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center',
        }}>
            <Text>Hello World!</Text>
        </View>
    );
    return Hello;
};

export const HelloYou = (props)=>{
    return (
        <View style={styles.center}>
            <Text>Hello {props.name}</Text>
        </View>
    );
}
