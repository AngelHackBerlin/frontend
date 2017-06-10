import * as React from "react";
import Map from "../../map/Map/Map";
import Requests from "../../requests/Requests/Requests";
import { RequestPayload } from "../../requests/RequestsTypes";

const cls = require("./App.css");

type State = {
  requests: RequestPayload[],
};

class App extends React.Component<undefined, State> {
  map: Map;

  state: State = {
    requests: [],
  };

  refMap = (map: Map) => {
    this.map = map;
  };

  render() {
    const {
      requests,
    } = this.state;

    return (
      <div className={cls.app}>
        <div className={cls.requests}>
          <Requests requests={requests}/>
        </div>
        <div className={cls.map}>
          <Map ref={this.refMap} />
        </div>
      </div>
    );
  }
}

export default App;
