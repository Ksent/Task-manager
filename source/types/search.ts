import { Dispatch, SetStateAction } from "react";

import { IClassName } from "./general";

export interface ISearchQuery extends IClassName {
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

export interface ISearchState extends ISearchQuery {
  searchQuery: string;
}