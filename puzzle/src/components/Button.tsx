import React, {FC, useCallback} from 'react';
import {GestureResponderEvent, TouchableOpacityProps} from 'react-native';

import {BaseButton, BaseButtonText} from '../styles';

interface IProps extends TouchableOpacityProps {
  transparent?: boolean;
}

const Button: FC<IProps> = props => {
  const {children, transparent, onPress} = props;

  const onPressButton = useCallback(
    (event: GestureResponderEvent) => {
      onPress?.(event);
    },
    [onPress],
  );

  return (
    <BaseButton onPress={onPressButton} transparent={transparent}>
      <BaseButtonText>{children}</BaseButtonText>
    </BaseButton>
  );
};

export default Button;
