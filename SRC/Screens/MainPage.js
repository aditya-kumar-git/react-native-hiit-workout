import React from "react"
import {
  StyleSheet,
  View,
  StatusBar,
  Animated,
  Easing,
  TouchableOpacity,
} from "react-native"
import { FontAwesome, AntDesign } from "@expo/vector-icons"

class MainPage extends React.Component {
  state = { rot: new Animated.Value(0) }

  render() {
    //!   INTERPOLATE

    var progressBar = this.state.rot.interpolate({
      inputRange: [0, 1],
      outputRange: ["0%", "100%"],
    })
    var progressBarHeight = this.state.rot.interpolate({
      inputRange: [0, 0.1],
      outputRange: ["0%", "100%"],
      extrapolate: "clamp",
    })
    var changeBackColor = this.state.rot.interpolate({
      inputRange: [0, 1],
      outputRange: ["#409367", "lightskyblue"],
    })
    var startWorkOut = () => {
      Animated.timing(this.state.rot, {
        toValue: 1,
        duration: 10000,
        easing: Easing.linear,
      }).start()
    }

    //! RETURN

    return (
      <Animated.View
        style={[hiitStyle.container, { backgroundColor: changeBackColor }]}
      >
        <StatusBar barStyle="light-content" />

        {/*//! HEAD TEXT */}

        <View
          style={{
            justifyContent: "space-evenly",
            alignItems: "center",
            flex: 1,
          }}
        >
          <Animated.Text style={hiitStyle.restORburn}>REST</Animated.Text>
        </View>

        {/*//! FUNCTIONALITY */}

        <View style={{ flex: 1 }}>
          {/*//! PROGRESS BAR */}

          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View style={hiitStyle.holder}>
              <Animated.View
                style={{
                  backgroundColor: "orange",
                  borderRadius: 80,
                  height: progressBarHeight,
                  width: progressBar,
                }}
              ></Animated.View>
            </View>
          </View>

          {/*//! BUTTONS */}

          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {/*//! START BUTTON */}

            <TouchableOpacity
              style={hiitStyle.startButton}
              activeOpacity={0.8}
              onPress={startWorkOut}
            >
              <FontAwesome
                name="play"
                style={{ color: "black", fontSize: 30 }}
              />
            </TouchableOpacity>

            {/*//! CLOCK BUTTON */}

            <TouchableOpacity
              style={hiitStyle.clockButton}
              activeOpacity={0.8}
              onPress={() => {
                this.props.navigation.navigate("AdjustTime")
              }}
            >
              <AntDesign
                name="clockcircle"
                style={{ color: "black", fontSize: 25 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    )
  }
}

const hiitStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  holder: {
    width: "90%",
    height: 30,
    backgroundColor: "white",
    borderRadius: 100,
    position: "relative",
    justifyContent: "center",
    shadowColor: "rgba(0,0,0,0.4)",
    shadowOpacity: 1,
    shadowOffset: { height: 3, width: 3 },
  },
  startButton: {
    height: 100,
    width: 100,
    borderRadius: 100,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgba(0,0,0,0.4)",
    shadowOpacity: 1,
    shadowOffset: { height: 3, width: 3 },
  },
  clockButton: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: "white",
    position: "absolute",
    transform: [{ translateX: 130 }],
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgba(0,0,0,0.4)",
    shadowOpacity: 1,
    shadowOffset: { height: 3, width: 3 },
  },
  restORburn: {
    color: "white",
    fontWeight: "bold",
    fontSize: 40,
    letterSpacing: 20,
    marginLeft: 10,
  },
})
export default MainPage
