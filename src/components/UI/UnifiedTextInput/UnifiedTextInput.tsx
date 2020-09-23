import { Platform, TextInput, TextInputProps } from 'react-native';
import React from 'react';

import styles from './styles';

type UnifiedTextInputProps = TextInputProps & {
  underlineColor?: string;
};

const UnifiedTextInput = React.forwardRef<TextInput, UnifiedTextInputProps>(
  (props, ref) => {
    const { underlineColor, ...textInputProps } = props;

    let height = 28;
    if (textInputProps.multiline && textInputProps.numberOfLines) {
      const numberOfLines = textInputProps.numberOfLines || 3;
      height = 24 + (numberOfLines - 1) * 17;
    }

    return (
      //$FlowFixMe
      <TextInput
        allowFontScaling={false}
        {...textInputProps}
        style={[
          styles.input,
          props.style,
          {
            height,
            ...Platform.select({
              ios: {
                borderBottomWidth: underlineColor ? 1 : 0,
                borderColor: underlineColor,
              },
              android: {
                left: -4,
                paddingTop: textInputProps.multiline ? 4 : 0,
                paddingBottom: 0,
                borderBottomWidth:
                  textInputProps.underlineColorAndroid || underlineColor
                    ? 1
                    : 0,
                borderColor:
                  underlineColor || textInputProps.underlineColorAndroid,
              },
            }),
          },
        ]}
        underlineColorAndroid="transparent"
        textAlignVertical={props.multiline ? 'top' : 'center'}
        ref={ref}
      />
    );
  },
);

export { UnifiedTextInput };
