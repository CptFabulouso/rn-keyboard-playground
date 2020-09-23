import { View, Image, Dimensions, Platform } from 'react-native';
import React from 'react';
import { useHeaderHeight } from '@react-navigation/stack';

import {
  Text,
  SimpleTextInput,
  KeyboardAvoidingView,
  KeyboardDismissView,
} from '@components';
import { RootStackScreenProps, ROUTES } from '@navigation';
import { useKeyboard } from '@hooks';

import styles from './styles';

const { height } = Dimensions.get('window');

type LoginLayoutProps = RootStackScreenProps<ROUTES.LoginLayout> & {};

const LoginLayout = ({}: LoginLayoutProps) => {
  const { keyboardVisible, keyboardHeight } = useKeyboard();
  const headerHeight = useHeaderHeight();

  let paddingBottom;
  let imageHeightSpace;
  if (keyboardVisible) {
    paddingBottom = Platform.OS === 'ios' ? keyboardHeight + 50 : 50;
    imageHeightSpace = height - headerHeight - keyboardHeight;
  } else {
    paddingBottom = 50;
    imageHeightSpace = height - headerHeight;
  }
  const imageSize = keyboardVisible ? 100 : 300;

  return (
    <KeyboardDismissView style={styles.flex}>
      <KeyboardAvoidingView style={styles.flex} enabled={false}>
        <View
          style={[
            styles.container,
            {
              paddingBottom,
            },
          ]}
        >
          <View style={styles.topView}>
            {imageHeightSpace >= 350 && (
              <Image
                source={require('../../assets/logo.png')}
                style={{
                  width: imageSize,
                  height: imageSize,
                }}
              />
            )}
          </View>
          <View style={styles.inputsWrapper}>
            <View style={styles.inputsContainer}>
              <Text style={styles.title}>Login</Text>
              <SimpleTextInput
                placeholder="email"
                label="Email"
                style={styles.input}
              />
              <SimpleTextInput placeholder="password" label="Password" />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </KeyboardDismissView>
  );
};

export default LoginLayout;
