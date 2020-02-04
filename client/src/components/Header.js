import React from 'react';
import styled from 'styled-components';
import { NavLink, Route } from 'react-router-dom';

const HeaderLink = styled(NavLink)`
  color: ${props => props.secondary};
  text-decoration: none;
  &.active {
    text-decoration: underline;
  }
  :active {
    transform: scale(0.95);
  }
  :visited {
    color: ${props => props.secondary};
  }
`;

const HeaderWrapper = styled.div`
  color: ${props => props.secondary};
  background-color: ${props => props.primary};
  font-size: 24px;
  font-weight: 500;
  display: flex;
  justify-content: space-around;
  padding: 5px 0;
`;

export default function Headers({ theme }) {
  return (
    <>
      <HeaderWrapper {...theme}>SHL 19/20</HeaderWrapper>
      <HeaderWrapper {...theme}>
        <HeaderLink {...theme} to="/standings">
          Standings
        </HeaderLink>
        <HeaderLink {...theme} to="/games">
          Games
        </HeaderLink>
        <HeaderLink {...theme} to="/statistics">
          Stats
        </HeaderLink>
      </HeaderWrapper>
      <Route path="/statistics">
        <HeaderWrapper {...theme}>
          <HeaderLink {...theme} to="/statistics/goalies">
            Goalies
          </HeaderLink>
          <HeaderLink {...theme} to="/statistics/players">
            Players
          </HeaderLink>
          <HeaderLink {...theme} to="/statistics/winstreaks">
            Winstreaks
          </HeaderLink>
        </HeaderWrapper>
      </Route>
    </>
  );
}
