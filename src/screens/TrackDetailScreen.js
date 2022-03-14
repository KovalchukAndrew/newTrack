import React, {useContext} from "react";
import {View, StyleSheet} from "react-native";
import {Text} from "react-native-elements";
import {Context as TrackContext} from "../context/TrackContext"
import MapView, {Polyline} from "react-native-maps";

const TrackDetailScreen = ({navigation}) => {

    const id = navigation.getParam("_id")

    const { state } = useContext(TrackContext)
    const track = state.find(t => t._id === id)
    const initialCoords = track.locations[0].coords


    return <>
        <Text h3>{track.name}</Text>
        <MapView
            style={{height: 300}}
            initialRegion={{
                longitudeDelta: 0.001,
                latitudeDelta: 0.01,
                ...initialCoords
            }}
        >
            <Polyline coordinates={track.locations.map(l => l.coords)}/>
        </MapView>
    </>
}

const styles = StyleSheet.create({

})

export default TrackDetailScreen