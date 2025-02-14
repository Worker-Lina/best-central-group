import { configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { roomReducer } from "../../../../pages/MainPage/model/slices/roomSlice";

export function createReduxStore(initialState?: StateSchema){
    return configureStore<StateSchema>({
        reducer: {
            room: roomReducer
        },
        preloadedState: initialState
    })
}
