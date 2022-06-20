import React from "react";
import Tabs, { TabPane } from "rc-tabs";
import { SimpleMap } from "./components/Map";
import { SearchByAddress } from "./components/SearchByAddress";
import { NearbyBankList } from "./components/NearbyBankList";
import { SearchByLocation } from "./components/SearchByLocation";
import { VisitingBranchList } from "./components/VisitingBranchList";
import { Loader } from "./components/Loader";
import "rc-tabs/assets/index.css";

export const Main = () => {
  /*
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
  */

  return (
    <div className="main">
      <Tabs defaultActiveKey="1">
        <TabPane tab="Bank List" key="1">
          <div className="location-search-container">
            <SearchByLocation />
            <SearchByAddress />
            <Loader />
          </div>
          <SimpleMap />
          <NearbyBankList />
        </TabPane>
        <TabPane tab="Visiting Bank" key="2">
          <VisitingBranchList />
        </TabPane>
      </Tabs>
    </div>
  );
};
