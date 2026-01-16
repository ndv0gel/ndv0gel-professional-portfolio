'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavBar: React.FC = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path || pathname.startsWith(path);

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/" className="fw-bold">
          Nathan Vogel
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex flex-row flex-wrap gap-2 align-items-center">
            <Nav.Link href="/" active={pathname === '/'}>
              Home
            </Nav.Link>
            <Nav.Link href="/projects" active={isActive('/projects')}>
              Projects
            </Nav.Link>
            <Nav.Link href="/essays" active={isActive('/essays')}>
              Essays
            </Nav.Link>
            <Nav.Link href="/resume" active={isActive('/resume')}>
              Resume
            </Nav.Link>
            <a
              href="/resume/Nathan-Vogel-Resume.pdf"
              download
              className="btn btn-sm ms-2"
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                fontWeight: '600',
                padding: '0.4rem 1rem',
                borderRadius: '20px',
                boxShadow: '0 4px 12px rgba(102, 126, 234, 0.25)'
              }}
            >
              <i className="fas fa-download me-2"></i>Resume
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
