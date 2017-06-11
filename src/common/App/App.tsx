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

const CORDS = [
  { lng: 13.237903988942804, lat: 52.51466842619339 },
  { lng: 13.237813023189318, lat: 52.514784322743076 },
  { lng: 13.237938657602626, lat: 52.514849786798294 },
  { lng: 13.238015897130765, lat: 52.514930476880785 },
  { lng: 13.241572404820204, lat: 52.514765729398796 }
];

class App extends React.Component<undefined, State> {
  map: Map;

  state: State = {
    requests: [],
  };

  componentDidMount() {
    this._initFirebase();
    this._fetchAndListenToRequests();
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

  _fetchAndListenToRequests() {
    let requestsRef = firebase.database().ref('Request');
    requestsRef.on('value', this._onRequestsReceived);
  }

  _onRequestsReceived = (snapshot: any) => {
    let requests = snapshot.val();
    if (requests) {
      if (Array.isArray(requests)) {
        this.setState({ requests: requests.reverse() });
      } else {
        let requestsArray: any[] = [];
        Object.keys(requests).map((key) => {
          requestsArray.push(requests[key]);
        });
        this.setState({ requests: requestsArray });
      }
    }
  }

  handleClick = (request: RequestPayload) => {
    // this.map.locate(request.cords); // TODO: fix

    this.map.locate(CORDS[Math.round(Math.random() * CORDS.length)]);
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
          <Requests requests={requests} onClick={this.handleClick} />
        </div>
        <div className={cls.map}>
          <Map ref={this.refMap} />
        </div>
      </div>
    );
  }
}

export default App;
