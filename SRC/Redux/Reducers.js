import { combineReducers } from "redux"

var WorkoutTime = (inistate = 5, action) => {
  switch (action.type) {
    case "WORK":
      return action.payload

    default:
      return inistate
  }
}
var RestTime = (inistate = 5, action) => {
  switch (action.type) {
    case "REST":
      return action.payload

    default:
      return inistate
  }
}
var RepeatTime = (inistate = 2, action) => {
  switch (action.type) {
    case "REPEAT":
      return action.payload

    default:
      return inistate
  }
}

var allReducers = combineReducers({
  WorkoutTime: WorkoutTime,
  RestTime: RestTime,
  RepeatTime: RepeatTime,
})

export default allReducers
