'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavBar: React.FC = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path || pathname.startsWith(path);

  return (
    <Navbar bg="light" sticky="top">
      <Container>
        <Navbar.Brand href="/" className="fw-bold">
          Nathan Vogel
        </Navbar.Brand>
        <Nav className="ms-auto d-flex flex-row">
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
      </Container>
    </Navbar>
  );
};

export default NavBar;
