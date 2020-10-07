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
  removeHeaderHeight?: boolean;
};

const KeyboardAvoidingView = ({
  children,
  extraHeight = 0,
  removeHeaderHeight,
  ...keyboardAvoidingViewProps
}: Props) => {
  const headerHeight = useHeaderHeight();

  const keyboardVerticalOffset = removeHeaderHeight
    ? extraHeight
    : headerHeight + extraHeight;
  return (
    <RNKeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={keyboardVerticalOffset}
      {...keyboardAvoidingViewProps}
    >
      {children}
    </RNKeyboardAvoidingView>
  );
};

export { KeyboardAvoidingView };
