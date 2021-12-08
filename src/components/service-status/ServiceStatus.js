import React from "react";
import ServiceStatusTable from "../services-status-table/ServiceStatusTable";

class ServiceStatus extends React.Component {
  render() {
    return <ServiceStatusTable servicesStatus={this.props.servicesStatus} />;
  }
}

export default ServiceStatus;
