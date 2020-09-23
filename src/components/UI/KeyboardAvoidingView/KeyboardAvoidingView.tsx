import {
  Platform,
  KeyboardAvoidingView as RNKeyboardAvoidingView,
  KeyboardAvoidingViewProps,
} from 'react-native';
import React, { ReactNode } from 'react';
import { useHeaderHeight } from '@react-navigation/stack';

type Props = KeyboardAvoidingViewProps & {
  children: ReactNode;
  extraHeight?: number;
};

const KeyboardAvoidingView = ({
  children,
  extraHeight = 0,
  ...keyboardAvoidingViewProps
}: Props) => {
  const headerHeight = useHeaderHeight();
  return (
    <RNKeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={headerHeight + extraHeight}
      {...keyboardAvoidingViewProps}
    >
      {children}
    </RNKeyboardAvoidingView>
  );
};

export { KeyboardAvoidingView };
