'use client';

import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import styles from '../page.module.css';

export default function ResumePage() {
  const downloadUrl = '/resume/Nathan-Vogel-Resume.pdf';

  return (
    <main>
      <section className="resume-hero py-5">
        <Container>
          <Row className="align-items-center g-4">
            <Col lg={8}>
              <p className="resume-overline mb-2">Resume</p>
              <h1 className="display-4 fw-bold mb-3">Full-stack developer focused on dependable, well-crafted products.</h1>
              <p className="lead text-light opacity-75 mb-4">
                I blend TypeScript, React/Next.js, and disciplined engineering practices to ship interfaces that are fast, clear, and maintainable.
                Recently, I have been building project dashboards, essay experiences, and responsive layouts with a focus on accessibility and polish.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a 
                  href={downloadUrl} 
                  className="btn btn-hero-light" 
                  download
                  title="Download resume as PDF"
                >
                  <i className="fas fa-download me-2"></i>Download PDF
                </a>
                <a 
                  href={downloadUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-hero-light"
                  title="View resume in browser"
                >
                  <i className="fas fa-eye me-2"></i>View PDF
                </a>
                <Link href="/projects" className="btn btn-hero-light">
                  <i className="fas fa-folder me-2"></i>View Projects
                </Link>
              </div>
              <div className="d-flex flex-wrap gap-4 resume-stats mt-4">
                <div className="resume-stat">
                  <span className="stat-value">2+</span>
                  <span className="stat-label">Years shipping projects</span>
                </div>
                <div className="resume-stat">
                  <span className="stat-value">12</span>
                  <span className="stat-label">Portfolio builds</span>
                </div>
                <div className="resume-stat">
                  <span className="stat-value">4</span>
                  <span className="stat-label">Team collaborations</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="resume-body py-5">
        <Container>
          <Row className="mb-5">
            <Col>
              <h1 className={styles.pageTitle}>Resume</h1>
            </Col>
          </Row>

          <Row className="g-4 mb-5">
            <Col lg={6}>
              <div className="resume-card h-100">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <p className="resume-overline mb-1">Capabilities</p>
                    <h2 className="h4 mb-0">Skills & Tools</h2>
                  </div>
                </div>
                <div className="mb-3">
                  <h6 className="text-muted">Languages</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL'].map((item) => (
                      <span key={item} className="pill">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mb-3">
                  <h6 className="text-muted">Frontend</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {['React', 'Next.js', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind'].map((item) => (
                      <span key={item} className="pill">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mb-3">
                  <h6 className="text-muted">Backend & Ops</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {['Node.js', 'REST', 'Prisma', 'Git & GitHub', 'CI/CD basics'].map((item) => (
                      <span key={item} className="pill">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h6 className="text-muted">Practices</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {['Agile delivery', 'Testing', 'Accessibility', 'Documentation', 'Code reviews'].map((item) => (
                      <span key={item} className="pill">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={6}>
              <div className="resume-card h-100">
                <p className="resume-overline mb-1">Focus areas</p>
                <h2 className="h4 mb-3">Interests</h2>
                <ul className="resume-list mb-0">
                  <li>Designing full-stack web products with clear UX and resilient APIs.</li>
                  <li>Applying software engineering best practices to keep teams moving fast without losing quality.</li>
                  <li>Building scalable interfaces with component libraries and thoughtful state management.</li>
                  <li>Contributing to open source and sharing learnings through writing.</li>
                </ul>
              </div>
            </Col>
          </Row>

          <Row className="g-4 mb-5">
            <Col>
              <div className="resume-card">
                <p className="resume-overline mb-1">Experience</p>
                <h2 className="h4 mb-4">Recent work</h2>

                <div className="resume-entry">
                  <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
                    <div>
                      <h5 className="mb-1">Software Engineering Projects</h5>
                      <p className="text-muted mb-2">University of Hawaii at Manoa • 2024–2025</p>
                    </div>
                    <span className="pill pill-ghost">Team lead & contributor</span>
                  </div>
                  <ul className="resume-list">
                    <li>Shipped React/Next.js apps with authentication, dashboards, and responsive layouts.</li>
                    <li>Owned GitHub workflows, pull requests, and code reviews to keep quality high.</li>
                    <li>Implemented automated testing and accessibility sweeps for stable releases.</li>
                    <li>Documented architecture and onboarding guides to keep teammates unblocked.</li>
                  </ul>
                </div>

                <div className="resume-entry">
                  <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
                    <div>
                      <h5 className="mb-1">Personal Projects & Portfolio</h5>
                      <p className="text-muted mb-2">2023–Present</p>
                    </div>
                    <span className="pill pill-ghost">Full-stack builder</span>
                  </div>
                  <ul className="resume-list">
                    <li>Built encryption utilities, interactive essays, and project showcases with polished UI systems.</li>
                    <li>Instrumented analytics and performance budgets to keep pages fast.</li>
                    <li>Iterated on design systems with Bootstrap and custom CSS for cohesive branding.</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="g-4">
            <Col lg={6}>
              <div className="resume-card h-100">
                <p className="resume-overline mb-1">Education</p>
                <h2 className="h4 mb-3">University of Hawaii at Manoa</h2>
                <p className="text-muted mb-2">B.S. in Computer Science • Expected December 2026</p>
                <p className="mb-3">Relevant coursework: Software Engineering, Data Structures & Algorithms, Web Development, Database Systems.</p>
                <div className="d-flex flex-wrap gap-2">
                  {['Dean’s list', 'Team projects', 'Technical writing'].map((item) => (
                    <span key={item} className="pill pill-ghost">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Col>

            <Col lg={6}>
              <div className="resume-card h-100">
                <p className="resume-overline mb-1">Download</p>
                <h2 className="h4 mb-3">Want the PDF?</h2>
                <p className="mb-4">Grab the latest copy or reach out if you need a tailored version for a specific role.</p>
                <div className="d-flex flex-wrap gap-3">
                  <a 
                    href={downloadUrl} 
                    className="btn btn-gradient-primary" 
                    download
                    title="Download resume as PDF"
                  >
                    <i className="fas fa-download me-2"></i>Download PDF
                  </a>
                  <a 
                    href={downloadUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary"
                    title="View resume in browser"
                  >
                    <i className="fas fa-eye me-2"></i>View PDF
                  </a>
                  <a 
                    href="mailto:nvogel@hawaii.edu" 
                    className="btn btn-rounded-secondary"
                    title="Send me an email"
                  >
                    <i className="fas fa-envelope me-2"></i>Email Me
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
