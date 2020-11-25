import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 70px;
  box-sizing: border-box;
`;

export const Label = styled.label`
  font-size: 16px;
  color: #8c8c8c;
  position: absolute;
  pointer-events: none;
  left: 20px;
  top: 18px;
  transition: 0.2s ease all;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 100%;
  height: 70px;
  background: #bb0a12;
  color: white;
  text-transform: uppercase;
  padding: 0 32px;
  font-size: 26px;
  border: 0;
  cursor: pointer;
  margin-left: 1px;
  letter-spacing: 0.05em;

  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 20px;

    @media (max-width: 1000px) {
      width: 16px;
    }
  }

  &:hover {
    background: #f40612;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 740px) {
    height: 50px;
    font-size: 16px;
    margin-top: 20px;
  }
`;

export const Text = styled.p`
  font-size: 23px;
  color: white;
  text-align: center;

  @media (max-width: 740px) {
    line-height: 22px;
    max-width: 450px;
  }
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
