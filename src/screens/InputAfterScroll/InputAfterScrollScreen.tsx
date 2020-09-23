import { View, ScrollView } from 'react-native';
import React from 'react';

import { SimpleTextInput, KeyboardAvoidingView } from '@components';
import { RootStackScreenProps, ROUTES } from '@navigation';

import styles from './styles';

type InputAfterScrollProps = RootStackScreenProps<ROUTES.InputAfterScroll> & {};

const mock = new Array(10).fill(0).map((_, i) => i);

const InputAfterScroll = ({}: InputAfterScrollProps) => {
  return (
    <KeyboardAvoidingView style={styles.flex}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        {mock.map((v) => {
          return <View style={styles.mockView} key={v} />;
        })}
      </ScrollView>
      <View style={styles.footer}>
        <SimpleTextInput placeholder="Name" label="Name" />
      </View>
    </KeyboardAvoidingView>
  );
};

export default InputAfterScroll;
