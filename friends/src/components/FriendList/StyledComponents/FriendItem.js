import styled from 'styled-components';

const FriendItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: baseline;
  width: 45%;
  background-color: white;
  color: #555;
  margin: .5em 0;
  box-shadow: 4px 4px 4px 4px #ccc;
  > h3 {
    font-size: 1.8rem;
    font-weight: bold;
    padding: .5em 0;
    width: 100%;
    text-align: center;
  }
  > span {
    display: flex;
    padding: .5em;
    > em {
      font-weight: bold;
    }
  }
  > div {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding: 1em 0;
    button {
      border: none;
      outline: none;
      padding: .5em;
      background-color: #610000;
      color: white;
      margin: 0 .5em;
      cursor: pointer;
    }
    > a {
      button {
        background-color: teal;
      }
    }
  }
`;

export default FriendItem;