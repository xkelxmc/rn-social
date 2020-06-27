import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { findByUserId } from '../store/posts/actions';
import { UserBadge } from '../components/UserBadge';
import { AppLoader } from '../components/AppLoader';
import { AppCard } from '../components/AppCard';

export const UserScreen = ({ route, navigation }) => {
    const currentUser = route.params;
    const posts = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findByUserId({ userId: currentUser._id }));
        navigation.setOptions({
            title: `${currentUser.name} ${currentUser.lastName}`,
            // title: currentUser.name + ' ' + currentUser.lastName,
        });
        return () => {
            navigation.setOptions({
                title: `Мой профиль`,
            });
        };
    }, []);
    useEffect(() => {
        dispatch(findByUserId({ userId: currentUser._id }));
    }, [posts.post]);
    return (
        <View style={styles.root}>
            <View style={styles.profileWrapper}>
                <UserBadge user={currentUser} />
            </View>
            <View style={styles.cardsWrapper}>
                {posts.isLoading ? (
                    <AppLoader />
                ) : (
                    <View>
                        {posts.list.length ? (
                            <FlatList
                                data={posts.list}
                                renderItem={({ item }) => (
                                    <AppCard item={item} />
                                )}
                                keyExtractor={(item) => item._id}
                            />
                        ) : (
                            <View style={styles.notFound}>
                                <Text>Нет постов</Text>
                            </View>
                        )}
                    </View>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    cardsWrapper: {
        paddingHorizontal: 20,
        paddingVertical: 12,
        paddingBottom: 100,
    },
    profileWrapper: {
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        paddingHorizontal: 20,
        paddingVertical: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    notFound: {
        alignItems: 'center',
    },
});
