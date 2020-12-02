import { TextInput, ScrollView } from 'react-native';
import React, { useRef } from 'react';

import { SimpleTextInput } from '@components';
import { RootStackScreenProps, ROUTES } from '@navigation';
import { useKeyboard } from '@hooks';

import styles from './styles';

type ContentInsetProps = RootStackScreenProps<ROUTES.ContentInset> & {};

const inputs = new Array(10).fill(0).map((_, i) => i);

const ContentInset = ({}: ContentInsetProps) => {
  const refs = useRef<Array<null | TextInput>>([]);
  const { keyboardHeight, keyboardVisible } = useKeyboard();
  const handleSubmit = (i: number) => {
    refs.current[i + 1]?.focus();
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      contentInset={{ bottom: keyboardVisible ? keyboardHeight : 0 }}
    >
      {inputs.map((v, i) => (
        <SimpleTextInput
          key={v}
          placeholder={`input${v}`}
          label={`input${v}`}
          style={styles.input}
          ref={(ref) => {
            refs.current[i] = ref;
          }}
          blurOnSubmit={i === inputs.length - 1}
          onSubmitEditing={() => handleSubmit(i)}
        />
      ))}
    </ScrollView>
  );
};

export default ContentInset;
