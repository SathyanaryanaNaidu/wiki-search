import css from "styled-jsx/css";

const listStyles = css`
  .list-item {
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid #eee;
    border-radius: 8px;
    padding: 4px 8px;

    h3 {
      text-transform: uppercase;
      font-weight: 700;
    }
  }

  .list {
    flex: 1;
    width: 50%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 20px auto;
    font-family: lato;
    @media only screen and (max-width: 720px) {
      width: 100%;
    }
  }
`;

export default listStyles;
