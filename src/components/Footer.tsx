import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => (
  <footer className="py-4 mt-5" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
    <Container>
      <Row>
        <Col md={6}>
          <p className="mb-0">&copy; 2025 Nathan Vogel. All rights reserved.</p>
        </Col>
        <Col md={6} className="text-md-end">
          <p className="mb-0">
            <a href="https://github.com/ndv0gel" className="me-3 text-white text-decoration-none" style={{ opacity: 0.9 }}>
              GitHub
            </a>
            <a href="https://www.instagram.com/oxyclean07" className="me-3 text-white text-decoration-none" style={{ opacity: 0.9 }}>
              Instagram
            </a>
            <a href="mailto:nvogel@hawaii.edu" className="text-white text-decoration-none" style={{ opacity: 0.9 }}>
              Email
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
