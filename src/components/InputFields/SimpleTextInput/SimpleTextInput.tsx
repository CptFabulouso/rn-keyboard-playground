import { View, TextInput, TextInputProps } from 'react-native';
import React from 'react';

import { Text } from '../../UI/Text/Text';
import { UnifiedTextInput } from '../../UI/UnifiedTextInput/UnifiedTextInput';
import styles from './styles';

type SimpleTextInputProps = TextInputProps & {
  label: string;
};

const SimpleTextInput = React.forwardRef<TextInput, SimpleTextInputProps>(
  (props, ref) => {
    const { style, label, ...textInputProps } = props;
    return (
      <View style={[styles.container, style]}>
        <Text style={styles.label}>{label}</Text>
        <UnifiedTextInput {...textInputProps} ref={ref} />
      </View>
    );
  },
);

export { SimpleTextInput };
