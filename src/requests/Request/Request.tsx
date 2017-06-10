import * as React from "react";
import { RequestPayload } from "../RequestsTypes";
const cls = require("./Request.css");

type Props = {
  request: RequestPayload,
};

class Request extends React.Component<Props, undefined> {
  render() {
    const {
      request,
    } = this.props;

    return (
      <div>
        <div className={cls.header}>
          <div className={cls.type}>{ request.type }</div>
          <div className={cls.date}>{ request.date }</div>
        </div>
        <div className={cls.comment}>
          <p>{ request.comment }</p>
        </div>
      </div>
    );
  }
}

export default Request;
