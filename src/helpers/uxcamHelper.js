import RNUxcam from 'react-native-ux-cam';

//hides referenced view if reference exist
export const hideSensitiveView = (ref) => {
    if (ref) {
        RNUxcam.occludeSensitiveView(ref);
    }
}

//log custom events
export const logEvent = (key, name) => {
    RNUxcam.logEvent(key, name);
}

//tag current screen
export const tagScreenName = (name) => {
    RNUxcam.tagScreenName(name);
}

//hide sensitive screen
export const occludeSensitiveScreen = (bool) => {
    RNUxcam.occludeSensitiveScreen(bool);
}