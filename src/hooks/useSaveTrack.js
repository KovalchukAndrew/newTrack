import {Context as TrackContext} from "../context/TrackContext"
import {Context as LocationContext} from "../context/LocationContext"
import {useContext} from "react";
import {navigate} from "../navigationRef";

export default () => {
    const {createTrack} = useContext(TrackContext)
    const {state: {location, name}, clear} = useContext(LocationContext)

    const saveTrack = async () => {
        await createTrack(name, location)
        clear()
        navigate("TrackList")
    }

    return [saveTrack]
}