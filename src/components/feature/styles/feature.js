import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
  text-align: center;
  padding: 165px 45px;
  max-width: 950px;
  align-self: center;
`;

export const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 60px;
  font-weight: bold;
  margin: auto;

  @media (max-width: 740px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  color: white;
  max-width: 640px;
  font-size: 30px;
  font-weight: 400;
  margin: 16px auto;

  @media (max-width: 740px) {
    font-size: 24px;
  }
`;
