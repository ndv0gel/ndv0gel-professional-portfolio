import { Container, Row, Col } from 'react-bootstrap';
import { essays } from '@/data/essays';
import EssayCard from '@/components/EssayCard';

export const metadata = {
  title: 'Essays - Nathan Vogel',
  description: 'Technical essays and reflections',
};

export default function EssaysPage() {
  return (
    <main>
      <section style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }} className="py-5 text-center">
        <Container>
          <h1 className="display-4 fw-bold">Technical Essays</h1>
          <p className="lead">Reflections on software engineering and development</p>
        </Container>
      </section>
      <section className="py-5" style={{ background: '#fff8f1' }}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <div className="d-grid gap-4">
                {essays.map((essay) => (
                  <div key={essay.id}>
                    <EssayCard essay={essay} />
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
