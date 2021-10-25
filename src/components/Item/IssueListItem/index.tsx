import React from 'react';

import { Avatar, List, Space, Tag } from 'antd';
import styled from 'styled-components';

interface ListItemProps {
  html_url: string;
  title: string | null;
  avatar_url: string;
  updated_at: string;
  body: string;
  reactions: {
    laugh: number;
    hooray: number;
    confused: number;
    heart: number;
    rocket: number;
    eyes: number;
  };
  repository_url: string;
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
`;
const IssueListItem = (props: ListItemProps) => {
  const {
    html_url,
    title,
    avatar_url,
    updated_at,
    body,
    reactions,
    repository_url
  } = props;

  const IconText = ({ icon, count }: { icon: string; count: number }) => (
    <Space>
      {icon}
      {count}
    </Space>
  );

  const timeStamp = (date: string) => {
    const updatedAt = new Date(date);
    updatedAt.setHours(updatedAt.getHours() + 9);
    return updatedAt.toISOString().replace('T', ' ').substring(0, 19);
  };

  const filterRepo = () => {
    return repository_url.split('https://api.github.com/repos/')[1];
  };
  const reactionsArray = [
    {
      count: reactions.confused,
      icon: '😕',
      key: 'confused'
    },
    {
      count: reactions.eyes,
      icon: '👀',
      key: 'eyes'
    },
    {
      count: reactions.heart,
      icon: '❤',
      key: 'heart'
    },
    {
      count: reactions.hooray,
      icon: '🎉',
      key: 'hooray'
    },
    {
      count: reactions.laugh,
      icon: '🤣',
      key: 'laugh'
    },
    {
      count: reactions.rocket,
      icon: '🚀',
      key: 'rocket'
    }
  ];
  return (
    <StyledListItem
      actions={reactionsArray.map(reaction => (
        <IconText
          icon={reaction.icon}
          count={reaction.count}
          key={reaction.key}
        />
      ))}
    >
      <List.Item.Meta
        avatar={<Avatar src={avatar_url && avatar_url} />}
        title={
          <a className="list-title" href={html_url}>
            {title}
          </a>
        }
        description={body}
      />

      <div className="footer-container">
        <Tag key="repo" color="success" className="tags">
          {filterRepo()}
        </Tag>
        <p className="updated">Updated {timeStamp(updated_at)}</p>
      </div>
    </StyledListItem>
  );
};

export default IssueListItem;
