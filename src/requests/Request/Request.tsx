import * as React from "react";
import { RequestPayload, RequestType } from "../RequestsTypes";

const cls = require("./Request.css");
const iconHealth = require("./assets/icon-health.png");
const iconSecurity = require("./assets/icon-security.png");
const iconTech = require("./assets/icon-tech.png");

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
        <div className={cls.icon}>
          <img
            src={ this._getIconByRequestType(request.type) }
            alt=""
          />
        </div>
        <div className={cls.content}>
          <div className={cls.header}>
            <h1 className={cls.type}>{request.type}</h1>
            <div className={cls.date}>{request.date}</div>
          </div>
          <p className={cls.comment}>{request.comment}</p>
        </div>
      </article>
    );
  }

  _getIconByRequestType = (type: RequestType) => {
    switch(type) {
      case "health":
        return iconHealth;
      case "security":
        return iconSecurity;
      case "tech":
        return iconTech;
    }
  }
}

export default Request;
