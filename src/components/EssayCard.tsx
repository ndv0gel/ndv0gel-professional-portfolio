import Link from 'next/link';
import { Essay } from '@/data/essays';

interface EssayCardProps {
  essay: Essay;
}

export const EssayCard: React.FC<EssayCardProps> = ({ essay }) => (
  <div className="card border-0 shadow-sm card-hover" style={{ transition: 'all 0.3s ease' }}>
    <div className="card-body">
      <h5 className="card-title fw-bold mb-3" style={{ color: '#764ba2' }}>{essay.title}</h5>
      <p className="card-text text-muted mb-3">{essay.description}</p>
      <div className="d-flex justify-content-between align-items-center border-top pt-3">
        <small className="text-muted fst-italic">{essay.date}</small>
        <small className="text-muted">{essay.readTime} min read</small>
      </div>
      <Link
        href={`/essays/${essay.slug}`}
        className="btn btn-sm mt-3"
        style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', border: 'none' }}
      >
        Read More →
      </Link>
    </div>
  </div>
);

export default EssayCard;
