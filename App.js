import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import HomeScreen from './app/screens/homeScreen';
import DetailsScreen from './app/screens/detailsScreen';

const GalleryApp = StackNavigator({
  Home: { screen: HomeScreen },
  Details: { screen: DetailsScreen }
});

export default class Gallery extends Component {
  render(){
    return <GalleryApp />;
  }
}
