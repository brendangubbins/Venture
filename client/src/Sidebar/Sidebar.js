import React from 'react';
import styled from 'styled-components';
import { SidebarData } from './SidebarData';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  background: #071221;
  height: 100%;
  width: 16%;
  display: inline-block;
`;

const UserInformtion = styled.div`
  display: flex;
  align-items: center;
  background: #071221;
  border-bottom: #00cba6 1px solid;
`;
const UserImage = styled.img`
  border-radius: 100px;
  width: 50px;
  height: 50px;
  margin-right: 1.3rem;
  margin-left: 1rem;
`;

const NameBioContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
`;

const Username = styled.h2`
  color: white;
  font-family: 'Archivo', sans-serif;
  text-align: left;
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.125rem;
`;

const UserBio = styled.p`
  color: white;
  margin: 0 0 1rem 0;
  font-family: 'Archivo', sans-serif;
  font-size: 0.6666rem;
`;

const EventInformation = styled.div`
  display: flex;
  align-items: center;
  background: #071221;
  border-bottom: #00cba6 1px solid;
  padding-bottom: 0.8rem;
`;
const EventInfoHeader = styled.h2`
  color: white;
  font-family: 'Archivo', sans-serif;
  text-align: center;
  font-size: 1.125rem;
`;

const EventImage = styled.img`
  width: 50px;
  height: 50px;
  margin: 0 1.125rem;
`;
const EventName = styled.p`
  color: white;
  font-family: 'Archivo', sans-serif;
  font-size: 0.75rem;
`;

// const EventLocation = styled.p``;

const NameLocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MenuHeader = styled.p`
  color: #00cba6;
  font-size: 1.2rem;
  font-family: 'Archivo', sans-serif;
  margin-left: 1rem;
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 15%;
`;

const MenuListItem = styled.li`
  list-style-type: none;
  font-family: 'Archivo', sans-serif;
  display: flex;
  color: ${(props) => (props.active ? '#00CBA6' : 'white')};
  border-left: ${(props) => (props.active ? '3px solid #00CBA6' : 'none')};
  padding-left: 0.5rem;
  font-size: 1rem;
  &:hover {
    pointer: cursor;
  }
  align-items: center;
`;

const Sidebar = () => {
  return (
    <Wrapper>
      <UserInformtion>
        <UserImage src="#" />
        <NameBioContainer>
          <Username>First Last</Username>
          <UserBio>Short bio statement</UserBio>
        </NameBioContainer>
      </UserInformtion>
      <EventInfoHeader>Upcoming Event</EventInfoHeader>
      <EventInformation>
        <EventImage src="/" />
        <NameLocationContainer>
          <EventName>C7 Welcome Hackathon</EventName>
        </NameLocationContainer>
      </EventInformation>
      <MenuHeader>Menu</MenuHeader>
      <MenuList>
        {SidebarData.map((data, key) => {
          return (
            <MenuListItem
              key={key}
              active={window.location.pathname === data.path}
              onClick={() => {
                window.location.pathname = data.path;
              }}
            >
              <div style={{ marginRight: '1rem' }}>{data.icon}</div>
              <Link
                to={data.path}
                style={{ textDecoration: 'None', color: 'inherit' }}
              >
                {data.title}
              </Link>
            </MenuListItem>
          );
        })}
      </MenuList>
    </Wrapper>
  );
};

export default Sidebar;
