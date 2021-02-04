import { useReducer } from "react";
import {
    TOGGLE_CHAT
} from "./actions";

const reducer = (state, action) => {
    switch(action.type) {
        case TOGGLE_CHAT:
            return {
                ...state,
                chatOpen: !state.chatOpen
            };
        default:
            return state;
    }
};

export default reducer;

export function useProductReducer(initialState) {
    return useReducer(reducer, initialState)
  }