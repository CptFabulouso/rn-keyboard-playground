import {
  Platform,
  KeyboardAvoidingView as RNKeyboardAvoidingView,
  KeyboardAvoidingViewProps,
} from 'react-native';
import React, { ReactNode } from 'react';
import { useHeaderHeight } from '@react-navigation/stack';

type Props = KeyboardAvoidingViewProps & {
  children: ReactNode;
};

const KeyboardAvoidingView = ({
  children,
  ...keyboardAvoidingViewProps
}: Props) => {
  const headerHeight = useHeaderHeight();
  return (
    <RNKeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={headerHeight}
      {...keyboardAvoidingViewProps}
    >
      {children}
    </RNKeyboardAvoidingView>
  );
};

export { KeyboardAvoidingView };
