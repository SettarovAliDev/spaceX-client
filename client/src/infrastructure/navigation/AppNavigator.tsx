import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import CompanyScreen from '../../features/company/screens/CompanyScreen';
import LaunchesScreen from '../../features/launches/screens/LaunchesScreen';

interface ITabIcons {
  Company: string;
  Launches: string;
}

interface IScreenOptions {
  key: string;
  name: string;
}

const Tab = createBottomTabNavigator();

const tabIcons: ITabIcons = {
  Company: 'space-shuttle',
  Launches: 'rocket',
};

const tabBarIcon =
  (iconName) =>
  ({ size, color }) =>
    <Icon name={iconName} size={size} color={color} />;

const screenOptions = ({ route }: { route: IScreenOptions }) => {
  const iconName = tabIcons[route.name];

  return {
    tabBarIcon: tabBarIcon(iconName),
    tabBarActiveTintColor: 'orangered',
    tabBarInactiveTintColor: 'grey',
    headerShown: false,
  };
};

const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Company" component={CompanyScreen} />
      <Tab.Screen name="Launches" component={LaunchesScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
