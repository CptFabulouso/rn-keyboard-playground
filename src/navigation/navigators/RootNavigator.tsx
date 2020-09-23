import React from 'react';
import {
  StackScreenProps,
  createStackNavigator,
} from '@react-navigation/stack';

import HomeScreen from '@screens/Home/HomeScreen';
import LoginLayoutScreen from '@screens/LoginLayout/LoginLayoutScreen';

import { ROUTES } from '../Routes';

export type RootStackParamList = {
  [ROUTES.Home]: undefined;
  [ROUTES.LoginLayout]: undefined;
};

export type RootStackScreenProps<
  R extends keyof RootStackParamList
> = StackScreenProps<RootStackParamList, R>;

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.Home}
        component={HomeScreen}
        options={{ title: 'Welcome' }}
      />
      <Stack.Screen
        name={ROUTES.LoginLayout}
        component={LoginLayoutScreen}
        options={{ title: 'Login Layout' }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
