import { Text, Window, hot, View } from "@nodegui/react-nodegui";
import React, { useState, useEffect } from "react";
import { QIcon } from "@nodegui/nodegui";
import nodeguiIcon from "../assets/nodegui.jpg";

// Import System Details
import { systemDetails } from "./helpers/systemDetails";
import { initialData } from "./helpers/initialData";

import { InnerContainer } from "./components/InnerContainer"; // Application width and height
import StatsColumn from "./components/StatsColumn";
import StatsRow from './components/StatsRow'
const fixedSize = { width: 490, height: 460 };

const minSize = { width: 500, height: 520 };
const winIcon = new QIcon(nodeguiIcon);
const App = () => {
  // Array destructure data and setData function
  const [data, setData] = useState(initialData);
  useEffect(() => {
    const getSystemData = async () => {
      const sysData: any = await systemDetails();
      console.log(sysData)
      setData(sysData);
    };
    getSystemData();
  });
  //Get Static Data
  const { platform, operatingSystem, ip, osType, arch } = data.staticDetails;
  return (
    <Window minSize={fixedSize} maxSize={fixedSize} styleSheet={styleSheet}>
      <View id="container">
        <Text id="header">System Utility Monitor</Text>
        <Text id="subHeader">{platform}</Text>
        <StatsRow>
          <View id="informationContainer" styleSheet={styleSheet}>
            <Text id="headText">System Information</Text>
            <Text id="infoText">{operatingSystem}</Text>
            <Text id="infoText">{osType}</Text>
            <Text id="infoText">{ip}</Text>
            <Text id="infoText">{arch}</Text>
          </View>
        </StatsRow>
      </View>
    </Window>
  );
};

// Application Stylesheets
const styleSheet = `
  #container {
    flex: 1;
    flex-direction: column;
    min-height: '100%';
    height: '100%';
    justify-content: 'space-evenly';
    background-color: #272727;
  }
  #header {
    font-size: 22px;
    padding: 5px 10px 0px 10px;
    color: white;
  }
  #subHeader {
    font-size: 14px;
    padding: 0px 10px 10px 10px;
    color: white;
  }
  #subHeader {
    font-size: 14px;
    padding: 0px 10px 10px 10px;
    color: white;
  }

  #headText {
    margin: 5px 5px 5px 0;
    font-size: 18px;
    color: white;
  }
  #infoText {
    padding: 5px 0 0 5px;
    color: white;
  }
  #informationContainer {
    height: 180;
    width: 230;
    background: #111111;
    border-radius: 5px;
  }
`;
export default hot(App);
