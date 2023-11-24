import styled from "styled-components";

export const img = styled.img`
 width:51%;

`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #E1E1E1;
  background-image: linear-gradient(180deg, #B8FFB1 , #FFFFFF);
  gap: 10px;
  height: 100vh;

`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: #E1E1E1;
  max-width: 350px;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #D5D5D5
`;

export const Label = styled.label`
  font-size: 20px;
  font-weight: 600;
  color: #676767;
  padding: 5%;
`;

export const LabelSignup = styled.label`
  font-size: 16px;
  color: #676767;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #676767;
  }
`;