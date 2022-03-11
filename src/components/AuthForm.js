import React, {useState} from "react";
import {Text, Input, Button} from "react-native-elements";
import {StyleSheet} from "react-native";
import Spacer from "./Spacer";

const AuthForm = ({headerText, errorMessage, onSubmit, submitButtonTitle}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return <>
        <Spacer>
            <Text h3>{headerText}</Text>
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
        {errorMessage
            ? <Text style={styles.error}>{errorMessage}</Text>
            : null}
        <Spacer>
            <Button title={submitButtonTitle} onPress={() => onSubmit({email, password})}/>
        </Spacer>
    </>
}

const styles = StyleSheet.create({
    error: {
        marginLeft: 15,
        marginTop: 10,
        fontSize: 16,
        color: "red"
    },
})

export default AuthForm;
