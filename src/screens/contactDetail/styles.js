import { StyleSheet } from 'react-native';
import { FontSize } from '../../config/theme';

export default StyleSheet.create({
    topContainer: {
        flexDirection: 'row-reverse',
        marginHorizontal: 20
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 20
    },
    text: {
        fontSize: FontSize.medium,
        marginTop: 10,
        fontWeight: '600'
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20
    },
    infoText: {
        fontSize: FontSize.medium,
        marginLeft: 10
    },
    headerText: {
        fontSize: FontSize.medium,
        fontWeight: '700',
        marginHorizontal: 20,
        marginTop: 30
    }
})