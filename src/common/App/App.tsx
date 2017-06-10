import * as React from "react";
import Map from "../../map/Map/Map";

import Requests from "../../requests/Requests";

const cls = require("./App.css");

class App extends React.Component<undefined, undefined> {
  map: Map;

  refMap = (map: Map) => {
    this.map = map;
  };

  render() {
    return (
      <div className={cls.app}>
        <div className={cls.requests}>
          <Requests />
        </div>
        <div className={cls.map}>
          <Map ref={this.refMap} />
        </div>
      </div>
    );
  }
}

export default App;
