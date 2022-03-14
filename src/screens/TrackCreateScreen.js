/*
import "../_mockLocation"
*/
import React, {useCallback, useContext} from "react";
import {StyleSheet, SafeAreaView} from "react-native";
import {withNavigationFocus} from "react-navigation";
import {Text} from "react-native-elements";
import Map from "../components/Map";
import {Context as LocationContext} from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";
import { MaterialIcons } from '@expo/vector-icons';

const TrackCreateScreen = ({isFocused}) => {
    const {state: {recording}, addLocation} = useContext(LocationContext)
    const callback = useCallback((location) => {
        addLocation(location, recording)
    }, [recording])
    const [err] = useLocation(isFocused || recording, callback)

    return <SafeAreaView forceInset={{top: "always"}}>
        <Text h1>Create track</Text>
        <Map/>
        {err ? <Text>Please enable location services</Text> : null}
        <TrackForm/>
    </SafeAreaView>
}

TrackCreateScreen.navigationOptions = () => {
    return {
        title: false,
        tabBarIcon: <MaterialIcons name="add-location-alt" size={24} color="black" />,
    }
}

const styles = StyleSheet.create({

})

export default withNavigationFocus(TrackCreateScreen)

/*
const { granted } = await requestForegroundPermissionsAsync();*/
