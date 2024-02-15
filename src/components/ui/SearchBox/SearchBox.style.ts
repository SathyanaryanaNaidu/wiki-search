import css from "styled-jsx/css";

const searchBoxStyles = css`
  .search-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 600px;
    margin: 20px auto;
    position: relative;

    input {
      display: flex;
      width: 100%;
      font-size: 24px;
      text-align: center;
      padding: 16px;
      outline: none;
      border: 2px solid black;
      border-radius: 8px;
    }

    button {
      outline: none;
      border: none;
      position: absolute;
      right: 9px;
      height: 100%;
      background: transparent;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export default searchBoxStyles;
