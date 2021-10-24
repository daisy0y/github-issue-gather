import React from 'react';

import { Tag } from 'antd';
import styled from 'styled-components';

import { addRecentlySearch, bookMarkList } from 'module/github';

interface MyBookMarkNSearchProps {
  handleMoveSearchOnClick?: (search: string) => void;
  handleRemoveAll: (isBookMark?: boolean) => void;
  handleRemove: (id: number | string, isBookMark?: boolean) => void;
  itemList?: bookMarkList[] | addRecentlySearch[];
  isBookMark?: boolean;
}

const StyledMyBookMarkNSearch = styled.div<{ isBookMark?: boolean }>`
  width: 100%;
  border-bottom: ${props => (props.isBookMark ? '1px solid #c8c8c8' : 'none')};
  header.bookmark {
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;
  }
  p.title,
  .remove-all {
    font-family: GmarketSansMedium;
    font-size: 24px;
  }

  .remove-all {
    cursor: pointer;
    color: ${props => props.theme.mainColor};
  }

  section.tags-section {
    padding: 0 40px 20px 40px;
  }

  .tags {
    cursor: pointer;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 20px;
    font-family: GmarketSansLight;
  }

  .anticon.anticon-close.ant-tag-close-icon {
    font-size: 20px;
  }

  div.empty-tags {
    margin-bottom: 30px;
    text-align: center;
    font-size: 20px;
    font-family: GmarketSansMedium;
  }
`;

const MyBookMarkNSearch = (props: MyBookMarkNSearchProps) => {
  const {
    handleRemoveAll,
    handleRemove,
    handleMoveSearchOnClick,
    itemList,
    isBookMark
  } = props;
  return (
    <StyledMyBookMarkNSearch isBookMark>
      <header className="bookmark">
        <p className="title">{isBookMark ? '나의 북마크' : '최근 검색어'}</p>
        <button
          className="remove-all"
          onClick={() =>
            itemList?.length
              ? handleRemoveAll(isBookMark)
              : alert('저장 된 정보가 없습니다.')
          }
        >
          전체 삭제
        </button>
      </header>
      <section className="tags-section">
        {itemList?.length ? (
          itemList.map(item => (
            <Tag
              key={item.id}
              onClick={() =>
                !isBookMark &&
                handleMoveSearchOnClick &&
                handleMoveSearchOnClick(item.full_name)
              }
              closable
              onClose={() => handleRemove(item.id, isBookMark)}
              color="success"
              className="tags"
            >
              {item.full_name}
            </Tag>
          ))
        ) : (
          <div className="empty-tags">
            {isBookMark
              ? '저장된 북마크가 없습니다.'
              : '최근 검색어가 없습니다.'}
          </div>
        )}
      </section>
    </StyledMyBookMarkNSearch>
  );
};

export default MyBookMarkNSearch;
