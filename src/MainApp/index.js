import React from "react";
import { SimpleMap } from "./components/Map";
import { SearchByAddress } from "./components/SearchByAddress";

export const Main = () => {
  return (
    <div>
      Hello World
      <div>
        <SimpleMap />
        <SearchByAddress />
      </div>
    </div>
  );
};
