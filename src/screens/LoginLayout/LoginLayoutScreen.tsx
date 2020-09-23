import { View, StyleSheet } from 'react-native';
import React from 'react';

import { Text } from '@components';
import { RootStackScreenProps, ROUTES } from '@navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

type LoginLayoutProps = RootStackScreenProps<ROUTES.LoginLayout> & {};

const LoginLayout = ({}: LoginLayoutProps) => {
  return (
    <View style={styles.container}>
      <Text>Login layout screen</Text>
    </View>
  );
};

export default LoginLayout;
