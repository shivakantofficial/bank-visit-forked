import React from "react";
import { SimpleMap } from "./components/Map";
import { SearchByAddress } from "./components/SearchByAddress";
import { NearbyBankList } from "./components/NearbyBankList";

export const Main = () => {
  return (
    <div>
      Hello World
      <div>
        <SimpleMap />
        <SearchByAddress />
        <hr />
        <NearbyBankList />
      </div>
    </div>
  );
};
