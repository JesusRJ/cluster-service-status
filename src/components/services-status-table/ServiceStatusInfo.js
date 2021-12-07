import React from "react";
import { Popover, PopoverBody, PopoverHeader } from "shards-react";
import Service from "../../services/api";
import "./ServiceStatusInfo.css";

class ServiceStatusInfo extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.service = new Service();
    this.state = {
      open: false,
      status: props.status,
      commitInfo: {},
    };
  }

  async toggle() {
    await this.getCommitInfo();

    this.setState({
      open: !this.state.open,
    });
  }

  async getCommitInfo() {
    const status = this.state.status;
    await this.service
      .SearchServiceStatusByName(status.name, status.namespace)
      .then((response) =>
        this.setState({ commitInfo: response.data.commitInfo })
      )
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  bodyNoCommit() {
    return (
      <div>
        <strong className="mr-1 text-warning">Commit não informado!</strong>{" "}
      </div>
    );
  }

  bodyCommit(commit) {
    return (
      <div>
        <span className="d-flex mb-2">
          <i className="material-icons mr-1">flag</i>
          <strong className="mr-1">Status:</strong> {commit.status}
        </span>
        <span className="d-flex mb-2">
          <i class="material-icons mr-1">chat_bubble_outline</i>
          <strong className="mr-1">Título:</strong> {commit.title}
        </span>
        <span className="d-flex mb-2">
          <i className="material-icons mr-1">person</i>
          <strong className="mr-1">Autor:</strong>
          {commit.authorName}
        </span>
        <span className="d-flex mb-2">
          <i className="material-icons mr-1">mail_outline</i>
          <strong className="mr-1">E-Mail:</strong>{" "}
          <strong className="text-success">{commit.authorEmail}</strong>
        </span>
        <span className="d-flex mb-2">
          <i className="material-icons mr-1">calendar_today</i>
          <strong className="mr-1">Data:</strong> {commit.committedDate}
        </span>
        <span className="d-flex">
          <i className="material-icons mr-1">computer</i>
          <strong className="mr-1 ">URL:</strong>
          <a className="weburl" href={commit.webURL}>
            {commit.webURL}
          </a>
        </span>
      </div>
    );
  }

  render() {
    const commit = this.state.commitInfo;
    const popoverId = "popover" + this.props.id;
    const popoverTarget = "#popover" + this.props.id;
    let popoverBody;
    if (!commit) {
      popoverBody = this.bodyNoCommit();
    } else {
      popoverBody = this.bodyCommit(commit);
    }

    return (
      <div>
        <span className="ml-auto" href="#" id={popoverId} onClick={this.toggle}>
          {this.props.title}
        </span>
        <Popover
          placement="right"
          open={this.state.open}
          toggle={this.toggle}
          target={popoverTarget}
          className="popover"
        >
          <PopoverHeader>Git Commit: {this.state.status.name}</PopoverHeader>
          <PopoverBody className="body">{popoverBody}</PopoverBody>
        </Popover>
      </div>
    );
  }
}

export default ServiceStatusInfo;
