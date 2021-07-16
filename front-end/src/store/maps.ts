import { AnyAction, ThunkAction } from "@reduxjs/toolkit"
import { RootState } from "."


const CLEAR = 'map/CLEAR'


const clear = () => ({
    type: CLEAR
})


export const clearMaps = (): ThunkAction<void, RootState, unknown, AnyAction> => async dispatch => {
    dispatch(clear())
}


const mapReducer = (state = {}, action: AnyAction) => {
    let newState = { ...state };

    switch (action.type) {
        case (CLEAR):
            newState = {}
            return newState
        default:
            return state
    }
}


export default mapReducer
