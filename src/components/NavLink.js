import React from "react";
import {StyleSheet, TouchableOpacity} from "react-native";
import Spacer from "./Spacer";
import {Text} from "react-native-elements";
import {withNavigation} from "react-navigation";

const NavLink = ({navigation, text, routName}) => {
    return <TouchableOpacity onPress={() => navigation.navigate(routName)}>
        <Spacer>
            <Text style={styles.link}>{text}</Text>
        </Spacer>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    link: {
        color: "blue"
    }
})

export default withNavigation(NavLink)