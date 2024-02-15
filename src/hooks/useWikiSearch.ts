import { useEffect, useState } from "react";

const useWikiSearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [wikiList, setWikiList] = useState([]);

  const handleSearch = async (searchTerm: string) => {
    setIsLoading(true);
    const response = await fetch(`/api/wiki?search=${searchTerm}`);
    const data = await response.json();
    setWikiList(data.list);
    setIsLoading(false);
  };

  return { wikiList, handleSearch, setWikiList, isLoading };
};

export default useWikiSearch;
