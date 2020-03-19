import { StyleSheet } from 'react-native';
import { MyColors, FontSize } from '../config/theme';

export const commonStyles = StyleSheet.create({
    textInput: {
        backgroundColor: MyColors.defaultBackground,
        height: 40,
        fontSize: FontSize.medium,
        marginTop: 10
    }
})