import React from 'react';
import { useHistory } from 'react-router';

import { Layout } from 'antd';
import styled from 'styled-components';

import Header from 'components/Header';
import { ROUTE_ROOT } from 'routes/const';

interface MainLayoutProps extends React.HTMLProps<HTMLDivElement> {
  isMain?: boolean;
}

const StyledMainLayout = styled.div`
  position: relative;

  .ant-page-header-content {
    padding: 0;
  }
`;

const MainLayout = ({ children, ...props }: MainLayoutProps) => {
  const { isMain } = props;
  const history = useHistory();
  const pathName = history.location.pathname.split('/')[1];

  const handleMoveBack = () => {
    history.goBack();
  };

  const handleMoveHome = () => {
    history.push(ROUTE_ROOT);
  };

  return (
    <StyledMainLayout>
      <Header
        isMain={isMain}
        handleMoveBack={handleMoveBack}
        handleMoveHome={handleMoveHome}
        pathName={pathName}
      ></Header>
      <Layout.Content>{children}</Layout.Content>
    </StyledMainLayout>
  );
};

export default MainLayout;
