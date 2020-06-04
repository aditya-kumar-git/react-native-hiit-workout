import React, { Component } from "react"
import { View, Text, SafeAreaView, StatusBar } from "react-native"
import { connect } from "react-redux"
import Slider from "../Components/Slider"
import { AntDesign } from "@expo/vector-icons"
import { TouchableOpacity } from "react-native-gesture-handler"

export class AdjustTime extends Component {
  componentDidMount() {
    // console.log(this.props.Minutes, "auhdaushd")
  }
  state = {
    noOfMinutes: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
    ],
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#409367",
        }}
      >
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={{ flex: 1 }}>
          {/*//! BACKBUTTON */}

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack()
            }}
            style={{
              width: "87%",
              alignSelf: "center",
              marginTop: 10,
            }}
          >
            <AntDesign
              name="leftcircle"
              style={{ color: "white", fontSize: 30 }}
            />
          </TouchableOpacity>

          {/*//! SLIDERS */}

          <View style={{ flex: 2 }}>
            {/*//! WORKOUTTAB TAB */}

            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <View style={{ width: "87%" }}>
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 40,
                  }}
                >
                  WORKOUT
                </Text>
                <Text
                  style={{ color: "white", fontWeight: "200", fontSize: 25 }}
                >
                  {this.props.WorkoutTime} Seconds
                </Text>
              </View>
              <Slider noOfElements={this.state.noOfMinutes} name="workout" />
            </View>

            {/*//! SECONDS TAB */}

            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <View style={{ width: "87%" }}>
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 40,
                  }}
                >
                  REST
                </Text>
                <Text
                  style={{ color: "white", fontWeight: "200", fontSize: 25 }}
                >
                  {this.props.RestTime} Seconds
                </Text>
              </View>
              <Slider noOfElements={this.state.noOfMinutes} name="rest" />
            </View>
          </View>

          {/*//! REPEAT */}

          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <View style={{ width: "87%" }}>
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 40,
                }}
              >
                REPEAT
              </Text>
              <Text style={{ color: "white", fontWeight: "200", fontSize: 25 }}>
                {this.props.RepeatTime} Times
              </Text>
            </View>
            <Slider noOfElements={this.state.noOfMinutes} name="repeat" />
          </View>
        </SafeAreaView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AdjustTime)
