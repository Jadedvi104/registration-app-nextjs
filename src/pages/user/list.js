import { useState } from "react";
import { Button, Col, FlexboxGrid, Input, List, Panel, Row } from "rsuite";

const DashboardLists = ({ data: initData, setData }) => {
  const [strSearch, setStrSearch] = useState("");

  const handleSort = () => {
    try{
      setData([...initData].sort());
    } catch (e) {
      console.log(e);
    }
  };

  const handleSearch = (nameInString) => {
    console.log(nameInString);
      const result = [...initData].find((element) => element === nameInString);
      if(result) {
        // setData(result);
        console.log(someString, "handleSearch");
      }
  };

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

      <Input placeholder="Search Input" />
      <FlexboxGrid justify="center">
        <Button appearance="primary" type="submit" onClick={handleSort}>
          Sort
        </Button>
        <Button
          appearance="primary"
          color="violet"
          type="submit"
          onClick={handleSearch(e)}
        >
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
