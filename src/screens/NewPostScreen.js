import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { AppButton } from '../components/AppButton';
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../store/posts/actions';
import { postsReducer } from '../store/posts/reducer';

export const NewPostScreen = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const posts = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(
            createPost({
                title,
                body,
            })
        );
    };
    useEffect(() => {
        if (posts.post) {
            setTitle('');
            setBody('');
            dispatch(postsReducer.actions.reset());
            navigation.goBack();
        }
    }, [posts.post]);
    return (
        <View style={styles.root}>
            <View>
                <TextInput
                    style={styles.inputText}
                    placeholder={'Заголовок'}
                    placeholderTextColor={'rgba(0,0,0,0.54)'}
                    value={title}
                    onChangeText={setTitle}
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.inputText}
                    placeholder={'Текст поста'}
                    placeholderTextColor={'rgba(0,0,0,0.54)'}
                    value={body}
                    onChangeText={setBody}
                    autoCorrect={false}
                    multiline
                />
                <AppButton title={'Отправить'} onPress={handleClick} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 12,
    },
    inputText: {
        borderBottomColor: 'rgba(0, 0, 0, 0.42)',
        borderBottomWidth: 1,
        minHeight: 55,
        marginBottom: 16,
        width: '100%',
    },
});
