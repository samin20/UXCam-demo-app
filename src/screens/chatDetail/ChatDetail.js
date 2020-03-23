import React, { useEffect, useState } from 'react';
import {
    View,
    FlatList,
    SafeAreaView
} from 'react-native';
import styles from './styles';
import ChatItem from '../../components/Chatitem';

export default function ChatDetail({ route, navigation }) {

    const myID = 1;

    const [conversation, setConversation] = useState([]);

    useEffect(() => {
        setConversation([
            { id: 0, userID: 0, text: 'Hello', time: '10:22 PM', sent: true, isRead: true },
            { id: 1, userID: 1, text: 'Hi!', time: '10:22 PM', sent: true, isRead: true },
            { id: 2, userID: 0, text: 'Whats up!', time: '10:22 PM', sent: true, isRead: true },
            { id: 3, userID: 0, text: 'Did you hear about new COVID case?', time: '10:22 PM', sent: true, isRead: true },
            { id: 4, userID: 1, text: 'Yes I did', time: '10:22 PM', sent: true, isRead: true },
            { id: 5, userID: 0, text: 'Which one?', time: '10:22 PM', sent: true, isRead: true },
            { id: 6, userID: 1, text: 'The new one of course', time: '10:22 PM', sent: true, isRead: true },
            { id: 7, userID: 1, text: 'False new anyway, no need to worry', time: '10:22 PM', sent: true, isRead: true },
            { id: 8, userID: 0, text: 'Who knows', time: '10:22 PM', sent: true, isRead: true },
            { id: 9, userID: 1, text: 'Preety sure it is false', time: '10:22 PM', sent: true, isRead: true },
            { id: 10, userID: 0, text: 'Hmmm...', time: '10:22 PM', sent: true, isRead: true }
        ])
    }, [])

    return (
        <SafeAreaView
            forceInset={{ top: 'never' }}
            style={{ backgroundColor: 'white', flex: 1 }}>
            <FlatList
                data={conversation}
                renderItem={({ item, index }) => {
                    return (
                        <ChatItem
                            item={item}
                            myID={myID}
                            image={route.params.image}
                            isLast={conversation.length - 1 === index}
                        />
                    )
                }}
                keyExtractor={item => String(item.id)}
            />
        </SafeAreaView>
    );
}