import React from 'react';
import {
  MenuItemContainer,
  BackgroundImage,
  Content,
  Title,
  SubTitle,
} from './menu-item.styles.jsx';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <MenuItemContainer
      size={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImage imageUrl={imageUrl} />
      <Content>
        <Title>{title.toUpperCase()}</Title>
        <SubTitle>SHOP NOW</SubTitle>
      </Content>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
