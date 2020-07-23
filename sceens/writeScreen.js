import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class WriteScreen extends React.Component { 
    render(){
        return(
            <View style = {styles.textView}>
                <Text style={styles.text}>Write Screen</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    textView:{
        marginTop : 200,
        marginLeft : 500,
    },
    text: {
        fontSize : 40,
    }
})