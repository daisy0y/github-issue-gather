import React, { FunctionComponent } from 'react';

import { Avatar, List, Space } from 'antd';
import styled from 'styled-components';
import Tag from 'antd/es/tag';
import { EyeOutlined, HeartFilled, StarOutlined } from '@ant-design/icons';

import { bookMarkList, handleAddBookMarkProps } from 'module/github';

interface ListItemProps {
  id: number;
  full_name: string;
  topics?: string[];
  html_url: string;
  description: string | null;
  avatar_url: string;
  forks_count: number;
  open_issues_count: number;
  watchers: number;
  pushed_at: string;
  repo: string;
  owner: string;
  bookMarkList?: bookMarkList[];
  handleAddBookMark: (props: handleAddBookMarkProps) => void;
  handleRemoveBookMark: (id: number) => void;
}

interface IconProps {
  icon: FunctionComponent<any>;
  text: number;
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
    id,
    full_name,
    topics,
    html_url,
    description,
    avatar_url,
    forks_count,
    open_issues_count,
    watchers,
    pushed_at,
    repo,
    owner,
    bookMarkList,
    handleAddBookMark,
    handleRemoveBookMark
  } = props;

  const IconText = ({ icon, text }: IconProps) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
  const timeStamp = (date: string) => {
    const updatedAt = new Date(date);
    updatedAt.setHours(updatedAt.getHours() + 9);
    return updatedAt.toISOString().replace('T', ' ').substring(0, 19);
  };

  const checkBookMark = () => {
    return bookMarkList?.find(list => list.id === id);
  };

  return (
    <StyledListItem
      actions={[
        <IconText icon={StarOutlined} text={forks_count} key="fork" />,
        <IconText icon={EyeOutlined} text={watchers} key="watcher" />
      ]}
    >
      <List.Item.Meta
        avatar={<Avatar src={avatar_url && avatar_url} />}
        title={
          <a href={html_url} className="list-title">
            {full_name}
          </a>
        }
        description={description}
      />
      {topics?.map(topic => (
        <Tag key={topic} color="success" className="tags">
          {topic}
        </Tag>
      ))}
      <p className="issue">총 {open_issues_count}개의 이슈가 있습니다.</p>
      <div className="footer-container">
        <p className="updated">Updated {timeStamp(pushed_at)}</p>
        <button
          className="add-button"
          onClick={() =>
            checkBookMark()
              ? handleRemoveBookMark(id)
              : handleAddBookMark({
                  repo,
                  open_issues_count,
                  id,
                  owner,
                  full_name
                })
          }
        >
          <HeartFilled className={checkBookMark() ? 'active' : ''} /> 북마크
          {checkBookMark() && ' 해제'}
        </button>
      </div>
    </StyledListItem>
  );
};

export default ListItem;
