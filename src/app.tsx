import { Text, Window, hot, View } from "@nodegui/react-nodegui";
import React from "react";
import { QIcon } from "@nodegui/nodegui";
import nodeguiIcon from "../assets/nodegui.jpg";

const minSize = { width: 500, height: 520 };
const winIcon = new QIcon(nodeguiIcon);
class App extends React.Component {
  render() {
    return (
      <Window
        windowIcon={winIcon}
        windowTitle="Hello 👋🏽"
        minSize={minSize}
      >
      </Window>
    );
  }
}

export default hot(App);
