import React from 'react';
import {
  StackScreenProps,
  createStackNavigator,
} from '@react-navigation/stack';

import HomeScreen from '@screens/Home/HomeScreen';
import LoginLayoutScreen from '@screens/LoginLayout/LoginLayoutScreen';
import FormLayoutScreen from '@screens/FormLayout/FormLayoutScreen';
import InputAfterScrollScreen from '@screens/InputAfterScroll/InputAfterScrollScreen';

import { ROUTES } from '../Routes';

export type RootStackParamList = {
  [ROUTES.Home]: undefined;
  [ROUTES.LoginLayout]: undefined;
  [ROUTES.FormLayout]: undefined;
  [ROUTES.InputAfterScroll]: undefined;
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
      <Stack.Screen
        name={ROUTES.FormLayout}
        component={FormLayoutScreen}
        options={{ title: 'Form Layout' }}
      />
      <Stack.Screen
        name={ROUTES.InputAfterScroll}
        component={InputAfterScrollScreen}
        options={{ title: 'Form Layout' }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
