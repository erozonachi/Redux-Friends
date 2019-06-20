import styled from 'styled-components';

const AppContainer = styled.div`
  ul {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    margin: 1em 0;

    li {
      > a {
        text-decoration: underline;
        padding: 1em;
        background-color: #555;
        color: white;
        &:link, &:visited {
          color: white;
        }
        &:hover {
          color: #ccc;
        }
      }
    }
  }
`;

export default AppContainer;
