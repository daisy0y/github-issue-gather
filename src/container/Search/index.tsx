import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';
import { Divider, Empty, Skeleton, List } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';

import { StoreState } from 'module/index';
import {
  addBookMarkAction,
  getRepositoryAction,
  handleAddBookMarkProps,
  removeBookMarkAction,
  searchItem,
  setLoadingAction
} from 'module/github';
import ListItem from 'components/Item/ListItem';
import { addComma, DEFAULT_PAGE, DEFAULT_PERPAGE } from 'libs/constants';

const StyledSearch = styled.div`
  header.search {
    padding: 40px 40px 0 40px;
    font-family: GmarketSansLight;
    font-size: 26px;
    margin-bottom: 40px;
  }
  .total-count {
    padding: 0 5px;
    font-family: GmarketSansMedium;
    font-size: 28px;
    color: ${props => props.theme.mainColor};
  }
`;

const Search = () => {
  const { repositoryList, bookMarkList, isLoading } = useSelector(
    (state: StoreState) => state.githubState
  );
  const [currentPage, setCurrentPage] = useState<number>(DEFAULT_PAGE);
  const totalPage = Math.ceil(
    (repositoryList?.data?.total_count as number) / DEFAULT_PERPAGE
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const keyword = history.location.pathname.split('q=')[1];

  const handleAddBookMark = useCallback(
    ({
      id,
      owner,
      repo,
      open_issues_count,
      full_name
    }: handleAddBookMarkProps) => {
      dispatch(
        addBookMarkAction.request({
          id,
          owner,
          repo,
          open_issues_count,
          full_name
        })
      );
    },
    [bookMarkList]
  );

  const handleRemoveBookMark = useCallback(
    (id: number) => {
      dispatch(
        removeBookMarkAction.request({
          id
        })
      );
    },
    [bookMarkList]
  );

  const handleLoadMoreData = () => {
    if (isLoading) return;
    if (Math.ceil(totalPage) < currentPage) return;

    setCurrentPage(prev => prev + 1);
  };

  useEffect(() => {
    if (!repositoryList) {
      dispatch(
        getRepositoryAction.request({
          q: keyword,
          per_page: DEFAULT_PERPAGE,
          page: DEFAULT_PAGE
        })
      );
    }
    if (currentPage !== 1) {
      dispatch(setLoadingAction());
      dispatch(
        getRepositoryAction.request({
          q: keyword,
          per_page: DEFAULT_PERPAGE,
          page: currentPage
        })
      );
    }
  }, [currentPage]);

  return (
    <StyledSearch>
      <header className="search">
        총
        <strong className="total-count">
          {addComma(repositoryList?.data.total_count as number) || 0}
        </strong>
        건이 검색 되었습니다.
      </header>
      {!repositoryList?.data.total_count ? (
        <Empty
          className="empty"
          description={
            <div>
              <p className="empty-description">검색결과가 존재하지 않습니다.</p>
              <p className="empty-description">다른 검색어를 입력해보세요.</p>
            </div>
          }
          imageStyle={{ height: '100%' }}
        />
      ) : (
        <div
          id="scrollableDiv"
          style={{
            height: 'calc(100vh - 300px)',
            overflow: 'auto',
            padding: '0 16px'
          }}
        >
          <InfiniteScroll
            dataLength={repositoryList?.data.items.length}
            next={handleLoadMoreData}
            hasMore={
              repositoryList?.data.items.length <
              repositoryList?.data?.total_count
            }
            loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
            endMessage={<Divider plain>마지막 게시물입니다.</Divider>}
            scrollableTarget="scrollableDiv"
          >
            <List
              dataSource={repositoryList?.data?.items}
              itemLayout="vertical"
              renderItem={item => (
                <ListItem
                  searchItems={item as unknown as searchItem}
                  bookMarkList={bookMarkList}
                  handleAddBookMark={handleAddBookMark}
                  handleRemoveBookMark={handleRemoveBookMark}
                />
              )}
            />
          </InfiniteScroll>
        </div>
      )}
    </StyledSearch>
  );
};

export default Search;
