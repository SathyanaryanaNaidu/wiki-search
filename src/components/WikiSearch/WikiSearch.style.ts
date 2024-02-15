import css from "styled-jsx/css";

const wikiSearchStyles = css`
  .wrapper {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin-top: 40px;
    font-family: lato;

    .header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h1 {
        margin: 5px;
      }
    }
  }
`;

export default wikiSearchStyles;
