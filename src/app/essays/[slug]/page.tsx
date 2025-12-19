import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import { essays } from '@/data/essays';
import { notFound } from 'next/navigation';
import fs from 'fs/promises';
import path from 'path';

export const generateStaticParams = () => {
  return essays.map((essay) => ({
    slug: essay.slug,
  }));
};

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const essay = essays.find((e) => e.slug === params.slug);
  return {
    title: `${essay?.title} - Nathan Vogel`,
    description: essay?.description,
  };
};

async function getEssayContent(slug: string) {
  try {
    const filePath = path.join(process.cwd(), 'public', 'essays', `${slug}.html`);
    const content = await fs.readFile(filePath, 'utf-8');
    const bodyMatch = content.match(/<main[^>]*>([\s\S]*?)<\/main>/);
    return bodyMatch ? bodyMatch[1] : content;
  } catch {
    return null;
  }
}

export default async function EssayDetail({ params }: { params: { slug: string } }) {
  const essay = essays.find((e) => e.slug === params.slug);

  if (!essay) {
    notFound();
  }

  const htmlContent = await getEssayContent(params.slug);

  return (
    <main>
      <section style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }} className="py-5">
        <Container>
          <Link href="/essays" className="text-decoration-none" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            ← Back to Essays
          </Link>
          <h1 className="display-4 fw-bold mt-3">{essay.title}</h1>
          <p className="lead mt-3">By Nathan Vogel</p>
        </Container>
      </section>
      <section className="py-5" style={{ background: '#fff8f1' }}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <div className="text-center text-muted mb-5 pb-4 border-bottom">
                <p className="mb-0">
                  <span>{essay.date}</span> • <span>{essay.readTime} min read</span>
                </p>
              </div>

              <div className="bg-white p-5 rounded-3 essay-content" style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
                {htmlContent ? (
                  <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
                ) : (
                  <p>Essay content not found</p>
                )}
              </div>
              
              <div className="mt-5 text-center">
                <Link href="/essays" className="btn btn-lg" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', border: 'none' }}>
                  ← Back to All Essays
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
