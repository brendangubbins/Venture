import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 1rem;
`;

const Name = styled.h5`
  font-family: "Archivo", sans-serif;
  font-size: 12px;
  color: white;
  width: 50%;
`;

const AvatarWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 0.5rem;
`;

//Passes the feed data to be displayed
const FeedAlert = ({ data }) => {
  return (
    <Wrapper>
      <Name>
        {data.name} {data.status}
      </Name>
      <AvatarWrapper>
        <Avatar src={data.image} />
      </AvatarWrapper>
    </Wrapper>
  );
};

export default FeedAlert;
