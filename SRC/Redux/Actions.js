export var setWorkout = (time) => {
  return {
    type: "WORK",
    payload: time,
  }
}
export var setRest = (time) => {
  return {
    type: "REST",
    payload: time,
  }
}
export var setRepeat = (time) => {
  return {
    type: "REPEAT",
    payload: time,
  }
}
