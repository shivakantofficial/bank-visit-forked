import React from "react";
import { SimpleMap } from "./components/Map";
import { SearchByAddress } from "./components/SearchByAddress";
import { NearbyBankList } from "./components/NearbyBankList";
import { SearchByLocation } from "./components/SearchByLocation";
import { VisitingBranchList } from "./components/VisitingBranchList";

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
        <hr />
        <VisitingBranchList />
      </div>
    </div>
  );
};
