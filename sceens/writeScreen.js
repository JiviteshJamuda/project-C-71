import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class WriteScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            text : ""
        }
    }

    submitStory = ()=>{
        console.log("qwertyuiop")
        alert("Congratulations your story has been submitted")
    }

    render(){
        return(
            <View>
                <TextInput style={styles.TextInput} multiline 
                    placeholder = "Write your story here"
                    numberOfLines={20} 
                    onChangeText={(text) => {
                        this.setState({
                            text : text,
                        })
                    }}
                    value={this.state.text}
                    maxLength={-1}
                />
                <TouchableOpacity style = {styles.submit} onPress={this.submitStory}>
                    <Text style = {styles.submitText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    TextInput : {
        borderWidth : 3,
        margin : 30
    },
    submit : {
        width : 90,
        height : 40,
        alignSelf : "center",
        borderWidth : 3,
        alignItems : "center",
        justifyContent : "center",
        borderRadius : 10,  
        borderColor : "brown",
        backgroundColor : "green",
    },
    submitText : {
        fontFamily : "bold",
        fontSize : 20,
    }
})