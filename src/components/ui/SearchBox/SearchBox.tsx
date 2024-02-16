import React from "react";
import searchBoxStyles from "./SearchBox.style";
import {
  SEARCH_BOX_CLEAR_BUTTON,
  SEARCH_BOX_PLACEHOLDER,
} from "@/src/constants/labels";

type SearchBoxProps = {
  value: string;
  handleInputChange: (a: string) => void;
  handleClearInput: () => void;
};

const SearchBox = ({
  value,
  handleInputChange,
  handleClearInput,
}: SearchBoxProps) => {
  return (
    <div className="search-box">
      <input
        value={value}
        onChange={handleInputChange}
        placeholder={SEARCH_BOX_PLACEHOLDER}
      />
      {value && value.length > 0 && (
        <button onClick={handleClearInput}> {SEARCH_BOX_CLEAR_BUTTON} </button>
      )}
      <style jsx>{searchBoxStyles}</style>
    </div>
  );
};

export default SearchBox;
