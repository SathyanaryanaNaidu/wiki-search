import React from "react";
import SearchBox from "@/ui/SearchBox";
import wikiSearchStyles from "./WikiSearch.style";

type WikiSearchProps = {
  searchTerm: string;
  handleInputChange: (a: string) => void;
  handleClearInput: () => void;
};

const WikiSearch = ({
  searchTerm,
  handleInputChange,
  handleClearInput,
}: WikiSearchProps) => {
  return (
    <div className="wrapper">
      <div className="header">
        <h1> WIKIPEDIA </h1>
        <span>The Free Encyclopedia</span>
      </div>

      <SearchBox
        value={searchTerm}
        handleInputChange={handleInputChange}
        handleClearInput={handleClearInput}
      />

      <style jsx>{wikiSearchStyles}</style>
    </div>
  );
};
export default WikiSearch;
