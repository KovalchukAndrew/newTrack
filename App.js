import React from "react";
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import {createBottomTabNavigator} from "react-navigation-tabs";
import AccountScreen from "./src/screens/AccountScreen";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import {Provider as AuthProvider} from "./src/context/AuthContext";
import {Provider as LocationProvider} from "./src/context/LocationContext";
import {Provider as TrackProvider} from "./src/context/TrackContext"
import {setNavigator} from "./src/navigationRef";
import 'react-native-gesture-handler'
import LoadingScreen from "./src/screens/LoadingScreen";
import { Ionicons } from '@expo/vector-icons';

const trackListFlow = createStackNavigator({
    TrackList: TrackListScreen,
    TrackDetail: TrackDetailScreen
})

trackListFlow.navigationOptions = () => {
    return {
        tabBarIcon: <Ionicons name="ios-options" size={24} color="black" />
    }
}

const switchNavigator = createSwitchNavigator({
    loading: LoadingScreen,
    loginFlow: createStackNavigator({
        SignUp: SignUpScreen,
        SignIn: SignInScreen
    }),
    mainFlow: createBottomTabNavigator({
        trackListFlow,
        TrackCreate: TrackCreateScreen,
        Account: AccountScreen
    })
})

const App = createAppContainer(switchNavigator);

export default () => {
    return (
        <TrackProvider>
            <LocationProvider>
                <AuthProvider>
                    <App ref={(navigator) => setNavigator(navigator)}/>
                </AuthProvider>
            </LocationProvider>
        </TrackProvider>
        )
}

//test