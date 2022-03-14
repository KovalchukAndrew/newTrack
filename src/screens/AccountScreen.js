import React, {useContext} from "react";
import {View, Text, StyleSheet, SafeAreaView} from "react-native";
import Spacer from "../components/Spacer";
import {Button} from "react-native-elements";
import {Context as AuthContext} from "../context/AuthContext";
import {MaterialIcons} from "@expo/vector-icons";

const AccountScreen = () => {

    const {signout} = useContext(AuthContext)

    return <SafeAreaView forceInset={{top: "always"}}>
        <Text style={{fontSize: 45}}>AccountScreen</Text>
        <Spacer>
            <Button title="Sign out" onPress={() => signout()} />
        </Spacer>
    </SafeAreaView>
}

AccountScreen.navigationOptions = () => {
    return {
        tabBarIcon: <MaterialIcons name="account-circle" size={24} color="black" />
    }
}

const styles = StyleSheet.create({

})

export default AccountScreen