import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Profile from 'App/Containers/Profile/Profile'


const TabNavigator = createBottomTabNavigator({
    Score: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: "Score",
            tabBarIcon: ({ tintColor }) => (
                <Icon name="trophy" selectedIconName="ios-home" size={25} color="#3598fb" />
            )
        }
    },
    Missions: { 
         screen: Profile,
         navigationOptions: {
            tabBarLabel: "Missions",
            tabBarIcon: ({ tintColor }) => (
                <Icon name="star" size={25} color="#3598fb" />
            )
        }
    },
    Friends: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: "Friends",
            tabBarIcon: ({ tintColor }) => (
                <Icon name="users" size={25} color="#3598fb" />
            )
        }
    },
    ScannedCars: { 
        screen: Profile,
        navigationOptions: {
            tabBarLabel: "Scanned Cars",
            tabBarIcon: ({ tintColor }) => (
                <IonIcon name="ios-book" size={25} color="#3598fb" />
            )
        } 
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#3598fb',
      inactiveTintColor: 'gray',
    },
  }
);

export default createAppContainer(TabNavigator);