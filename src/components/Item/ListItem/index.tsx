import React, { FunctionComponent } from 'react';

import { Avatar, List, Space, Tag } from 'antd';
import styled from 'styled-components';

import { EyeOutlined, HeartFilled, StarOutlined } from '@ant-design/icons';

import {
  bookMarkList,
  handleAddBookMarkProps,
  issueItems,
  searchItem
} from 'module/github';
import { addComma } from 'libs';

interface ListItemProps {
  issueItems?: issueItems;
  searchItems?: searchItem;
  bookMarkList?: bookMarkList[];
  handleAddBookMark?: (props: handleAddBookMarkProps) => void;
  handleRemoveBookMark?: (id: number) => void;
}

interface IconProps {
  icon?: FunctionComponent;
  stringIcon?: string;
  text: string | number;
}
const StyledListItem = styled(List.Item)`
  font-size: 24px;
  font-family: GmarketSansLight;
  padding: 40px 20px;

  .ant-anchor-link-title {
    font-size: 24px;
    font-family: GmarketSansLight;
  }
  a.anchor {
    color: #000;
  }

  p.issue {
    margin-top: 15px;
    font-size: 20px;
  }

  .add-button {
    font-size: 22px;
    cursor: pointer;
  }

  .anticon.anticon-heart.active {
    color: #ff0000;
  }
`;
const ListItem = (props: ListItemProps) => {
  const {
    bookMarkList,
    handleAddBookMark,
    handleRemoveBookMark,
    issueItems,
    searchItems
  } = props;

  const IconText = ({ icon, text, stringIcon }: IconProps) => (
    <Space>
      {icon ? React.createElement(icon) : stringIcon}

      {text}
    </Space>
  );
  const timeStamp = (date: string) => {
    const updatedAt = new Date(date);
    updatedAt.setHours(updatedAt.getHours() + 9);
    return updatedAt.toISOString().replace('T', ' ').substring(0, 19);
  };

  const filterRepo = (url: string) => {
    return url?.split('https://api.github.com/repos/')[1];
  };

  const checkBookMark = () => {
    return bookMarkList?.find(list => list.id === searchItems?.id);
  };

  const searchListIconArray = [
    {
      count: addComma(searchItems?.forks_count as number),
      icon: StarOutlined,
      key: 'fork'
    },
    {
      count: addComma(searchItems?.watchers as number),
      icon: EyeOutlined,
      key: 'watcher'
    }
  ];

  const reactionsArray = [
    {
      count: addComma(issueItems?.reactions?.confused as number),
      icon: '😕',
      key: 'confused'
    },
    {
      count: addComma(issueItems?.reactions?.eyes as number),
      icon: '👀',
      key: 'eyes'
    },
    {
      count: addComma(issueItems?.reactions?.heart as number),
      icon: '❤',
      key: 'heart'
    },
    {
      count: addComma(issueItems?.reactions?.hooray as number),
      icon: '🎉',
      key: 'hooray'
    },
    {
      count: addComma(issueItems?.reactions?.laugh as number),
      icon: '🤣',
      key: 'laugh'
    },
    {
      count: addComma(issueItems?.reactions?.rocket as number),
      icon: '🚀',
      key: 'rocket'
    }
  ];

  return (
    <StyledListItem
      actions={
        searchItems
          ? searchListIconArray.map(searchIcon => {
              return (
                <IconText
                  key={searchIcon.key}
                  icon={searchIcon.icon}
                  text={searchIcon.count}
                />
              );
            })
          : issueItems
          ? reactionsArray.map(reactionIcon => {
              return (
                <IconText
                  key={reactionIcon.key}
                  stringIcon={reactionIcon.icon}
                  text={reactionIcon.count}
                />
              );
            })
          : ['']
      }
    >
      <List.Item.Meta
        avatar={
          <Avatar
            src={searchItems?.owner?.avatar_url || issueItems?.user.avatar_url}
          />
        }
        title={
          <a
            href={searchItems?.html_url || issueItems?.html_url}
            className="list-title"
          >
            {searchItems?.full_name || issueItems?.title}
          </a>
        }
        description={searchItems?.description || issueItems?.body}
      />

      {searchItems && (
        <>
          {searchItems?.topics?.map(topic => (
            <Tag key={topic} color="success" className="tags">
              {topic}
            </Tag>
          ))}
          <p className="issue">
            총 {addComma(searchItems?.open_issues_count as number)}개의 이슈가
            있습니다.
          </p>
          <div className="footer-container">
            <p className="updated">
              Updated{' '}
              {timeStamp(
                (searchItems?.pushed_at as string) ||
                  (issueItems?.updated_at as string)
              )}
            </p>
            <button
              className="add-button"
              onClick={() =>
                checkBookMark()
                  ? handleRemoveBookMark &&
                    handleRemoveBookMark(searchItems?.id as number)
                  : handleAddBookMark &&
                    handleAddBookMark({
                      repo: searchItems?.name as string,
                      open_issues_count:
                        searchItems?.open_issues_count as number,
                      id: searchItems?.id as number,
                      owner: searchItems?.owner.login as string,
                      full_name: searchItems?.full_name as string
                    })
              }
            >
              <HeartFilled className={checkBookMark() ? 'active' : ''} /> 북마크
              {checkBookMark() && ' 해제'}
            </button>
          </div>
        </>
      )}

      {issueItems && (
        <div className="footer-container">
          <Tag key="repo" color="success" className="tags">
            {filterRepo(issueItems?.repository_url)}
          </Tag>
          <p className="updated">Updated {timeStamp(issueItems?.updated_at)}</p>
        </div>
      )}
    </StyledListItem>
  );
};

export default ListItem;
