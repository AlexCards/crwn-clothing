import React from 'react';

import CustomButtonContainer from './custom-button.styles';

const CustomButtom = ({ children, ...otherProps }) => (
  <CustomButtonContainer {...otherProps}>{children}</CustomButtonContainer>
);

export default CustomButtom;
