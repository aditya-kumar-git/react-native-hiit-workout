import React, { Component } from "react"
import {
  StyleSheet,
  View,
  StatusBar,
  Animated,
  Easing,
  TouchableOpacity,
  Text,
} from "react-native"
import { connect } from "react-redux"
import { FontAwesome, AntDesign } from "@expo/vector-icons"

class MainPage extends React.Component {
  componentDidMount() {
    this.setState({
      repeats: this.props.RepeatTime,
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.RepeatTime !== this.props.RepeatTime) {
      this.setState({
        repeats: this.props.RepeatTime,
      })
    }
  }

  state = {
    progressBar: new Animated.Value(0),
    currentWork: "START",
    repeats: 1,
    dataOPA: new Animated.Value(1),
    changeBackColor: new Animated.Value(0),
  }

  render() {
    var { WorkoutTime, RestTime, RepeatTime } = this.props

    //!   INTERPOLATE

    var goProgress = this.state.progressBar.interpolate({
      inputRange: [0, 1],
      outputRange: ["0%", "100%"],
    })
    var goProgressHeight = this.state.progressBar.interpolate({
      inputRange: [0, 0.1],
      outputRange: ["0%", "100%"],
      extrapolate: "clamp",
    })

    var changeBackColor = this.state.changeBackColor.interpolate({
      inputRange: [0, 1, 2, 3],
      outputRange: ["#409367", "#ED494A", "#3096F7", "#409367"],
    })

    //! START WORKOUT

    var startWorkOut = () => {
      this.setState({
        currentWork: "WORKOUT",
      })
      Animated.parallel([
        Animated.timing(this.state.progressBar, {
          toValue: 1,
          duration: 1000 * WorkoutTime,
          easing: Easing.linear,
        }),
        Animated.spring(this.state.dataOPA, {
          toValue: 0,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.changeBackColor, {
          toValue: 1,
          duration: 800,
        }),
      ]).start(() => {
        this.setState({
          currentWork: "REST",
        })
        Animated.parallel([
          Animated.timing(this.state.progressBar, {
            toValue: 0,
            duration: 1000 * RestTime,
            easing: Easing.linear,
          }),
          Animated.timing(this.state.changeBackColor, {
            toValue: 2,
            duration: 800,
          }),
        ]).start(() => {
          this.setState(
            {
              repeats: this.state.repeats - 1,
            },
            () => {
              if (this.state.repeats != 0) {
                startWorkOut()
              } else {
                Animated.parallel([
                  Animated.spring(this.state.dataOPA, {
                    toValue: 1,
                    useNativeDriver: true,
                  }),
                  Animated.timing(this.state.changeBackColor, {
                    toValue: 3,
                    duration: 800,
                  }),
                ]).start(() => {
                  this.state.changeBackColor.setValue(0)
                })
                this.setState({
                  currentWork: "START",
                  repeats: RepeatTime,
                })
              }
            }
          )
        })
      })
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
            flex: 1,
          }}
        >
          <View
            style={{ flex: 2, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={hiitStyle.restORburn}>{this.state.currentWork}</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            {/*//! INFO TEXT */}

            <Text style={{ color: "white", fontWeight: "200", fontSize: 40 }}>
              {this.state.repeats} REPS TO GO
            </Text>
            <Animated.View
              style={{
                alignItems: "center",
                opacity: this.state.dataOPA,
              }}
            >
              <Text style={hiitStyle.dataText}>
                {WorkoutTime} SECONDS WORKOUT
              </Text>
              <Text style={hiitStyle.dataText}>{RestTime} SECONDS REST</Text>
            </Animated.View>
          </View>
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
                  backgroundColor: "#202020",
                  borderRadius: 80,
                  height: goProgressHeight,
                  width: goProgress,
                  position: "absolute",
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
                style={{ color: "#202020", fontSize: 30 }}
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
                style={{ color: "#202020", fontSize: 25 }}
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
  dataText: {
    color: "white",
    fontWeight: "100",
    fontSize: 15,
  },
})

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
