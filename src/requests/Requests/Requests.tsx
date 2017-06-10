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
          {this._renderRequests()}
        </div>
      </div>
    );
  }

  _renderRequests = () => {
    const {
      requests,
    } = this.props;

    return requests.map(this._renderRequest);
  }

  _renderRequest(request: RequestPayload) {
    return (
      <div className={cls.request}>
        <Request request={request} />
      </div>
    );
  }
}

export default Requests;
