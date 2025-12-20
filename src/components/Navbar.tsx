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
          <Nav className="ms-auto d-flex flex-row flex-wrap gap-2">
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
