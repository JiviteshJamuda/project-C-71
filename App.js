import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ReadScreen from "./sceens/readScreen"
import WriteScreen from "./sceens/writeScreen"

export default class App extends React.Component {
  render(){
    return (
      
        <AppContainer/>
      
    );
  }
  
}

const TabNavigator = createBottomTabNavigator({
  WriteStories: {screen: WriteScreen},
  ReadBooks: {screen: ReadScreen},
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName);
      if(routeName === "ReadBooks"){
        return(
          <Text>Read Books</Text>
        )
        
      }
      else if(routeName === "WriteStories"){
        return(
          <Text>Write stories</Text>
        )
        
      }
    }
  })
}
);

const AppContainer =  createAppContainer(TabNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
