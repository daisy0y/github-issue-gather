import React, { useEffect } from 'react';

import { Modal, Form } from 'antd';
import styled from 'styled-components';

import SearchInput from 'components/Input/SearchInput';
import MyBookMarkNSearch from 'components/MyBookMarkNSearch';
import { addRecentlySearch } from 'module/github';

interface SearchModalProps {
  modalToggle: boolean;
  recentlySearch?: addRecentlySearch[];
  handleModalToggle: () => void;
  onFinish: (data: { search: string }) => void;
  handleRemoveAll: (isBookMark?: boolean) => void;
  handleRemove: (id: number | string, isBookMark?: boolean) => void;
  handleMoveSearchOnClick: (search: string) => void;
}

const StyledSearchModal = styled(Modal)`
  margin: 0 auto;
  top: none !important;
  bottom: 0 !important;
  padding: 0;
  height: calc(100vh - 100px);
  .ant-modal-close-x {
    height: 91px;
    line-height: 91px;
    font-size: 28px;
  }
  .ant-modal-content {
    height: calc(100vh - 100px);
  }
`;
const SearchModal = (props: SearchModalProps) => {
  const {
    modalToggle,
    recentlySearch,
    handleModalToggle,
    onFinish,
    handleRemoveAll,
    handleRemove,
    handleMoveSearchOnClick
  } = props;
  const [form] = Form.useForm();

  useEffect(() => {
    return () => {
      form.resetFields();
    };
  }, [modalToggle]);

  return (
    <StyledSearchModal
      title={
        <Form form={form} onFinish={onFinish}>
          <Form.Item name="search" noStyle>
            <SearchInput inputMode handleModalToggle={handleModalToggle} />
          </Form.Item>
        </Form>
      }
      visible={modalToggle}
      onCancel={handleModalToggle}
      width={750}
      footer={null}
    >
      <MyBookMarkNSearch
        itemList={recentlySearch}
        handleRemoveAll={handleRemoveAll}
        handleRemove={handleRemove}
        handleMoveSearchOnClick={handleMoveSearchOnClick}
      />
    </StyledSearchModal>
  );
};

export default SearchModal;
