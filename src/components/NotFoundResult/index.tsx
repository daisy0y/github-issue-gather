import React from 'react';
import { useHistory } from 'react-router';

import { Button, Result } from 'antd';

import { ROUTE_ROOT } from 'routes/const';

const NotFoundResult = () => {
  const history = useHistory();

  const handleOnClickHomeMove = () => {
    history.push(ROUTE_ROOT);
  };
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={handleOnClickHomeMove}>
          Back Home
        </Button>
      }
    />
  );
};

export default NotFoundResult;
