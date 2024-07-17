import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import image from '../images/about.png'
import Footer from '../Components/Footer';

function ShapeExample() {
  return (
    <div>
    <Container fluid>
      <Row style={{ justifyContent: 'left', alignItems: 'left', marginTop: '100px' }}>
        <Col sm={7}>
          <Image src={image} style={{ width: '600px' }} thumbnail />
        </Col>
        <Col sm={4}>
          <Row style={{textAlign:'left'}}>
            <h1>ABOUT US</h1>
            <p>Welcome to Abshore IT, where innovation meets practicality. We are a leading IT solutions company dedicated to solving real-life problems with cutting-edge technology. Our team of experts is committed to delivering customized solutions that enhance efficiency, drive growth, and create value for businesses across various industries. At Abshore IT, we believe in harnessing the power of technology to turn challenges into opportunities, ensuring our clients stay ahead in a rapidly evolving digital landscape. Join us on a journey of transformation and let us help you achieve your goals with our reliable and forward-thinking IT solutions.</p>
          </Row>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default ShapeExample;