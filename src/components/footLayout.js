import {
  Col,
  Panel,
  Row,
} from "rsuite";
import { useDataContext } from "./context";

const FooterData = () => {
  const {
    totalRegistered,
    leftSpot,
    openAmount
  } = useDataContext();

  return (
    <>
      <Row gutter={30} className="dashboard-header">
        <Col xs={8}>
          <Panel className="trend-box bg-gradient-red">
            <div className="title">Total Users </div>
            <div className="value">{openAmount}</div>
          </Panel>
        </Col>
        <Col xs={8}>
          <Panel className="trend-box bg-gradient-green">
            <div className="title">Registered </div>
            <div className="value">{totalRegistered}</div>
          </Panel>
        </Col>
        <Col xs={8}>
          <Panel className="trend-box bg-gradient-blue">
            {/* <img className="chart-img" src={images.UVIcon} /> */}
            <div className="title">Left Spot</div>
            <div className="value">{leftSpot}</div>
          </Panel>
        </Col>
      </Row>
    </>
  );
};

export default FooterData;
