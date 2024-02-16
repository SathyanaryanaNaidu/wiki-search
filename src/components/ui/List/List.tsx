import React, { type ReactNode } from "react";
import listStyles from "./List.style";

type ListProps = {
  children: ReactNode;
};

const List = ({ children }: ListProps) => {
  return (
    <>
      <div className="list">{children}</div>
      <style jsx>{listStyles}</style>
    </>
  );
};

export default List;
