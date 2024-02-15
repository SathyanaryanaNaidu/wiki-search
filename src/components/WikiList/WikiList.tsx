import React from "react";
import { List, ListItem } from "@/ui/List";
import type { ListEntity } from "@/src/types/wikisearch-types";

type WikiListProps = {
  data: Array<ListEntity>;
};

const WikiList = ({ data }: WikiListProps) => {
  return (
    <List>
      {data.map((list) => (
        <ListItem key={list.ns}>
          <h3>{list.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: list.snippet }} />
        </ListItem>
      ))}
    </List>
  );
};

export default WikiList;
