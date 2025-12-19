import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';

export const generateStaticParams = () => {
  return projects.map((project) => ({
    slug: project.slug,
  }));
};

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const project = projects.find((p) => p.slug === params.slug);
  return {
    title: `${project?.title} - Nathan Vogel`,
    description: project?.shortDescription,
  };
};

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="py-5">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto">
            <Link href="/projects" className="btn btn-link text-decoration-none mb-4">
              ← Back to Projects
            </Link>

            <h1 className="display-4 fw-bold text-center mb-5">{project.title}</h1>

            <div className="bg-light p-5 rounded">
              <h2 className="fw-bold mb-3">Overview</h2>
              <p>{project.overview}</p>

              <h2 className="fw-bold mb-3 mt-5">Technologies Used</h2>
              <ul>
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>

              <h2 className="fw-bold mb-3 mt-5">My Role</h2>
              <ul>
                {project.myRole.map((role) => (
                  <li key={role}>{role}</li>
                ))}
              </ul>

              <h2 className="fw-bold mb-3 mt-5">Challenges & Solutions</h2>
              <p>{project.challenges}</p>

              <h2 className="fw-bold mb-3 mt-5">Key Features</h2>
              <ul>
                {project.keyFeatures.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <h2 className="fw-bold mb-3 mt-5">What I Learned</h2>
              <ul>
                {project.learned.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="text-center mt-5">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                >
                  View Source Code
                </a>
              </div>
            </div>

            <div className="mt-5 mb-5 position-relative rounded" style={{ width: '100%', height: 'auto', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8f9fa' }}>
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={500}
                style={{ objectFit: 'contain', padding: '2rem', maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
