import React from "react";
import listStyles from "./List.style";

const ListItem = ({ children }) => {
  return (
    <>
      <div className="list-item">{children}</div>
      <style jsx>{listStyles}</style>
    </>
  );
};

export default ListItem;
