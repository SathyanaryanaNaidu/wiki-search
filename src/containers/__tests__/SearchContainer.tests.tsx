import "@testing-library/jest-dom";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import SearchContainer from "../SearchContainer";
import { HEADING } from "@/src/constants/labels";
import { mock_data } from "@/src/__mocks__/mock-data";
import useWikiSearch from "../../hooks/useWikiSearch";

jest.mock("../../hooks/useWikiSearch");

describe("SearchContainer", () => {
  it("renders a heading", () => {
    const handleSearch = jest.fn();
    useWikiSearch.mockReturnValue({
      wikiList: [],
      handleSearch,
      setWikiList: jest.fn(),
      isLoading: false,
    });
    render(<SearchContainer />);
    const heading = screen.getByText(HEADING);
    const input = screen.getByTestId("search-input");
    expect(heading).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it("search box interaction testing", () => {
    const handleSearch = jest.fn();
    useWikiSearch.mockReturnValue({
      wikiList: [],
      handleSearch,
      setWikiList: jest.fn(),
      isLoading: false,
    });
    render(<SearchContainer />);
    const input = screen.getByTestId("search-input");
    // triggering input change should reflect in the value
    fireEvent.change(input, { target: { value: "India" } });
    expect(input.value).toBe("India");

    // on clicking the clear button the input should get reset
    const clearButton = screen.getByTestId("clear-button");
    fireEvent.click(clearButton);
    expect(input.value).toBe("");
  });

  it("on input change should be able to call api and loader should be displayed", async () => {
    const handleSearch = jest.fn();
    useWikiSearch.mockReturnValue({
      wikiList: mock_data.list,
      handleSearch,
      setWikiList: jest.fn(),
      isLoading: true,
    });

    render(<SearchContainer />);
    const input = screen.getByTestId("search-input");

    fireEvent.change(input, { target: { value: "India" } });
    expect(input.value).toBe("India");

    await waitFor(() => {
      expect(handleSearch).toHaveBeenCalledWith("India");
      expect(screen.getByTestId("loader")).toBeInTheDocument();
    });
  });
});
