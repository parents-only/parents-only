import {
    useReducer
} from "react";
import {
    TOGGLE_CHAT,
    UPDATE_USER
} from "./actions";


const initialState = {
    user: {},
    chatOpen: false,
    chat: {}
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_CHAT:
            return {
                ...state,
                chatOpen: !state.chatOpen
            };
        case UPDATE_USER:
            
            return {
                ...state,
                user: {...action.user},
            };
        default:
            return state;
    }
};

export function useProductReducer(initialState) {
    return useReducer(reducer, initialState)
}