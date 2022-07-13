import styled from '@emotion/styled';

export const Container = styled.div`
  width: inherit;
  & p {
    margin-top: 0px;
    margin-bottom: 10px;
    font-size: 24px;
    font-weight: 300;
    letter-spacing: 2px;
    text-align: center;
    color: gray;
    text-shadow: .5px .5px 0 gray;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: inherit;
  margin: 0px;
  padding: 0px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: silver;
  color: white;
  width: inherit;
  list-style: none;
  border-radius: 5px;
  box-shadow: -5px 0px 10px -7px black, 5px 0px 10px -7px black,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  :not(:last-of-type) {
    margin-bottom: 10px;
  }
  & p {
    margin: 0px;
    padding: 5px 10px;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1px;
    color: white;
    text-shadow: 0 0 5px white;
    & span {
      margin-left: 20px;
    }
  }
`;


export const Button = styled.button`
  padding: 5px 10px 5px 30px;
  background-color: transparent;
  color: white;
  border: none;
  text-shadow: 0 0 5px white;
  text-transform: capitalize;
  animation: change-color 3s linear 3 alternate;
  cursor: pointer;
`;