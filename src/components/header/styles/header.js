import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${({ src }) =>
      src ? `../images/misc/${src}.jpg` : "../images/misc/home-bg.jpg"})
    top left / cover no-repeat;
`;

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 64px;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width 1000px) {
    margin: 0 30px;
  }
`;

export const Logo = styled.img`
  height: 32px;
  width: 108px;
  margin-right: 40px;

  @media (min-width: 1449px) {
    height: 48px;
    width: 170px;
  }
`;

export const ButtonLink = styled(ReactRouterLink)`
  display: block;
  background-color: #e50914;
  width: 105px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 20px;
  font-weight: 400;
  border-radius: 3px;
  padding: 10px 18px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;
  justify-content: center;

  &:hover {
    background-color: #f40612;
  }

  @media (max-width: 740px) {
    margin: 0 0px;
    font-size: 18px;
    padding: 7px;
    width: fit-content;
  }
`;
