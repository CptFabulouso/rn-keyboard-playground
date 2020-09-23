import { Text as RNText, StyleSheet } from 'react-native';
import React, { ReactNode } from 'react';

import { getFontStyleForWeight } from './getFontStyleForWeight';
import styles from './styles';

type Props = {
  style?: any;
  children?: ReactNode;
  forceOneLine?: boolean;
  adjustsFontSizeToFit?: boolean;
};

const Text = (props: Props) => {
  const flatStyle = StyleSheet.flatten(props.style);
  let fontStyle = null;
  if (flatStyle) {
    fontStyle = getFontStyleForWeight(
      flatStyle.fontFamily,
      flatStyle.fontWeight,
    );
  }

  let additionalProps = {};

  if (props.forceOneLine) {
    additionalProps = {
      numberOfLines: 1,
      ellipsizeMode: 'tail',
    };
  }

  return (
    <RNText
      {...props}
      style={[styles.text, props.style, fontStyle]}
      {...additionalProps}
    >
      {props.children}
    </RNText>
  );
};

export { Text };
