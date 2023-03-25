import { useState } from "react";
import { Button, Col, FlexboxGrid, List, Panel, Row } from "rsuite";

const DashboardLists = ({ data: initData, useData }) => {

  const handleSort = () => {
    useData(
      [...initData].sort((a, b) => (a.name > b.name ? 1 : -1))
    );
  };

  const handleSearch = (nameInString) => {};

  return (
    <>
      <Panel header="Registered Users" bordered>
        <List size="sm">
          {initData.map((item, index) => (
            <List.Item key={index} index={index}>
              {item}
            </List.Item>
          ))}
        </List>
      </Panel>

      <FlexboxGrid justify="center">
        <Button appearance="primary" type="submit" onClick={handleSort}>
          Sort
        </Button>
        <Button appearance="primary" color="violet" type="submit">
          Find
        </Button>
      </FlexboxGrid>

      <Row gutter={30} className="dashboard-header">
        <Col xs={8}>
          <Panel className="trend-box bg-gradient-red">
            <div className="title">Total Users </div>
            <div className="value">500</div>
          </Panel>
        </Col>
        <Col xs={8}>
          <Panel className="trend-box bg-gradient-green">
            <div className="title">Registered </div>
            <div className="value">251</div>
          </Panel>
        </Col>
        <Col xs={8}>
          <Panel className="trend-box bg-gradient-blue">
            {/* <img className="chart-img" src={images.UVIcon} /> */}
            <div className="title">Left Spot</div>
            <div className="value">249</div>
          </Panel>
        </Col>
      </Row>
    </>
  );
};

export default DashboardLists;
