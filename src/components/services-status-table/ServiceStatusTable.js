import React from "react";
import { Card, CardHeader, CardBody } from "shards-react";
import ServiceStatusInfo from "./ServiceStatusInfo";

class ServiceStatusTable extends React.Component {
  render() {
    const servicesStatus = this.props.servicesStatus;
    let content;

    if (!this.props.servicesStatus || this.props.servicesStatus.length === 0) {
      content = this.noContent();
    } else {
      content = this.renderTable(servicesStatus);
    }

    return (
      <React.Fragment>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Serviços disponíveis</h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">{content}</CardBody>
        </Card>
      </React.Fragment>
    );
  }

  noContent() {
    return (
      <div>
        <span>Não foram localizados serviços!</span>
      </div>
    );
  }

  renderTable(servicesStatus) {
    return (
      <table className="table mb-0">
        <thead className="bg-light">
          <tr>
            <th scope="col" className="border-0">
              #
            </th>
            <th scope="col" className="border-0">
              Name
            </th>
            <th scope="col" className="border-0">
              Namespace
            </th>
            <th scope="col" className="border-0">
              Replicas
            </th>
            <th scope="col" className="border-0">
              Last Update
            </th>
          </tr>
        </thead>
        <tbody>{servicesStatus.map(this.renderLines)}</tbody>
      </table>
    );
  }

  renderLines(service, index) {
    return [
      <tr key={index}>
        <td>{index}</td>
        <td>
          <ServiceStatusInfo id={index} status={service} title={service.name} />
        </td>
        <td>{service.namespace}</td>
        <td>
          {(service.replicasReady ? service.replicasReady : 0) +
            "/" +
            service.replicas}
        </td>
        <td>{service.lastUpdate}</td>
      </tr>,
    ];
  }
}

export default ServiceStatusTable;
