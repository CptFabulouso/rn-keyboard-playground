import { View, ScrollView } from 'react-native';
import React from 'react';

import { Text, SimpleTextInput, KeyboardAvoidingView } from '@components';
import { RootStackScreenProps, ROUTES } from '@navigation';

import styles from './styles';

type LoginLayoutProps = RootStackScreenProps<ROUTES.LoginLayout> & {};

const LoginLayout = ({}: LoginLayoutProps) => {
  return (
    <KeyboardAvoidingView style={styles.flex}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
      >
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
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginLayout;
