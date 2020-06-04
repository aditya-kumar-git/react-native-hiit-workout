import allReducers from "./Reducers"
import { createStore } from "redux"

var myStore = createStore(allReducers)

export default myStore
