import css from "styled-jsx/css";

const searchContainerStyles = css`
  .search-wiki-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
    width: 100%;
    font-family: lato;

    .loader {
      margin: 40px auto;
    }
  }
`;

export default searchContainerStyles;
