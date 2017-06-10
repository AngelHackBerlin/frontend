import * as React from "react";

const cls = require("./App.css");

class App extends React.Component<undefined, undefined> {
  render() {
    return (
      <div className={cls.app}>
        <div className={cls.requests}>
          Requests
        </div>
        <div className={cls.map}>
          Map
        </div>
      </div>
    );
  }
}

export default App;
