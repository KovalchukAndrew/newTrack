import React from "react";
import createDataContext from "./createDataContext";
import trackerAPI from "../api/tracker";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {navigate} from "../navigationRef";


const authReducer = (state, action) => {
    switch (action.type) {
        case "SIGNIN":
            return {errorMessage: "", token: action.payload}
        case "ADD_ERROR":
            return {...state, errorMessage: action.payload}
        case "CLEAR_ERROR":
            return {...state, errorMessage: ""}
        default:
            return state
    }
}

const clearErrorMessage = (dispatch) => {
    return () => {
        dispatch({type: "CLEAR_ERROR"})
    }
}

const signup = (dispatch) => {
    return async ({email, password}) => {
        try {
            const response = await trackerAPI.post("/signup", {email, password})
            await AsyncStorage.setItem("token", response.data.token)
            dispatch({type: "SIGNIN", payload: response.data.token})

            navigate("TrackList")
        } catch (err) {
            dispatch({type: "ADD_ERROR", payload: "Something went wrong with sign in"})
        }
    }
}

const signin = dispatch => {
    return async ({email, password}) => {
        try {
            const response = await trackerAPI.post("/signin", {email, password})
            await AsyncStorage.setItem("token", response.data.token)
            dispatch({type: "SIGNIN", payload: response.data.token})

            navigate("TrackList")
        } catch (err) {
            dispatch({type: "ADD_ERROR", payload: "Something went wrong with sign up"})
        }
    }
}

const signout = dispatch => {
    return () => {

    }
}

export const {Context, Provider} = createDataContext(
    authReducer,
    {signup, signin, clearErrorMessage},
    {token: null, errorMessage: ""}
)