import { SET_PERFORMANCE_RIGHT } from "../actions/types";


export default function (state = 0, action) {
  switch (action.type) {
      case SET_PERFORMANCE_RIGHT:
        return state + 1
      default:
        return state
  }
}