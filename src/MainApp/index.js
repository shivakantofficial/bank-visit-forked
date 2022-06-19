import React from "react";
import { SimpleMap } from "./components/Map";
import { SearchByAddress } from "./components/SearchByAddress";
import { NearbyBankList } from "./components/NearbyBankList";
import { SearchByLocation } from "./components/SearchByLocation";

export const Main = () => {
  return (
    <div>
      Hello World
      <div>
        <SimpleMap />
        <SearchByLocation />
        <SearchByAddress />
        <hr />
        <NearbyBankList />
      </div>
    </div>
  );
};
