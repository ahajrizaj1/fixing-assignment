import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { tabData } from "../../data";
import { tabData2 } from "../../data";
import { tabData3 } from "../../data";

const ReactTabs = () => {
  return (
    <div className="react-tabs">
      <Tabs className="tabs" defaultIndex={0}>
        <TabList className="tab-list">
          <Tab tabIndex="1" classID="tab">Domains</Tab>
          <Tab tabIndex="2" classID="tab">Web Hosting</Tab>
          <Tab tabIndex="3" classID="tab">Dedicated Servers</Tab>
          <Tab tabIndex="4" classID="tab">Virtual Cloud Servers</Tab>
          <Tab tabIndex="5" classID="tab">WordPress Hosting</Tab>
          <Tab tabIndex="6" classID="tab">Email Hosting</Tab>
          <Tab tabIndex="7" classID="tab">VPS Hosting Servers</Tab>
          <Tab tabIndex="8" classID="tab">Free Hosing</Tab>
        </TabList>
        <TabPanel>
          <div className="container">
            {tabData.map((data) => (
              <div className="tab-card" key={data.id}>
                <p className="tab-card__title">{data.title}</p>
                <div className="tab-card__price-con">
                  <strong>{data.currentPrice}</strong>
                  <p className="price__light">{data.prevPrice}</p>
                </div>
                <button className="btn3">{data.buyBtn}</button>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="container">
            {tabData2.map((data2) => (
              <div className="tab-card" key={data2.id}>
                <p className="tab-card__title">{data2.title}</p>
                <div className="tab-card__price-con">
                  <strong>{data2.currentPrice}</strong>
                  <p className="price__light">{data2.prevPrice}</p>
                </div>
                <button className="btn3">{data2.moreBtn}</button>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="container">
            {tabData3.map((data3) => (
              <div className="tab-card" key={data3.id}>
                <p className="tab-card__title">{data3.title}</p>
                <div className="tab-card__price-con">
                  <strong>{data3.currentPrice}</strong>
                  <p className="price__light">{data3.prevPrice}</p>
                </div>
                <button className="btn3">{data3.moreBtn}</button>
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReactTabs;