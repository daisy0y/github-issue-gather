import React from 'react';
import styled from 'styled-components';

const StyledApp = styled.div`
  .light {
    font-family: 'GmarketSansLight';
  }
  .medium {
    font-family: 'GmarketSansMedium';
  }
  .bold {
    font-family: 'GmarketSansBold';
  }
`;
const App = () => {
  const hello = 'asdf';
  console.log(hello, 'hello');

  return (
    <StyledApp>
      <span className="light">라이트라이트</span>
      <span className="medium">미디우미미두움</span>
      <span className="bold">볼드볼드</span>
    </StyledApp>
  );
};

export default App;
