import { AnyAction, ThunkAction } from "@reduxjs/toolkit"
import { RootState } from "."


const CLEAR = 'system/CLEAR'


const clear = () => ({
    type: CLEAR
})


export const clearAllSystems = (): ThunkAction<void, RootState, unknown, AnyAction>=> async dispatch => {
    dispatch(clear())
}


const systemReducer = (state = {}, action: AnyAction) => {
    let newState = { ...state };

    switch (action.type) {
            case (CLEAR):
                newState = {}
                return newState
            default:
                return state
        }
    }


export default systemReducer
