import React, {FC, useCallback} from 'react';
import {GestureResponderEvent, TouchableOpacityProps} from 'react-native';

import {BaseButton, BaseButtonText} from '../styles';

interface IProps extends TouchableOpacityProps {
  color?: string;
  transparent?: boolean;
}

const Button: FC<IProps> = props => {
  const {children, color, transparent, onPress} = props;

  const onPressButton = useCallback(
    (event: GestureResponderEvent) => {
      onPress?.(event);
    },
    [onPress],
  );

  return (
    <BaseButton
      onPress={onPressButton}
      color={color || 'pink'}
      transparent={transparent}>
      <BaseButtonText>{children}</BaseButtonText>
    </BaseButton>
  );
};

export default Button;
