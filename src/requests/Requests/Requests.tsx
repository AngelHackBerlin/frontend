import * as React from "react";
import Request from "../Request/Request";
import { RequestPayload } from "../RequestsTypes";
import { CSSTransitionGroup } from "react-transition-group";

const cls = require("./Requests.css");

type Props = {
  requests: RequestPayload[],
  onClick: (request: RequestPayload) => void,
};

class Requests extends React.Component<Props, undefined> {
  render() {
    return (
      <div>
        <div className={cls.title}>Requests</div>
        <div className={cls.requests}>
          <CSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={400}
            transitionLeaveTimeout={400}
          >
            {this.props.requests.map(request =>
              <Request key={request.id} request={request} onClick={this.props.onClick} />)}
          </CSSTransitionGroup>
        </div>
      </div>
    );
  }
}

export default Requests;
