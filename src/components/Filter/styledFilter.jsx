import styled from '@emotion/styled';

export const Container = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Input = styled.input`
background-color: white;
color: gray;
  padding: 7px 10px;
  letter-spacing: 1px;
  border-radius: 5px;
  border: none;
  box-shadow: -5px 0px 10px -7px #000000, 5px 0px 10px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
`;

export const Description = styled.p`
  margin-top: 0px;
  margin-bottom: 10px;
  font-weight: 300;
  letter-spacing: 1px;
  text-align: center;
  color: gray;
  text-shadow: 0.5px 0.5px 0 grey;
`;