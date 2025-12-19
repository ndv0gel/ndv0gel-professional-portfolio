import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div className="card h-100 card-hover border-0 shadow-sm">
    <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8f9fa' }}>
      <Image
        src={project.image}
        alt={project.title}
        fill
        style={{ objectFit: 'contain', padding: '0.5rem' }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
    <div className="card-body d-flex flex-column">
      <h5 className="card-title fw-bold mb-2" style={{ color: '#667eea' }}>{project.title}</h5>
      <p className="card-text text-muted text-sm mb-3">{project.shortDescription}</p>
      <div className="d-flex flex-wrap gap-2 mb-3">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="badge"
            style={{ background: '#667eea', color: 'white', fontSize: '0.8rem' }}
          >
            {tech}
          </span>
        ))}
      </div>
      <Link
        href={`/projects/${project.slug}`}
        className="btn btn-sm mt-auto"
        style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', border: 'none' }}
      >
        Learn More →
      </Link>
    </div>
  </div>
);

export default ProjectCard;
