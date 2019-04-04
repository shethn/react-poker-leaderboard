import { ADD_PLAYER_PROFILE } from "./actionTypes";

export const addPlayer = ( player ) => {
    return {
        type: ADD_PLAYER_PROFILE,
        payload: player
    }
}