import { TextInput, ScrollView } from 'react-native';
import React, { useRef } from 'react';

import { SimpleTextInput, KeyboardAvoidingView } from '@components';
import { RootStackScreenProps, ROUTES } from '@navigation';

import styles from './styles';

type MultilineInputProps = RootStackScreenProps<ROUTES.MultilineInput> & {};

const inputs = new Array(10).fill(0).map((_, i) => i);

const MultilineInput = ({}: MultilineInputProps) => {
  const refs = useRef<Array<null | TextInput>>([]);

  const handleSubmit = (i: number) => {
    refs.current[i + 1]?.focus();
  };

  return (
    <KeyboardAvoidingView style={styles.flex}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
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
            multiline
            numberOfLines={5}
            scrollEnabled={false} // Needs to be set to work
          />
        ))}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default MultilineInput;
