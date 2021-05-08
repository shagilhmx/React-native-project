import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button } from 'react-native';


import App1 from "./App1";
import App2 from "./App2";
import App3 from "./App3";
import styles from "./styles.js";

  const AppStack = createStackNavigator();

  function Home({navigation}){
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around', }}>
      <Button
        title="Go to Square-1"
        onPress={() => navigation.navigate("Square1")}
      />
      <Button
        title="Go to Square-2"
        onPress={() => navigation.navigate("Square2")}
      />
      <Button
        title="Go to Square-3"
        onPress={() => navigation.navigate("Square3")}
      />
    </View>
    )
  }
  function App(){
    return (
      <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: true }} >
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="Square1" component={App1} />
      <AppStack.Screen name="Square2" component={App2} />
      <AppStack.Screen name="Square3" component={App3} />
      </AppStack.Navigator>
    </NavigationContainer>
      );
  }
   export default App;