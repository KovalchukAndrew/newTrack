import React from "react";
import createDataContext from "./createDataContext";
import trackerAPI from "../api/tracker";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {navigate} from "../navigationRef";


const authReducer = (state, action) => {
    switch (action.type) {
        case "SIGNUP":
            return {errorMessage: "", token: action.payload}
        case "ADD_ERROR":
            return {...state, errorMessage: action.payload}
        default:
            return state
    }
}

const signup = (dispatch) => {
    return async ({email, password}) => {
        try {
            const response = await trackerAPI.post("/signup", {email, password})
            await AsyncStorage.setItem("token", response.data.token)
            dispatch({type: "SIGNUP", payload: response.data.token})

            navigate("TrackList")
        } catch (err) {
            dispatch({type: "ADD_ERROR", payload: "Something went wrong with sign up"})
        }
    }
}

const signin = dispatch => {
    return ({email, password}) => {

    }
}

const signout = dispatch => {
    return () => {

    }
}

export const {Context, Provider} = createDataContext(
    authReducer,
    {signup},
    {token: null, errorMessage: ""}
)