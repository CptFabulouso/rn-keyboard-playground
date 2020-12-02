import React from 'react';
import {
  StackScreenProps,
  createStackNavigator,
} from '@react-navigation/stack';

import HomeScreen from '@screens/Home/HomeScreen';
import LoginLayoutScreen from '@screens/LoginLayout/LoginLayoutScreen';
import FormLayoutScreen from '@screens/FormLayout/FormLayoutScreen';
import InputAfterScrollScreen from '@screens/InputAfterScroll/InputAfterScrollScreen';
import RelayoutScreen from '@screens/Relayout/RelayoutScreen';
import KeyboardWithinModalScreen from '@screens/Modal/KeyboardWithinModalScreen';
import KeyboardWrappingModalScreen from '@screens/Modal/KeyboardWrappingModalScreen';
import KeyboardWrappingModalLibScreen from '@screens/Modal/RNModal';
import MultilineInputScreen from '@screens/MultilineInput/MultilineInputScreen';
import ContentInsetScreen from '@screens/ContentInset/ContentInsetScreen';

import { ROUTES } from '../Routes';

export type RootStackParamList = {
  [ROUTES.Home]: undefined;
  [ROUTES.LoginLayout]: undefined;
  [ROUTES.FormLayout]: undefined;
  [ROUTES.InputAfterScroll]: undefined;
  [ROUTES.Relayout]: undefined;
  [ROUTES.KeyboardWithinModal]: undefined;
  [ROUTES.KeyboardWrappingModal]: undefined;
  [ROUTES.KeyboardWithinModalLib]: undefined;
  [ROUTES.MultilineInput]: undefined;
  [ROUTES.ContentInset]: undefined;
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
        options={{ title: 'Input after scroll' }}
      />
      <Stack.Screen
        name={ROUTES.Relayout}
        component={RelayoutScreen}
        options={{ title: 'Relayout' }}
      />
      <Stack.Screen
        name={ROUTES.KeyboardWithinModal}
        component={KeyboardWithinModalScreen}
        options={{ title: 'Keyboard within Modal' }}
      />
      <Stack.Screen
        name={ROUTES.KeyboardWrappingModal}
        component={KeyboardWrappingModalScreen}
        options={{ title: 'Keyboard wrapping Modal' }}
      />
      <Stack.Screen
        name={ROUTES.KeyboardWithinModalLib}
        component={KeyboardWrappingModalLibScreen}
        options={{ title: 'Keyboard within rn-modal' }}
      />
      <Stack.Screen
        name={ROUTES.MultilineInput}
        component={MultilineInputScreen}
        options={{ title: 'Multiline Input' }}
      />
      <Stack.Screen
        name={ROUTES.ContentInset}
        component={ContentInsetScreen}
        options={{ title: 'Content Inset' }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
