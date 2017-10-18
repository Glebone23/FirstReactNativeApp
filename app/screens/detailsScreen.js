import React, {Component} from 'react';
import {AppRegistry, View, Dimensions, StyleSheet} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';

export default class DetailsScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.photo.name}`,
    });
    render() {
        const { params } = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <AutoHeightImage imageURL={params.photo.image_url} width={Dimensions.get('window').width}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
});

AppRegistry.registerComponent('GalleryApp', () => DetailsScreen);
