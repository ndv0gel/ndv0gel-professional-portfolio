import { Container, Row, Col } from 'react-bootstrap';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export const metadata = {
  title: 'Projects - Nathan Vogel',
  description: 'View all of my projects and work',
};

export default function ProjectsPage() {
  return (
    <main>
      <section style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }} className="py-5 text-center">
        <Container>
          <h1 className="display-4 fw-bold">My Projects</h1>
          <p className="lead">Featured work and significant endeavors</p>
        </Container>
      </section>
      <section className="py-5" style={{ background: '#fff8f1' }}>
        <Container>
          <Row className="g-4">
            {projects.map((project) => (
              <Col key={project.id} md={6} lg={4}>
                <ProjectCard project={project} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </main>
  );
}
