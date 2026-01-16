import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import { projects } from '@/data/projects';
import { essays } from '@/data/essays';
import ProjectCard from '@/components/ProjectCard';
import EssayCard from '@/components/EssayCard';

export const metadata = {
  title: 'Nathan Vogel - Professional Portfolio',
};

export default function Home() {
  const featuredProjects = projects.filter((p) => p.slug !== 'java-encryption-decryption');
  // Select 4 best essays: required software engineering + 3 others
  const bestEssays = [
    essays[0], // Software Engineering Journey (required)
    essays[2], // Smart Questions
    essays[3], // Coding Standards
    essays[7], // Reflecting on Software Engineering
  ];

  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="py-5">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col md={8} className="mt-5 text-center">
              <div className="mb-4 profile-image-container" style={{ width: '200px', height: '200px', margin: '0 auto', borderRadius: '50%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  src="/images/profile.jpg"
                  alt="Nathan Vogel"
                  width={200}
                  height={200}
                  style={{ objectFit: 'cover', objectPosition: 'center 20%', width: '100%', height: '100%' }}
                  priority
                />
              </div>
              <h1 className="display-4 fw-bold mb-3">Nathan Vogel</h1>
              <p className="lead mb-4">
                ICS Student at University of Hawaii at Manoa | Expected Graduation: December 2026
              </p>

              {/* Interests */}
              <div className="mb-5">
                <h2 className="h5 fw-bold mb-3">Interests</h2>
                <div className="interests d-flex justify-content-center gap-3 flex-wrap">
                  <span>💻 Software Development</span>
                  <span>🌐 Web Technologies</span>
                  <span>🏄 Surfing</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="social-links d-flex justify-content-center gap-3">
                <a
                  href="https://github.com/ndv0gel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/nathan-d-vogel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://www.instagram.com/oxyclean07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="mailto:nvogel@hawaii.edu"
                  className="text-decoration-none"
                  aria-label="Email"
                >
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <Container>
          <h2 className="text-center display-5 fw-bold mb-5">Featured Projects</h2>
          <Row className="g-4 mb-4">
            {featuredProjects.map((project) => (
              <Col key={project.id} md={6} lg={4}>
                <ProjectCard project={project} />
              </Col>
            ))}
          </Row>
          <Row>
            <Col className="text-center">
              <Link href="/projects" className="btn btn-lg" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', border: 'none' }}>
                View All Projects
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Essays Section */}
      <section id="essays" className="essays-section">
        <Container>
          <h2 className="text-center display-5 fw-bold mb-5">Featured Essays</h2>
          <Row className="mb-4">
            <Col lg={8} className="mx-auto">
              <div className="d-grid gap-4">
                {bestEssays.map((essay) => (
                  <div key={essay.id}>
                    <EssayCard essay={essay} />
                  </div>
                ))}
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <Link href="/essays" className="btn btn-lg" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', border: 'none' }}>
                View All Essays
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Experience Section */}
      <section id="resume" className="experience-section">
        <Container>
          <h2 className="text-center display-5 fw-bold mb-5">Professional Experience</h2>
          <Row>
            <Col lg={8} className="mx-auto">
              <div className="mb-4 experience-card">
                <h3 className="fw-bold mb-2">Student Developer</h3>
                <p className="fw-semibold text-muted mb-1">University of Hawaii at Manoa</p>
                <p className="text-muted mb-3">August 2023 - Present</p>
                <ul className="list-unstyled">
                  <li className="mb-2">✓ Developing web applications using JavaScript and HTML/CSS</li>
                  <li className="mb-2">✓ Collaborating with team members using Git version control</li>
                  <li>✓ Implementing responsive design principles</li>
                </ul>
              </div>

              <div className="experience-card">
                <h3 className="fw-bold mb-2">Lead Lifeguard</h3>
                <p className="fw-semibold text-muted mb-1">City of Temecula</p>
                <p className="text-muted mb-3">May 2021 - Present</p>
                <ul className="list-unstyled">
                  <li className="mb-2">✓ Maintained First Aid and CPR proficiency to provide optimal support to individuals in distress</li>
                  <li className="mb-2">✓ Observed recreational users to detect safety concerns and prevent ongoing violations</li>
                  <li className="mb-2">✓ Performed pool tests, recorded results, and adjusted chemical levels to meet safety standards</li>
                  <li>✓ Trained and managed team of lifeguards on pool safety and risk management protocols</li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col className="text-center">
              <Link href="/resume" className="btn btn-lg" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', border: 'none' }}>
                Full Resume
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
