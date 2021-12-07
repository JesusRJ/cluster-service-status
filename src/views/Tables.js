import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import api from "../services/api";

class Tables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      servicesStatus: [],
    };
  }

  async getData() {
    api
      .get("/v1/services/status")
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
          <td>{status.name}</td>
          <td>{status.namespace}</td>
          <td>{status.replicas}</td>
          <td>{status.replicasReady}</td>
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
                        Replicas Count
                      </th>
                      <th scope="col" className="border-0">
                        Replicas Ready
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
