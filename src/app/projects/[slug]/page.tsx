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

  const hasSourceLink = (() => {
    if (!project.githubLink) return false;
    try {
      const u = new URL(project.githubLink);
      if (u.hostname !== 'github.com') return true; // allow non-GitHub external links
      const parts = u.pathname.split('/').filter(Boolean);
      // Require at least owner/repo for GitHub links
      return parts.length >= 2;
    } catch {
      return false;
    }
  })();

  const hasDemoLink = (() => {
    if (!project.demoLink) return false;
    try {
      const u = new URL(project.demoLink);
      return u.protocol.startsWith('http');
    } catch {
      return false;
    }
  })();

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
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  {hasDemoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-lg"
                      style={{ 
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
                        color: 'white', 
                        border: 'none',
                        boxShadow: '0 10px 25px rgba(102, 126, 234, 0.3)',
                        fontWeight: '600',
                        padding: '0.75rem 1.75rem'
                      }}
                    >
                      Try Live Demo
                    </a>
                  )}
                  {hasSourceLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-lg"
                      style={{ 
                        background: 'transparent',
                        color: '#667eea',
                        border: '2px solid #667eea',
                        fontWeight: '600',
                        padding: '0.75rem 1.75rem'
                      }}
                    >
                      View on GitHub
                    </a>
                  )}
                </div>
                {!hasSourceLink && (
                  <p className="text-muted mt-3 mb-0">Source code coming soon</p>
                )}
              </div>
            </div>

            {/* Project image removed per request to keep detail pages focused on content */}
          </Col>
        </Row>
      </Container>
    </main>
  );
}
