import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAll } from '../store/users/actions';
import { AppButton } from '../components/AppButton';

export const UsersScreen = () => {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const handleGetUsers = () => {
        dispatch(fetchAll());
    };
    return (
        <View style={styles.root}>
            <Text>UsersScreen</Text>
            {users.list.map((item) => (
                <View key={item._id}>
                    <Text>
                        {item.name} {item.lastName} {item.email}
                    </Text>
                </View>
            ))}
            <AppButton
                title={'Запросить пользователей'}
                onPress={handleGetUsers}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
});
