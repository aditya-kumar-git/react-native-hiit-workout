import React from "react"
import { View, Text, Picker } from "react-native"
import { FlatList, TextInput } from "react-native-gesture-handler"

class AdjustTime extends React.Component {
  state = {
    aurr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#409367",
        }}
      >
        <View
          style={{
            height: "50%",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexDirection: "row",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text style={{ color: "white" }}>5 minutes</Text>
            <TextInput
              style={{
                width: 100,
                height: 20,
                backgroundColor: "white",
                borderRadius: 20,
              }}
            />
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ color: "white" }}>30 seconds</Text>
            <TextInput
              style={{
                width: 100,
                height: 20,
                backgroundColor: "white",
                borderRadius: 20,
              }}
            />
          </View>
        </View>
        <Picker
          style={{
            width: "100%",
            alignSelf: "center",
            color: "white",
            backgroundColor: "pink",
          }}
          selectedValue="java"
        >
          <Picker.Item label="HELO" value="hel" />
          <Picker.Item label="HELO" value="hel" />
          <Picker.Item label="HELO" value="hel" />
          <Picker.Item label="HELO" value="hel" />
          <Picker.Item label="HELO" value="hel" />
          <Picker.Item label="HELO" value="hel" />
          <Picker.Item label="HELO" value="hel" />
          <Picker.Item label="JAV" value="java" />
          <Picker.Item label="HELO" value="hel" />
          <Picker.Item label="HELO" value="hel" />
          <Picker.Item label="HELO" value="hel" />
          <Picker.Item label="HELO" value="hel" />
          <Picker.Item label="HELO" value="hel" />
          <Picker.Item label="HELO" value="hel" />
          <Picker.Item label="HELO" value="hel" />
          <Picker.Item label="HELO" value="hel" />
          <Picker.Item label="HELO" value="hel" />
          <Picker.Item label="HELO" value="hel" />
          <Picker.Item label="HELO" value="hel" />
          <Picker.Item label="HELO" value="hel" />
        </Picker>
      </View>
    )
  }
}

export default AdjustTime
