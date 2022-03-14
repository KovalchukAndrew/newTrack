import React, {useContext} from "react";
import {View, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from "react-native";
import {Context as AuthContext} from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import {NavigationEvents} from "react-navigation";

const SignUpScreen = ({navigation}) => {
    const {state, signup, clearErrorMessage} = useContext(AuthContext)

    return <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView style={styles.container} behavior="height">
            <NavigationEvents onWillFocus={clearErrorMessage}/>
            <AuthForm
                headerText="Sign up for tracker"
                errorMessage={state.errorMessage}
                submitButtonTitle="Sign up"
                onSubmit={signup}
            />
            <NavLink
                routName="SignIn"
                text="Already have an account? Sign in instead!"
            />

        </KeyboardAvoidingView>
    </TouchableWithoutFeedback>

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 180
    },
})

SignUpScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}

export default SignUpScreen

/*
SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};*/
