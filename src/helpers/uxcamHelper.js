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

//log custom events
export const logEventWithouProps = (key, name) => {
    RNUxcam.logEvent(key);
}

//tag current screen
export const tagScreenName = (name) => {
    RNUxcam.tagScreenName(name);
}

//hide sensitive screen
export const occludeSensitiveScreen = (bool) => {
    RNUxcam.occludeSensitiveScreen(bool);
}

//set user identity
export const addUserIdentity = (email) => {
    RNUxcam.setUserIdentity(email);
}

//start with key
//Note: Just for demo purpose.
//It is recommended that you add this on app start on app.js
export const startSessionWithKey = (key) => {
    RNUxcam.startWithKey(key);
}

//allow short breaks when app goes to background
export const allowShowBreak = (boolValue) => {
    RNUxcam.allowShortBreakForAnotherApp(boolValue);
}