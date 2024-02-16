import React from "react";
import { List, ListItem } from "@/ui/List";
import type { ListEntity } from "@/src/types/wikisearch-types";
import wikiListStyles from "./WikiList.style";

type WikiListProps = {
  data: Array<ListEntity>;
};

const WikiList = ({ data }: WikiListProps) => {
  return (
    <List>
      {data.map((list) => (
        <ListItem key={list.ns}>
          <h3>{list.title}</h3>
          <p dangerouslySetInnerHTML={{ __html: list.snippet }} />
          <style jsx>{wikiListStyles}</style>
        </ListItem>
      ))}
    </List>
  );
};

export default WikiList;
