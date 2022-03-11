import React, {useState, useContext} from "react";
import {View, StyleSheet, TouchableOpacity, KeyboardAvoidingView} from "react-native";
import {Input, Text, Button} from "react-native-elements";
import Spacer from "../components/Spacer";
import {Context as AuthContext} from "../context/AuthContext";

const SignUpScreen = ({navigation}) => {
    const {state, signup} = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return <View style={styles.container}>
        <Spacer>
            <Text h3>Sign up for Tracker</Text>
        </Spacer>
        <Input
            label="Email"
            value={email}
            onChangeText={(newEmail) => setEmail(newEmail)}
            autoCapitalize="none"
            autoCorrect={false}
        />
        <Spacer/>
        <Input
            secureTextEntry
            label="Password"
            value={password}
            onChangeText={(newPass) => setPassword(newPass)}
            autoCapitalize="none"
            autoCorrect={false}
        />
        {state.errorMessage
            ? <Text style={styles.error}>{state.errorMessage}</Text>
            : null}
        <Spacer>
            <Button title="Sign up" onPress={() => signup({email, password})}/>
        </Spacer>
        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
            <Spacer>
                <Text style={styles.link}>Already have an account? Sign in instead</Text>
            </Spacer>
        </TouchableOpacity>

    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 200
    },
    error: {
        marginLeft: 15,
        marginTop: 10,
        fontSize: 16,
        color: "red"
    },
    link: {
        color: "blue"
    }
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
