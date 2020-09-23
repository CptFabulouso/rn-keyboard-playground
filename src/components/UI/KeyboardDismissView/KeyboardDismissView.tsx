// @flow

import React, { ReactNode } from 'react';
import {
  Keyboard,
  TouchableWithoutFeedback,
  View,
  ViewProps,
} from 'react-native';

type KeyboardDismissViewProps = ViewProps & {
  children: ReactNode;
};

const KeyboardDismissView = ({
  children,
  ...viewProps
}: KeyboardDismissViewProps) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View {...viewProps}>{children}</View>
    </TouchableWithoutFeedback>
  );
};

export { KeyboardDismissView };
