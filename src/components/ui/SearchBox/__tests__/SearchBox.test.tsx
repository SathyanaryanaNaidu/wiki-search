import { render } from "@testing-library/react";
import SearchBox from "../SearchBox";

it("renders searchBox unchanged", () => {
  const { container } = render(
    <SearchBox
      value=""
      handleInputChange={jest.fn()}
      handleClearInput={jest.fn()}
    />
  );
  expect(container).toMatchSnapshot();
});
