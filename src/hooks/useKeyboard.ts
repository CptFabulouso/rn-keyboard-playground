// @flow

import { useEffect, useState } from 'react';
import { Keyboard, KeyboardEvent } from 'react-native';

export const useKeyboard = () => {
  const [visible, setKeyboardVisible] = useState(false);
  const [height, setKeyboardHeight] = useState(0);
  const keyboardDidShow = (ev: KeyboardEvent) => {
    setKeyboardVisible(true);
    setKeyboardHeight(ev.endCoordinates.height);
  };

  const keyboardDidHide = () => {
    setKeyboardVisible(false);
  };

  const keyboardWillShow = (ev: KeyboardEvent) => {
    setKeyboardVisible(true);
    setKeyboardHeight(ev.endCoordinates.height);
  };

  const keyboardWillHide = () => {
    setKeyboardVisible(false);
  };

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', keyboardDidHide);
    Keyboard.addListener('keyboardWillShow', keyboardWillShow);
    Keyboard.addListener('keyboardWillHide', keyboardWillHide);

    return () => {
      Keyboard.removeListener('keyboardDidShow', keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', keyboardDidHide);
      Keyboard.removeListener('keyboardWillShow', keyboardWillShow);
      Keyboard.removeListener('keyboardWillShow', keyboardWillHide);
    };
  }, []);

  return { keyboardVisible: visible, keyboardHeight: height };
};
