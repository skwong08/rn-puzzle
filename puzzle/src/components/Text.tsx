import React, {FC, memo} from 'react';
import {TextProps} from 'react-native';

import {StyledText} from '../styles';

const Text: FC<TextProps> = props => {
  return <StyledText {...props} />;
};

export default memo(Text);
