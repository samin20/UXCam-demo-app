import { DefaultTheme } from 'react-native-paper';

export const MyColors = {
    primaryColor: '#65C47C',
    accentColor: '#2E3654'
}

export const FontSize = {
    small: 12,
    medium: 16,
    large: 18,
    xl: 22
}

export const Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: MyColors.primaryColor,
      accent: MyColors.accentColor
    }
  };