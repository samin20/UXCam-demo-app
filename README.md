# UXCam demo chat app
Chat application demonstrating UXCam integration.

| ![Alt text](/screenshots/sc-1.png?raw=true "Add app key") | ![Alt text](/screenshots/sc-3.png?raw=true "Register") | ![Alt text](/screenshots/sc-5.png?raw=true "Conversation") |
| - | - | - |

>Note: This application does not have backend services and does not require UXCam account to run. However using the app in conjunction with UXCam **app key** will give better insight about how SDK works.

## Steps to run
`yarn` or `npm install`

##### For ios
* `cd ios && pod install && cd ..`
* Use **.xcworkspace** to run the application
* Start session by adding UXCam **app key** from ⚙️settings button on login screen

##### For android
* `react-native run-android`
* Might need to specify **local.properties** file on **/android/local.properties** with android sdk dir location
* Start session by adding UXCam **app key** from ⚙️settings button on login screen
>Note: Session can take some time to appear on UXCam dashboard. Put application on background after use to upload sessions. Force closing the application will delay session upload.

## UXCam features covered
##### Set user identity
Adds custom user identity.
| Filename | line no.|
|----------|---------|
| Login.js | 42, 70 |
##### Occlude sensitive view
Hides sensitive view that should not be captured.
| Filename | line no.|
|----------|---------|
| ConversationItem.js | 35 |
| ContactDetail.js | 88, 97 |
| Register.js | 105, 121 |
##### Event logging
Logs custom events on current session.
| Filename | line no.|
|----------|---------|
| ContactDetail.js | 34, 42, 46, 55 |
| EditProfile.js | 20 |
| ChatDetail.js | 49 |
| Register.js | 56 |
| PrivateMessage.js | 19 |
##### Screen tagging
Tags screen after navigation change. Uses react-navigation's **onStateChange** method to detect and get route name.
| Filename | line no.|
|----------|---------|
| App.js | 98 |
##### Occlude sensitive screen
Occudes screen with sensitive information from capturing.
| Filename | line no.|
|----------|---------|
| PrivateMessage.js | 14/22 |
##### Crash logs
Try crashing the app from **Crasher** page to view crash logs on session
