import { Col, Row, Carousel } from 'antd';
import getz from '../../assets/getz.jpg';
import avanza from '../../assets/avanza.png';
import xenia from '../../assets/xenia.jpg';
import city from '../../assets/city.jpg';

function Hero() {
  return (
    <div className="heroBlock">
      <Row>
        <Col lg={18}>
          <Carousel autoplay>
            <div>
              <img src={getz} alt="Getz" />
            </div>
            <div>
              <img src={avanza} alt="Avanza" />
            </div>
            <div>
              <img src={xenia} alt="Xenia" />
            </div>
            <div>
              <img src={city} alt="City" />
            </div>
          </Carousel>
        </Col>
      </Row>
    </div>
  );
}

export default Hero;
