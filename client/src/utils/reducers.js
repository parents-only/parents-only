import { useReducer } from "react";
import {
    TOGGLE_CHAT,
    UPDATE_USERS,
    UPDATE_USER
} from "./actions";

const reducer = (state, action) => {
    switch(action.type) {
        case TOGGLE_CHAT:
            return {
                ...state,
                chatOpen: !state.chatOpen
            };

            case UPDATE_USER:
                return {
                  ...state,
                  user: [...action.user],
                };


            case UPDATE_USERS:
                    return {
                        ...state,
                        users: action.users
                    }
                default:
                    return state;
    }
};
 



export function useProductReducer(initialState) {
    return useReducer(reducer, initialState)
  }