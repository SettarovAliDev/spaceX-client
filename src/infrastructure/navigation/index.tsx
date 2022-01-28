import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './AppNavigator';

const Navigation = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
