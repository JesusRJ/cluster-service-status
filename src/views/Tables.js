import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import ServiceStatusInfo from "../components/services-status-table/ServiceStatusInfo";
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
    const lines = this.state.servicesStatus.map((status, index) => {
      return [
        <tr key={index}>
          <td>{index}</td>
          <td>
            <ServiceStatusInfo id={index} status={status} title={status.name} />
          </td>
          <td>{status.namespace}</td>
          <td>
            {(status.replicasReady ? status.replicasReady : 0) +
              "/" +
              status.replicas}
          </td>
          <td>{status.lastUpdate}</td>
        </tr>,
      ];
    });

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle
            sm="4"
            title="Serviços"
            subtitle="Informações dos"
            className="text-sm-left"
          />
        </Row>

        {/* Default Light Table */}
        <Row>
          <Col>
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
                <h6 className="m-0">Serviços disponíveis</h6>
              </CardHeader>
              <CardBody className="p-0 pb-3">
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
                  <tbody>{lines}</tbody>
                </table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Tables;
