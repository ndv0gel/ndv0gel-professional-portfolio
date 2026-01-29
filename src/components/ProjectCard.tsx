import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Use dark green background for shamrocks project to show white logo better
  const backgroundColor = project.slug === 'shamrocks-remake' ? '#1a5c3a' : '#f8f9fa';
  
  return (
    <div className="card h-100 card-hover border-0 shadow-sm">
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: backgroundColor }}>
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
      <div className="d-flex gap-2 mt-auto">
        {project.demoLink && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm"
            style={{ 
              background: 'white', 
              color: '#667eea', 
              border: '1.5px solid #667eea',
              fontWeight: '600',
              flex: '0 1 auto'
            }}
          >
            Demo
          </a>
        )}
        <Link
          href={`/projects/${project.slug}`}
          className="btn btn-sm"
          style={{ 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
            color: 'white', 
            border: 'none',
            fontWeight: '600',
            flex: project.demoLink ? '1' : '1'
          }}
        >
          Learn More →
        </Link>
      </div>
    </div>
  </div>
  );
};

export default ProjectCard;
