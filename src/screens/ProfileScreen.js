import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { AppButton } from '../components/AppButton';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/user/actions';
import { findByUserId, createPost } from '../store/posts/actions';
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

    const newPost = {
        title: 'Test Title 2',
        body:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus in hendrerit gravida rutrum quisque non. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Sed risus ultricies tristique nulla aliquet enim tortor at auctor. Neque volutpat ac tincidunt vitae. Sed turpis tincidunt id aliquet. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Egestas quis ipsum suspendisse ultrices gravida. Massa massa ultricies mi quis hendrerit. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Hac habitasse platea dictumst quisque sagittis purus sit amet. Netus et malesuada fames ac turpis egestas maecenas.',
    };
    const handleCreatePost = () => {
        dispatch(createPost(newPost));
    };

    if (user.isLoading) {
        return <AppLoader />;
    }
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
    profileButton: { marginBottom: 0 },
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
