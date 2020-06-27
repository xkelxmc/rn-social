import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { AppButton } from '../components/AppButton';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/user/actions';
import {
    findByUserId,
    createPost,
    upVote,
    downVote,
} from '../store/posts/actions';
import { AppLoader } from '../components/AppLoader';
import { AppCard } from '../components/AppCard';
import { UserBadge } from '../components/UserBadge';

export const ProfileScreen = ({ navigation }) => {
    const user = useSelector((state) => state.user);
    const currentUser = user.user;
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

    const logoutHandler = () => {
        dispatch(logout());
    };

    const handleCreatePost = () => {
        navigation.navigate('NewPostScreen');
    };

    if (user.isLoading) {
        return <AppLoader />;
    }

    const handleLike = (post) => () => {
        dispatch(upVote({ postId: post._id }));
    };
    const handleDisLike = (post) => () => {
        dispatch(downVote({ postId: post._id }));
    };
    return (
        <View style={styles.root}>
            <View style={styles.profileWrapper}>
                <UserBadge user={currentUser} />
                <AppButton
                    onPress={logoutHandler}
                    title={'Выход'}
                    style={styles.profileButton}
                />
            </View>
            <View style={styles.cardsWrapper}>
                {posts.isLoading ? (
                    <AppLoader />
                ) : (
                    <View>
                        <AppButton
                            title={'Написать пост'}
                            onPress={handleCreatePost}
                        />
                        {posts.list.length ? (
                            <FlatList
                                data={posts.list}
                                renderItem={({ item }) => (
                                    <AppCard
                                        item={item}
                                        like={handleLike(item)}
                                        disLike={handleDisLike(item)}
                                    />
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
    profileButton: { marginBottom: 0 },
    cardsWrapper: {
        paddingHorizontal: 20,
        paddingVertical: 12,
        paddingBottom: 140,
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
