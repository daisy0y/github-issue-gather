import React from 'react';

import styled from 'styled-components';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

interface SearchInputProps {
  inputMode?: boolean;
  handleModalToggle: () => void;
}
const StyledSearchInput = styled(Input)`
  width: 90%;
  input {
    font-size: 28px;
    font-family: GmarketSansMedium;
  }

  .ant-btn.ant-btn-primary.ant-btn-lg.ant-input-search-button {
    height: 58px;
  }

  .anticon.anticon-close-circle.ant-input-clear-icon,
  .anticon.anticon-search {
    font-size: 24px;
  }

  .ant-input-group-addon {
    background-color: ${props => props.theme.mainColor};
    color: #fff;
  }
`;

const SearchInput = (props: SearchInputProps) => {
  const { inputMode, handleModalToggle, ...rest } = props;

  return (
    <StyledSearchInput
      {...rest}
      placeholder="검색어를 입력해주세요."
      addonAfter={
        <button onClick={() => !inputMode && handleModalToggle()}>
          <SearchOutlined />
        </button>
      }
      allowClear
      readOnly={!inputMode}
      onClick={() => !inputMode && handleModalToggle()}
      size="large"
    />
  );
};

export default SearchInput;
