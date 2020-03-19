import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    image: {
        resizeMode: 'cover',
        width: width,
        height: height
    }
})