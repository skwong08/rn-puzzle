import React, {FC, useCallback} from 'react';
import {GestureResponderEvent, TouchableOpacityProps} from 'react-native';

import {OptionButton, OptionButtonText} from '../styles';

interface IProps extends TouchableOpacityProps {
  selected?: boolean;
}

const CategoryButton: FC<IProps> = props => {
  const {children, selected, onPress} = props;

  const onPressButton = useCallback(
    (event: GestureResponderEvent) => {
      onPress?.(event);
    },
    [onPress],
  );

  return (
    <OptionButton onPress={onPressButton} selected={selected} activeOpacity={1}>
      <OptionButtonText selected={selected}>{children}</OptionButtonText>
    </OptionButton>
  );
};

export default CategoryButton;
