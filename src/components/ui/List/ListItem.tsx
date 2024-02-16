import React, { type ReactNode } from "react";
import listStyles from "./List.style";

type ListItemProps = {
  children: ReactNode;
};

const ListItem = ({ children }: ListItemProps) => {
  return (
    <>
      <div className="list-item">{children}</div>
      <style jsx>{listStyles}</style>
    </>
  );
};

export default ListItem;
