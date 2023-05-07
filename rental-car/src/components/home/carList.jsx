import { Col, Row } from 'antd';
import city from '../../assets/city.jpg';
import xenia from '../../assets/xenia.jpg';

function CarList() {
  return (
    <div className="block productCategories">
      <h2>Car Categories</h2>
      <Row gutter={[24, 24]}>
        <Col lg={4}>
          <div className="content">
            <div className="image">
              <img src={city} />
            </div>
            <h3>Sedan</h3>
          </div>
        </Col>
        <Row>
          <div className="content">
            <div className="image">
              <img src={xenia} />
            </div>
            <h3>Mini Bus</h3>
          </div>
        </Row>
      </Row>
    </div>
  );
}

export default CarList;
