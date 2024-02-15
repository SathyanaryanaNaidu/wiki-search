import React, { useState } from "react";
import useDebounce from "@/hooks/useDebounce";
import useWikiSearch from "@/hooks/useWikiSearch";
import WikiSearch from "@/components/WikiSearch";
import searchContainerStyles from "./SearchWikiContainer.style";
import WikiList from "@/components/WikiList";
import { Bars } from "react-loader-spinner";

const SearchWikiContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { wikiList, handleSearch, setWikiList, isLoading } = useWikiSearch();
  const { debounce } = useDebounce();

  const debouncedSearch = debounce(handleSearch, 500);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    debouncedSearch(value);
  };

  const handleClearInput = () => {
    setSearchTerm("");
    setWikiList([]);
  };

  return (
    <div className="search-wiki-container">
      <WikiSearch
        searchTerm={searchTerm}
        handleInputChange={handleInputChange}
        handleClearInput={handleClearInput}
      />

      {isLoading && (
        <div className="loader">
          <Bars
            height="80"
            width="80"
            color="#bbb"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}

      <WikiList data={wikiList} />
      <style jsx>{searchContainerStyles}</style>
    </div>
  );
};

export default SearchWikiContainer;
