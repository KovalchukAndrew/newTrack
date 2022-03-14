import React from "react";
import createDataContext from "./createDataContext";
import trackerAPI from "../api/tracker";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {navigate} from "../navigationRef";


const authReducer = (state, action) => {
    switch (action.type) {
        case "SIGNIN":
            return {errorMessage: "", token: action.payload}
        case "SIGNOUT":
            return {token: null, errorMessage: ""}
        case "ADD_ERROR":
            return {...state, errorMessage: action.payload}
        case "CLEAR_ERROR":
            return {...state, errorMessage: ""}
        default:
            return state
    }
}

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem("token")
    if (token) {
        dispatch({type: "SIGNIN", payload: token})
        navigate("TrackList")
    } else {
        navigate("SignIn")
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

const signout = dispatch => async () => {
    await AsyncStorage.removeItem("token")
    dispatch({type: "SIGNOUT"})
    navigate("loginFlow")
}


export const {Context, Provider} = createDataContext(
    authReducer,
    {signup, signin, clearErrorMessage, tryLocalSignin, signout},
    {token: null, errorMessage: ""}
)