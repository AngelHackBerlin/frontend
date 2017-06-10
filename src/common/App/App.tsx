import * as React from "react";
import Map from "../../map/Map/Map";
import Requests from "../../requests/Requests/Requests";
import { RequestPayload } from "../../requests/RequestsTypes";

import * as firebase from "firebase";
import "firebase/database";

const data = require("../../data/requests");
const cls = require("./App.css");

type State = {
  requests: RequestPayload[],
};

class App extends React.Component<undefined, State> {
  map: Map;

  state: State = {
    requests: data.requests,
  };

  componentDidMount() {
    this._initFirebase();
  }

  _initFirebase() {
    var config = {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: "angelhackberlin.firebaseapp.com",
      databaseURL: "https://angelhackberlin.firebaseio.com",
      projectId: "angelhackberlin",
      storageBucket: "angelhackberlin.appspot.com",
      messagingSenderId: "928074981588"
    };

    firebase.initializeApp(config);
  }

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
