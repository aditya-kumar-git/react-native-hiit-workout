import React from "react"

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import MainPage from "./SRC/Screens/MainPage"
import AdjustTime from "./SRC/Screens/AdjustTime"
import myStore from "./SRC/Redux/Store"
import { Provider } from "react-redux"

export default class App extends React.Component {
  render() {
    var Stack = createStackNavigator()
    return (
      <Provider store={myStore}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="MainPage"
              component={MainPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdjustTime"
              component={AdjustTime}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
}
