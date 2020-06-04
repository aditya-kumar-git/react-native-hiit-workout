import React, { Component } from "react"
import { View, FlatList } from "react-native"
import { connect } from "react-redux"
import { setWorkout, setRest, setRepeat } from "../Redux/Actions"

export class Slider extends Component {
  render() {
    var renderBigstickOrSmall = (index) => {
      if (index % 5 === 0) {
        return (
          <View
            style={{
              width: 2,
              height: 50,
              backgroundColor: "white",
            }}
          ></View>
        )
      } else {
        return (
          <View
            style={{
              width: 2,
              height: 20,
              backgroundColor: "white",
            }}
          ></View>
        )
      }
    }

    var { noOfElements, name } = this.props
    return (
      <View style={{ width: "87%" }}>
        <FlatList
          snapToInterval={30}
          data={noOfElements}
          keyExtractor={(x, y) => {
            return "KEY- " + y
          }}
          renderItem={({ index, item }) => {
            return (
              <View style={{ width: 30 }}>{renderBigstickOrSmall(item)}</View>
            )
          }}
          horizontal
          contentContainerStyle={{ alignItems: "flex-end" }}
          onScroll={(x) => {
            //! SET WORKOUT

            if (name == "workout") {
              this.props.setWorkout(
                Math.round(x.nativeEvent.contentOffset.x / 30) * 5 + 5
              )
            }

            //! SET REST
            else if (name == "rest") {
              this.props.setRest(
                Math.round(x.nativeEvent.contentOffset.x / 30) * 5 + 5
              )
            }

            //! SET REPETATION
            else if (name == "repeat") {
              this.props.setRepeat(
                Math.round(x.nativeEvent.contentOffset.x / 30) + 1
              )
            }
          }}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = {
  setWorkout: setWorkout,
  setRest: setRest,
  setRepeat: setRepeat,
}

export default connect(mapStateToProps, mapDispatchToProps)(Slider)
