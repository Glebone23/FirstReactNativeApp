import React, {Component} from 'react';
import {AppRegistry, Text, View, Image, TouchableHighlight, FlatList, StyleSheet} from 'react-native';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Photo Gallery'
    };

    state = {
        data: []
    };

    componentWillMount() {
        this.fetchData();
    }

    fetchData = async () => {
        const response = await fetch("https://api.500px.com/v1/photos?feature=popular&consumer_key=wB4ozJxTijCwNuggJvPGtBGCRqaZVcF6jsrzUadF");
        const json = await response.json();
        this.setState({ data: json.photos });
    };

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    keyExtractor={(x, i) => i}
                    renderItem={({ item }) =>
                        <View style={styles.photoBlock}>
                            <TouchableHighlight onPress={() => navigate('Details', { photo: item })} >
                                <Image source={{uri: item.image_url}} style={styles.images}/>
                            </TouchableHighlight>
                            <View style={styles.textView}>
                                <Text style={styles.photoName} numberOfLines={1} >{item.name}</Text>
                                <Text>Made by {item.user.username}</Text>
                            </View>
                        </View>
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    images: {
        width: '100%',
        height: 130
    },
    textView: {
        alignItems: 'center'
    },
    photoName: {
        fontWeight:'bold',
        fontSize: 16,
    },
    photoBlock: {
        width:'100%',
        marginBottom: 20
    }
});

AppRegistry.registerComponent('GalleryApp', () => DetailsScreen);