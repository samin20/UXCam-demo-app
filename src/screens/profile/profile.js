import React, { useEffect } from 'react';
import {
    View
} from 'react-native';
import styles from './styles';
import { AuthContext } from '../../helpers';

function Profile({ navigation }) {

    const { signOut } = React.useContext(AuthContext);

    useEffect(()=>{
        // navigation.navigate('Register')
        // setTimeout(()=>signOut(), 1000);
    })

    return (
        <View style={{backgroundColor: 'yellow', flex: 1}}>

        </View>
    );
}

export default Profile;

// export default class Home extends React.Component {

//     render() {
//         return (
//             <View style={{backgroundColor: 'blue', flex: 1}}>

//             </View>
//         );
//     }
// }