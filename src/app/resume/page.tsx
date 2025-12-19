'use client';

import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import styles from '../page.module.css';

export default function ResumePage() {
  return (
    <main>
      <section style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }} className="py-5 text-center">
        <Container>
          <h1 className="display-4 fw-bold">Resume</h1>
          <p className="lead">Skills, experience, and education</p>
        </Container>
      </section>
      <section className="py-5" style={{ background: '#fff8f1' }}>
        <Container>
      <Row className="mb-5">
        <Col>
          <h1 className={styles.pageTitle}>Resume</h1>
        </Col>
      </Row>

      {/* Skills Section */}
      <Row className="mb-5">
        <Col>
          <h2 className="mb-4">Skills</h2>
          
          <div className="mb-4">
            <h5>Programming Languages</h5>
            <p>TypeScript, JavaScript, Python, Java, SQL</p>
          </div>

          <div className="mb-4">
            <h5>Frontend Development</h5>
            <p>React, Next.js, HTML5, CSS3, Bootstrap, Tailwind CSS</p>
          </div>

          <div className="mb-4">
            <h5>Backend & Tools</h5>
            <p>Node.js, RESTful APIs, Git, GitHub, VSCode</p>
          </div>

          <div className="mb-4">
            <h5>Software Engineering</h5>
            <p>Agile/Scrum, Code Quality, Testing, Documentation, Problem Solving</p>
          </div>
        </Col>
      </Row>

      {/* Professional Interests */}
      <Row className="mb-5">
        <Col>
          <h2 className="mb-4">Professional Interests</h2>
          <ul>
            <li>Full-stack web development</li>
            <li>Software engineering best practices</li>
            <li>Building scalable applications</li>
            <li>Open source contributions</li>
          </ul>
        </Col>
      </Row>

      {/* Experience Section */}
      <Row className="mb-5">
        <Col>
          <h2 className="mb-4">Experience</h2>

          <div className="mb-5">
            <div className="d-flex justify-content-between align-items-start mb-2">
              <div>
                <h5>Software Engineering Course - Project Development</h5>
                <p className="text-muted mb-2">University of Hawaii, Manoa • 2024-2025</p>
              </div>
            </div>
            <ul className="mb-3">
              <li>Developed multiple web applications using React and Next.js</li>
              <li>Collaborated with team members using Git and GitHub workflows</li>
              <li>Implemented responsive user interfaces with Bootstrap and modern CSS</li>
              <li>Learned software engineering principles including testing, documentation, and code quality</li>
            </ul>
          </div>

          <div className="mb-5">
            <div className="d-flex justify-content-between align-items-start mb-2">
              <div>
                <h5>Personal Projects & Portfolio</h5>
                <p className="text-muted mb-2">2023-2025</p>
              </div>
            </div>
            <ul className="mb-3">
              <li>Built full-stack applications from concept to deployment</li>
              <li>Developed data encryption/decryption tools and utilities</li>
              <li>Created interactive projects showcasing software development skills</li>
            </ul>
          </div>
        </Col>
      </Row>

      {/* Education Section */}
      <Row className="mb-5">
        <Col>
          <h2 className="mb-4">Education</h2>
          <div>
            <h5>Bachelor of Science in Computer Science</h5>
            <p className="text-muted">University of Hawaii, Manoa (Expected 2025)</p>
            <p>Coursework: Software Engineering, Data Structures, Algorithms, Web Development, Database Systems</p>
          </div>
        </Col>
      </Row>

      {/* Download Resume */}
      <Row>
        <Col>
          <div className="mt-5 pt-5 border-top">
            <p className="text-muted">
              For a complete resume in PDF format, please <Link href="mailto:your.email@hawaii.edu" className="text-decoration-none">contact me</Link>.
            </p>
          </div>
        </Col>
      </Row>
        </Container>
      </section>
    </main>
  );
}
