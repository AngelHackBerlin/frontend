import * as React from "react";
import { RequestPayload } from "../RequestsTypes";
const cls = require("./Request.css");

type Props = {
  request: RequestPayload,
  onClick: (request: RequestPayload) => void,
};

class Request extends React.Component<Props, undefined> {
  handleClick = () => {
    this.props.onClick(this.props.request);
  };

  render() {
    const {
      request,
    } = this.props;

    return (
      <article className={cls.request} onClick={this.handleClick} role="button">
        <div className={cls.header}>
          <h1 className={cls.type}>{request.type}</h1>
          <div className={cls.date}>{request.date}</div>
        </div>
        <p className={cls.comment}>{request.comment}</p>
      </article>
    );
  }
}

export default Request;
