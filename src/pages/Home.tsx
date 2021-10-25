import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { Divider, Empty, List, Skeleton, Spin } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';

import SearchInput from 'components/Input/SearchInput';
import MainLayout from 'layouts/MainLayout';
import SearchModal from 'components/Modal/SearchModal';
import {
  addRecentlySearchAction,
  getIssueAction,
  getRepositoryAction,
  listIssueReposResponse,
  removeBookMarkAction,
  removeRecentlySearchAction,
  resetBookMarkAction,
  resetIssueListAction,
  resetRecentlySearchAction,
  setLoadingAction
} from 'module/github';
import { DEFAULT_PAGE, DEFAULT_PERPAGE } from 'libs';
import MyBookMarkNSearch from 'components/MyBookMarkNSearch';
import { StoreState } from 'module/index';
import { useEffect } from 'react';
import IssueListItem from 'components/Item/IssueListItem';

const StyledHome = styled.div`
  position: relative;
  .spin {
    position: absolute;

    top: 500px;
    left: 50%;
    right: 50%;
    background: #000000;
  }
  .search-input-wrap {
    display: flex;
    justify-content: center;
  }
`;

const Home = () => {
  const { bookMarkList, recentlySearch, issueList, isLoading } = useSelector(
    (state: StoreState) => state.githubState
  );
  const [modalToggle, setModalToggle] = useState<boolean>(false);
  const [issueLoading, setIssueLoading] = useState<boolean>(false);
  const [issues, setIssues] = useState<
    undefined | listIssueReposResponse['data'][]
  >(undefined);
  const [issueCount, setIssueCount] = useState<number>(20);

  const bookMark = localStorage.getItem('bookMark');
  const dispatch = useDispatch();
  const issueSupply = 20;

  const handleModalToggle = useCallback(() => {
    setModalToggle(prev => !prev);
  }, [modalToggle]);

  const resetAboutIssue = () => {
    setIssues(undefined);
    setIssueCount(20);
    dispatch(resetIssueListAction());
  };
  const onFinish = useCallback(
    (data: { search: string }) => {
      if (data.search) {
        dispatch(
          getRepositoryAction.request({
            q: data.search,
            per_page: DEFAULT_PERPAGE,
            page: DEFAULT_PAGE
          })
        );
        dispatch(
          addRecentlySearchAction.request({
            id: uuidv4(),
            full_name: data.search
          })
        );
        resetAboutIssue();
        handleModalToggle();
      } else {
        alert('검색어를 입력해주세요!');
      }
    },
    [dispatch]
  );

  const handleMoveSearchOnClick = (search: string) => {
    dispatch(
      getRepositoryAction.request({
        q: search,
        per_page: DEFAULT_PERPAGE,
        page: DEFAULT_PAGE
      })
    );
    resetAboutIssue();
  };

  const handleRemoveAll = useCallback(
    (isBookMark?: boolean) => {
      const confirm = window.confirm(
        isBookMark
          ? '저장된 북마크가 모두 제거됩니다.\n진행 하시겠습니까?'
          : '저장된 최근 검색어가 모두 제거됩니다.\n진행 하시겠습니까?'
      );
      if (confirm) {
        if (isBookMark) {
          resetAboutIssue();
          dispatch(resetBookMarkAction());
        } else {
          dispatch(resetRecentlySearchAction());
        }
      } else return;
    },
    [bookMarkList, recentlySearch]
  );

  const handleRemove = useCallback(
    (id: number | string, isBookMark?: boolean) => {
      if (isBookMark) {
        const num = id as number;
        resetAboutIssue();
        dispatch(removeBookMarkAction.request({ id: num }));
      } else {
        const string = id as string;
        dispatch(removeRecentlySearchAction.request({ id: string }));
      }
    },
    [bookMarkList, recentlySearch]
  );

  const getIssue = () => {
    if (bookMark) {
      dispatch(setLoadingAction());
      dispatch(getIssueAction.request(JSON.parse(bookMark)));
    } else {
      return;
    }
  };

  const handleLoadMoreData = () => {
    if (issueLoading) return;
    setIssueLoading(true);
    setIssues(issueList?.slice(0, issueCount));
    setIssueCount(prev => prev + issueSupply);
    setIssueLoading(false);
  };

  const issueListInit = () => {
    if (issueList && issueCount === 20) {
      setIssues(issueList.slice(0, issueCount));
      setIssueCount(prev => prev + issueSupply);
    }
  };

  useEffect(() => {
    getIssue();
  }, [bookMarkList]);

  useEffect(() => {
    issueListInit();
  }, [issueList, isLoading, issueCount]);

  useEffect(() => {
    if (issues) handleLoadMoreData();

    return () => resetAboutIssue();
  }, []);

  return (
    <MainLayout isMain>
      <StyledHome>
        {isLoading && <Spin tip="loading..." size="large" className="spin" />}
        <div className="search-input-wrap">
          <SearchInput handleModalToggle={handleModalToggle} />
        </div>
        <MyBookMarkNSearch
          handleRemoveAll={handleRemoveAll}
          handleRemove={handleRemove}
          itemList={bookMarkList}
          isBookMark
        />

        {issues && (issues?.length as number) > 1 ? (
          <div
            id="scrollableDiv"
            style={{
              height: 'calc(100vh - 400px)',
              overflow: 'auto',
              padding: '0 16px'
            }}
          >
            <InfiniteScroll
              dataLength={issues?.length as number}
              next={handleLoadMoreData}
              hasMore={
                (issues?.length as number) < (issueList?.length as number)
              }
              loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
              endMessage={<Divider plain>마지막 게시물입니다.</Divider>}
              scrollableTarget="scrollableDiv"
            >
              <List
                dataSource={issues}
                itemLayout="vertical"
                renderItem={(item: any) => (
                  <IssueListItem
                    html_url={item.html_url}
                    title={item.title}
                    body={item.body}
                    avatar_url={item.user.avatar_url}
                    updated_at={item.updated_at}
                    reactions={item.reactions}
                    repository_url={item.repository_url}
                  />
                )}
              />
            </InfiniteScroll>
          </div>
        ) : (
          issues &&
          (issues?.length as number) === 0 && (
            <Empty
              className="empty"
              description={
                <div>
                  <p className="empty-description">
                    저장된 저장소에 이슈가 없어요!
                    <br />
                    관심있는 저장소를 저장하고 이슈를 모아보세요!
                  </p>
                </div>
              }
              imageStyle={{ height: '100%' }}
            />
          )
        )}

        {!bookMark && (
          <Empty
            className="empty"
            description={
              <div>
                <p className="empty-description">
                  저장된 저장소가 없어요!
                  <br />
                  관심있는 저장소를 저장하고 이슈를 모아보세요!
                </p>
              </div>
            }
            imageStyle={{ height: '100%' }}
          />
        )}
      </StyledHome>
      <SearchModal
        onFinish={onFinish}
        modalToggle={modalToggle}
        handleModalToggle={handleModalToggle}
        handleRemoveAll={handleRemoveAll}
        handleRemove={handleRemove}
        recentlySearch={recentlySearch}
        handleMoveSearchOnClick={handleMoveSearchOnClick}
      />
    </MainLayout>
  );
};

export default Home;
