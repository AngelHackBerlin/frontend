import * as React from "react";
import Request from "../Request/Request";
import { RequestPayload } from "../RequestsTypes";

const cls = require("./Requests.css");

type Props = {
  requests: RequestPayload[],
};

class Requests extends React.Component<Props, undefined> {
  render() {
    return (
      <div>
        <div className={cls.title}>Requests</div>
        <div className={cls.requests}>
          {this.props.requests.map(request => <Request key={request.id} request={request} />)}
        </div>
      </div>
    );
  }
}

export default Requests;
