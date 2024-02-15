import React from "react";
import searchBoxStyles from "./SearchBox.style";

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
        placeholder="Search Wikipedia Here"
      />
      {value && value.length > 0 && (
        <button onClick={handleClearInput}> Clear </button>
      )}
      <style jsx>{searchBoxStyles}</style>
    </div>
  );
};

export default SearchBox;
