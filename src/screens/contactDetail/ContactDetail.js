import React from 'react';
import {
    View, Image, FlatList
} from 'react-native';
import styles from './styles';
import { IconButton, Text, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import { FontSize } from '../../config/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getRandomInt } from '../../helpers/random';

export default function ContactDetail({ navigation, route }) {

    const actions = [
        {
            icon: 'mail',
            name: 'Send message'
        },
        {
            icon: 'slash',
            name: 'Block user'
        },
        {
            icon: 'star',
            name: 'Mark as favourite'
        }
    ];

    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={styles.topContainer}>
                <IconButton
                    icon="close"
                    size={25}
                    onPress={() => navigation.goBack()}
                />
            </View>
            <View style={{ alignItems: 'center' }}>
                <Image
                    source={{ uri: route.params.image }}
                    style={styles.image}
                />
                <Text style={styles.text}>{route.params.name}</Text>
            </View>
            <View style={[styles.infoContainer, { marginTop: 40 }]}>
                <Icon
                    name="phone"
                    size={20}
                    color="gray"
                />
                <Text style={styles.infoText}>XXXXXXXXXXXXX</Text>
            </View>
            <View style={[styles.infoContainer, { marginTop: 20 }]}>
                <Icon
                    name="mail"
                    size={20}
                    color="gray"
                />
                <Text style={styles.infoText}>user@userdomain.com</Text>
            </View>
            <FlatList
                style={{ flex: 1, marginTop: 10 }}
                data={actions}
                ListHeaderComponent={() => {
                    return (
                        <Text style={styles.headerText}>Options</Text>
                    )
                }}
                renderItem={({ item }) => {
                    return (
                        <View style={[styles.infoContainer, { paddingVertical: 15 }]}>
                            <Icon
                                name={item.icon}
                                color="gray"
                                size={16}
                            />
                            <Text style={{
                                marginLeft: 10,
                                fontSize: FontSize.medium,
                                opacity: 0.8
                            }}>{item.name}</Text>
                        </View>
                    )
                }}
                keyExtractor={() => String(getRandomInt(1000))}
                ItemSeparatorComponent={() => <Divider />}
            />
        </SafeAreaView>
    );
}