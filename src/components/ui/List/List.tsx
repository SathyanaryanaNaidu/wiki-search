import React from "react";
import listStyles from "./List.style";

const List = ({ children }) => {
  return (
    <>
      <div className="list">{children}</div>
      <style jsx>{listStyles}</style>
    </>
  );
};

export default List;
