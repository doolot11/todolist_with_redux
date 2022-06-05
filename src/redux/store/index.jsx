import { createStore } from "redux"
import { reducerFunc } from "../reducer/reducer"

export const store = createStore(reducerFunc)