import React from 'react';

import { PageHeader } from 'antd';
import styled from 'styled-components';
import { HomeOutlined } from '@ant-design/icons';

import { navTitle } from 'libs';

interface HeaderProps {
  handleMoveBack: () => void;
  handleMoveHome: () => void;
  pathName: string;
  isMain?: boolean;
}

interface StyledPageHeaderProps {
  isMain?: boolean;
}
const StyledPageHeader = styled(PageHeader)<StyledPageHeaderProps>`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;

  .menu-button {
    all: unset;
    cursor: pointer;
  }

  .menu-icon,
  .anticon.anticon-arrow-left,
  .ant-page-header-heading-title {
    font-size: 30px;
  }
  .ant-page-header-back-button {
    display: ${props => (props.isMain ? 'none' : 'block')} !important;
  }
`;

const Header = (props: HeaderProps) => {
  const { handleMoveBack, handleMoveHome, pathName, isMain } = props;

  return (
    <StyledPageHeader
      onBack={handleMoveBack}
      isMain={isMain}
      title={isMain ? '' : navTitle[pathName]}
      extra={[
        <button key="menu" className="menu-button" onClick={handleMoveHome}>
          <HomeOutlined className="menu-icon" />
        </button>
      ]}
    ></StyledPageHeader>
  );
};

export default Header;
