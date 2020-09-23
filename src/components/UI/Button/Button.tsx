import { ViewStyle, TouchableOpacity } from 'react-native';
import React from 'react';

import { Text } from '../Text/Text';
import styles from './Button.styles';

type ButtonProps = {
  style?: ViewStyle;
  onPress: () => void;
  label: string;
};

const Button = ({ style, onPress, label }: ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export { Button };
