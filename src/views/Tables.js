import React from "react";
import { Container, Row, Col } from "shards-react";
import PageTitle from "../components/common/PageTitle";
import ServiceStatus from "../components/service-status/ServiceStatus";
import { Service } from "../services/api";

class Tables extends React.Component {
  constructor(props) {
    super(props);
    this.service = new Service();
    this.state = {
      servicesStatus: [],
    };
  }

  async getData() {
    await this.service
      .ListServicesStatus()
      .then((response) => this.setState({ servicesStatus: response.data }))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  async componentDidMount() {
    await this.getData();
  }

  render() {
    const servicesStatus = this.state.servicesStatus;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle
            sm="4"
            title="Serviços"
            subtitle="Status dos"
            className="text-sm-left"
          />
        </Row>
        <Row>
          <Col>
            <ServiceStatus servicesStatus={servicesStatus} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Tables;
