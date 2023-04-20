import React from 'react';



import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Henrique Lima</strong>
            <span>@henriqlimac</span>
            <Dot />
            <time>19 de abril</time>
          </Header>

          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            iure adipisci nihil hic architecto! Esse, quas. Impedit, earum
            veritatis animi labore ut, provident dolorum aspernatur et quisquam
            molestiae delectus voluptates!
          </Description>
          <ImageContent />
          <Icons>
            <Status>
              <CommentIcon />
              10
            </Status>
            <Status>
              <RetweetIcon />
              421
            </Status>
            <Status>
              <LikeIcon />
              1.289
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
