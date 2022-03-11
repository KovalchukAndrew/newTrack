import React, {useContext} from "react";
import {View, StyleSheet, KeyboardAvoidingView} from "react-native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import {Context as AuthContext} from "../context/AuthContext";
import {NavigationEvents} from "react-navigation";

const SignInScreen = () => {

    const {state, signin, clearErrorMessage} = useContext(AuthContext)

    return <KeyboardAvoidingView style={styles.container} behavior="height">
        <NavigationEvents onWillFocus={clearErrorMessage}/>
        <AuthForm
            headerText="Sign in to Your Account"
            errorMessage={state.errorMessage}
            submitButtonTitle="Sign in"
            onSubmit={signin}
        />
        <NavLink
            routName="SignUp"
            text="Don't have an account? Sign up instead"
        />
    </KeyboardAvoidingView>
}

SignInScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 180
    },
})

export default SignInScreen